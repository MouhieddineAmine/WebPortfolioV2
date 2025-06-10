import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 });
    }

    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA token missing.' }, { status: 400 });
    }
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify`;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const response = await fetch(verifyURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${recaptchaToken}`,
    });

    const recaptchaData = await response.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed.' }, { status: 400 });
    }

    const msg = {
      to: email,
      from: process.env.FROM_EMAIL!,
      subject: 'Thanks for contacting me!',
      text: `Hi ${name || 'there'},\n\nThanks for reaching out! We received your message and will get back to you shortly.\n\nBest,\nWestAtlanticWeb Team`,
      html: `<p>Hi ${name || 'there'},</p><p>Thanks for reaching out! We received your message and will get back to you shortly.</p>`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: 'Confirmation email sent.' });
  } catch (error: unknown) {
    if (error instanceof Error) {
    console.error('SendGrid error:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
  return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
