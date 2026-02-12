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

        // Environment guard
        const missingEnv: string[] = [];
        if (!process.env.RESEND_API_KEY) missingEnv.push("RESEND_API_KEY");
        if (!process.env.FROM_EMAIL) missingEnv.push("FROM_EMAIL");

        if (missingEnv.length) {
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({
                    error: `Missing env vars: ${missingEnv.join(", ")}`
                }),
            };
        }

        // Initialize Resend inside handler
        const resend = new Resend(process.env.RESEND_API_KEY);

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
        const requiredFields = ['fullName', 'email', 'phone', 'company', 'priorityBottleneck'];
        for (const field of requiredFields) {
            if (!data[field]) {
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ error: `Missing required field: ${field}` }),
                };
            }
        }

        // Send email via Resend
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
            throw error;
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'Intake received successfully' }),
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
