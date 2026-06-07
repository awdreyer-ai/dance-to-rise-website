import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = "Dance to Rise Foundation <info@dancetorise.org.za>";

export async function POST(req: NextRequest) {
  try {
    const { fullName, organisation, email, phone, interest, message } = await req.json();

    if (!fullName || !organisation || !email || !interest) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
        <div style="background: #1A3578; padding: 24px;">
          <h2 style="color: white; margin: 0;">New Sponsor Enquiry</h2>
        </div>
        <div style="padding: 24px; background: #F7F9FC;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${fullName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Organisation:</td><td>${organisation}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; font-weight: bold;">Interested In:</td><td><strong style="color: #CC9438;">${interest}</strong></td></tr>
          </table>
          ${message ? `
          <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #E8EDF5;">
            <p style="font-weight: bold; margin: 0 0 8px;">Message:</p>
            <p style="white-space: pre-wrap; margin: 0; color: #555555;">${message}</p>
          </div>
          ` : ""}
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
          <h2 style="color: #2547B2;">Thank You for Your Interest</h2>
          <p>Hi ${fullName},</p>
          <p>Thank you for your interest in supporting <strong>Dance to Rise Foundation</strong>. We have received your enquiry and a member of our team will be in touch shortly.</p>
          <div style="background: #F7F9FC; border-radius: 8px; padding: 16px; margin: 24px 0; border: 1px solid #E8EDF5;">
            <p style="margin: 0; font-size: 13px; color: #555555; font-weight: bold;">Enquiry type:</p>
            <p style="margin: 4px 0 0; font-weight: bold; color: #CC9438;">${interest}</p>
          </div>
          <p>Partnerships with organisations like ${organisation} make a real difference to young DanceSport athletes across South Africa — we look forward to speaking with you.</p>
          <p style="color: #555555; font-size: 14px; margin-top: 32px;">
            In the meantime, if you have any questions please contact us at
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
        subject: `[Sponsor Enquiry] ${interest} — ${fullName} from ${organisation}`,
        html: notificationHtml,
      }),
      resend.emails.send({
        from: FROM,
        to: [email],
        subject: `Thank you for your enquiry — Dance to Rise Foundation`,
        html: confirmationHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sponsor enquiry error:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry. Please try again." },
      { status: 500 }
    );
  }
}
