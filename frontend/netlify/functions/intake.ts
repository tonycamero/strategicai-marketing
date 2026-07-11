import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

export const handler: Handler = async (event) => {
    const allowedOrigin = "https://strategicai.app";

    const headers = {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Content-Type": "application/json",
    };

    // Handle OPTIONS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers,
            body: '',
        };
    }

    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    try {
        const data = JSON.parse(event.body || '{}');

        // Spam protection: Honeypot field check
        if (data.b_website) {
            console.warn('Spam detected via honeypot field');
            return {
                statusCode: 200, // Still return 200 to fool bots
                headers,
                body: JSON.stringify({ message: 'Success' }),
            };
        }

        // Server-side validation
        const requiredFields = ['fullName', 'email', 'phone', 'company', 'role', 'teamSize', 'priorityBottleneck'];
        for (const field of requiredFields) {
            if (!data[field]) {
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ error: `Missing required field: ${field}` }),
                };
            }
        }

        const source = 'strategicai-marketing';
        const offer = 'executive_brief';
        const marketingSurface = typeof data.source === 'string' && data.source.trim().length > 0
            ? data.source.trim()
            : 'executive_brief_intake';
        const platformBaseUrl = process.env.STRATEGICAI_PLATFORM_API_BASE_URL || 'https://go.strategicai.app';
        const prospectPayload = {
            source,
            offer,
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            company: data.company,
            role: data.role,
            teamSize: data.teamSize,
            website: data.website || null,
            pains: Array.isArray(data.pains) ? data.pains : [],
            otherPainText: data.otherPainText || null,
            priorityBottleneck: data.priorityBottleneck,
            notes: data.notes || null,
            submittedAt: new Date().toISOString(),
            metadata: {
                marketingSurface,
                stage: data.stage || null,
                origin: event.headers.origin || null,
                referer: event.headers.referer || null,
            },
        };

        const prospectResponse = await fetch(`${platformBaseUrl.replace(/\/$/, '')}/api/public/prospect-intake`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prospectPayload),
        });

        if (!prospectResponse.ok) {
            const platformError = await prospectResponse.json().catch(() => null);
            console.error('Prospect intake write failed:', platformError || prospectResponse.statusText);
            return {
                statusCode: 502,
                headers,
                body: JSON.stringify({
                    error: 'Pipeline write failed',
                    detail: platformError?.error || platformError?.message || prospectResponse.statusText,
                }),
            };
        }

        const prospectResult = await prospectResponse.json().catch(() => null);

        if (process.env.RESEND_API_KEY && process.env.FROM_EMAIL) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const { error } = await resend.emails.send({
                from: process.env.FROM_EMAIL as string,
                to: ['tony@strategicai.app'],
                subject: `New Intake: ${data.fullName} - ${data.company}`,
                html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <h1 style="color: #2563eb; font-size: 24px; margin-bottom: 24px;">New Intake Submission</h1>
                    
                    <div style="margin-bottom: 16px;">
                        <strong style="color: #64748b;">Name:</strong>
                        <div style="margin-top: 4px; font-size: 16px;">${data.fullName}</div>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <strong style="color: #64748b;">Email:</strong>
                        <div style="margin-top: 4px; font-size: 16px;">${data.email}</div>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <strong style="color: #64748b;">Phone:</strong>
                        <div style="margin-top: 4px; font-size: 16px;">${data.phone}</div>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <strong style="color: #64748b;">Company:</strong>
                        <div style="margin-top: 4px; font-size: 16px;">${data.company}</div>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <strong style="color: #64748b;">Role / Team:</strong>
                        <div style="margin-top: 4px; font-size: 16px;">${data.role} (Team: ${data.teamSize})</div>
                    </div>

                    <div style="margin-bottom: 16px;">
                        <strong style="color: #64748b;">Website:</strong>
                        <div style="margin-top: 4px; font-size: 16px;">${data.website || 'N/A'}</div>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <strong style="color: #64748b;">Primary Pains:</strong>
                        <div style="margin-top: 4px; font-size: 16px;">${Array.isArray(data.pains) ? data.pains.join(', ') : data.pains}</div>
                    </div>

                    ${data.otherPainText ? `
                    <div style="margin-bottom: 16px;">
                        <strong style="color: #64748b;">Other Pain Detail:</strong>
                        <div style="margin-top: 4px; font-size: 16px;">${data.otherPainText}</div>
                    </div>
                    ` : ''}
                    
                    <div style="margin-bottom: 16px;">
                        <strong style="color: #64748b;">#1 Thing Breaking:</strong>
                        <div style="margin-top: 4px; font-size: 16px; padding: 12px; background: #f8fafc; border-left: 4px solid #2563eb;">${data.priorityBottleneck}</div>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <strong style="color: #64748b;">Additional Info:</strong>
                        <div style="margin-top: 4px; font-size: 16px;">${data.notes || 'None'}</div>
                    </div>
                </div>
            `,
            });

            if (error) {
                console.error('Resend error:', error);
            }
        } else {
            console.warn('Skipping intake email notification because RESEND_API_KEY or FROM_EMAIL is missing.');
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                message: 'Intake received successfully',
                prospect: prospectResult?.prospect || null,
            }),
        };
    } catch (error: any) {
        console.error('Error processing intake:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: "Internal Server Error",
                detail: error?.message || String(error),
            }),
        };
    }
};
