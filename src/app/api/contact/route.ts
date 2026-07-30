import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields: name, email, or message.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'Clay Eavenson <contact@clayeavenson.com>';
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!resendApiKey || !contactEmail) {
      console.error('Contact form environment is incomplete', {
        hasResendApiKey: Boolean(resendApiKey),
        hasContactEmail: Boolean(contactEmail),
      });

      return NextResponse.json(
        { success: false, message: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: trimmedEmail,
      subject: `New Contact Submission from ${trimmedName}`,
      text: [
        'New Website Contact Submission',
        '',
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        '',
        'Message:',
        trimmedMessage,
        '',
        'Sent from the clayeavenson.com contact form.',
      ].join('\n'),
      html: `
        <div style="font-family: sans-serif; color: #141312; line-height: 1.6; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px;">
          <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #0b0c0d;">New Website Contact Submission</h1>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; font-size: 16px;"><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
            <p style="margin: 0 0 10px 0; font-size: 16px;"><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
          </div>
          <div style="background: #f3f0ec; padding: 16px; border-radius: 4px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: #6f6a63;">Message:</p>
            <p style="margin: 0; font-size: 16px; white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
          <p style="margin: 0; font-size: 12px; color: #8e8a85; text-align: center;">Sent from the clayeavenson.com contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send message.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    );
  }
}
