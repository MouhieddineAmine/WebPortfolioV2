import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, recaptchaToken } = await request.json();

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
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px;">
      <img src="https://aminemouhieddine.com/emailbanner.png" alt="Banner" style="width:100%; max-width:600px; border-radius:8px; margin-bottom: 20px;" />

      <p>Hi ${name || 'there'},</p>

      <p>Thanks for reaching out! I&apos;ve received your message and will get back to you shortly.</p>

      <p>If you need to send me more details or forgot to include something, feel free to contact me again:</p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="https://aminemouhieddine.com/contact" style="display: inline-block; background-color: #242424; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
          Contact Me Again
        </a>
      </div>

      <hr style="border: none; border-top: 1px solid #ccc; margin: 40px 0;" />

      <footer style="font-size: 14px; color: #777; text-align: center;">
        <p>Email: <a href="mailto:amine.mouhieddine01@gmail.com" style="color: ##4f46e5;">amine.mouhieddine01@gmail.com</a></p>
        <p>Phone: <a href="tel:+15145700463" style="color: ##4f46e5;">+1 (514) 570-0463</a></p>
        <p>Portfolio: <a href="https://aminemouhieddine.com" style="color: ##4f46e5;">aminemouhieddine.com</a></p>
      </footer>
    </div>
  `,
    };

    await sgMail.send(msg);

    const internalMsg = {
  to: process.env.NOTIFYME_EMAIL!,
  from: process.env.FROM_EMAIL!,
  subject: 'New Contact Form Submission',
  text: `Name: ${name || 'N/A'}\nEmail: ${email}\nMessage:\n${message}`,
  html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <img src="https://aminemouhieddine.com/formsubmissionbanner.png" alt="Banner" style="width:100%; max-width:600px; border-radius:8px; margin-bottom: 20px;" />
      <p><strong>Name:</strong> ${name || 'N/A'}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background:#f9f9f9; padding:15px; border-left:4px solid #242424;">
        ${message.replace(/\n/g, '<br>')}
      </blockquote>
    </div>
  `,
};
await sgMail.send(internalMsg);


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
