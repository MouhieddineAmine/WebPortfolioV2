import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 });
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
