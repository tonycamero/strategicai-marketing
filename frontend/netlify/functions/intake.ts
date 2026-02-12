import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
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
                body: JSON.stringify({ message: 'Success' }),
            };
        }

        // Server-side validation
        const requiredFields = ['fullName', 'email', 'phone', 'company', 'priorityBottleneck'];
        for (const field of requiredFields) {
            if (!data[field]) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: `Missing required field: ${field}` }),
                };
            }
        }

        // Send email via Resend
        // NOTE: Ensure RESEND_API_KEY and FROM_EMAIL are set in Netlify environment variables.
        // If marketing@strategicai.app is not verified, this might fail unless using a verified domain.
        const { error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || 'StrategicAI <marketing@strategicai.app>',
            to: ['tony@strategicai.app'],
            subject: `New Intake: ${data.fullName} - ${data.company}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-lg: 8px;">
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
            body: JSON.stringify({ message: 'Intake received successfully' }),
        };
    } catch (error: any) {
        console.error('Error processing intake:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
