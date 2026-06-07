import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = "Dance to Rise Foundation <info@dancetorise.org.za>";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, subject, message } = await req.json();

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
        <div style="background: #1A3578; padding: 24px;">
          <h2 style="color: white; margin: 0;">New Contact Message</h2>
        </div>
        <div style="padding: 24px; background: #F7F9FC;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">From:</td><td>${fullName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; font-weight: bold;">Subject:</td><td>${subject}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #E8EDF5;">
            <p style="font-weight: bold; margin: 0 0 8px;">Message:</p>
            <p style="white-space: pre-wrap; margin: 0; color: #555555;">${message}</p>
          </div>
        </div>
      </div>
    `;

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
        <div style="background: #1A3578; padding: 32px; text-align: center;">
          <h1 style="color: white; font-size: 24px; margin: 0;">Dance to Rise Foundation</h1>
          <p style="color: #CADCFC; margin: 8px 0 0;">Where Passion Meets Possibility</p>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #2547B2;">Message Received</h2>
          <p>Hi ${fullName},</p>
          <p>Thank you for getting in touch. We have received your message and will respond as soon as possible.</p>
          <div style="background: #F7F9FC; border-radius: 8px; padding: 16px; margin: 24px 0; border: 1px solid #E8EDF5;">
            <p style="margin: 0; font-size: 13px; color: #555555; font-weight: bold;">Your subject:</p>
            <p style="margin: 4px 0 0; color: #1A1A1A;">${subject}</p>
          </div>
          <p style="color: #555555; font-size: 14px;">
            If your enquiry is urgent, you can also reach us at
            <a href="mailto:info@dancetorise.org.za" style="color: #2547B2;">info@dancetorise.org.za</a>.
          </p>
        </div>
        <div style="background: #1A3578; padding: 16px; text-align: center;">
          <p style="color: #CADCFC; font-size: 12px; margin: 0;">© 2026 Dance to Rise Foundation | NPO Reg: [Pending]</p>
        </div>
      </div>
    `;

    await Promise.allSettled([
      resend.emails.send({
        from: FROM,
        to: ["info@dancetorise.org.za"],
        replyTo: email,
        subject: `[Website Contact] ${subject} — from ${fullName}`,
        html: notificationHtml,
      }),
      resend.emails.send({
        from: FROM,
        to: [email],
        subject: `We received your message — Dance to Rise Foundation`,
        html: confirmationHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
