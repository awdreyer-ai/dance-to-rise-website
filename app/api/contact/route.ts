import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, subject, message } = await req.json();

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");
    await resend.emails.send({
      from: "Dance to Rise Foundation Website <noreply@dancetorise.org.za>",
      to: ["info@dancetorise.org.za"],
      replyTo: email,
      subject: `[Website Contact] ${subject} — from ${fullName}`,
      html: `
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
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
