import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { v4 as uuidv4 } from "uuid";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "re_placeholder_for_build");
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const referenceNumber = `DTR-2027-${uuidv4().slice(0, 8).toUpperCase()}`;

    const guardian1Email = data.dancer1GuardianEmail;
    const guardian2Email = data.dancer2GuardianEmail;

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
        <div style="background: #1A3578; padding: 32px; text-align: center;">
          <h1 style="color: white; font-size: 24px; margin: 0;">Dance to Rise Foundation</h1>
          <p style="color: #CADCFC; margin: 8px 0 0;">Where Passion Meets Possibility</p>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #2547B2;">Application Received!</h2>
          <p>Thank you for applying to <strong>Dance to Rise Foundation — Class of 2027</strong>.</p>
          <p>We have received your application for the following dancers:</p>
          <ul>
            <li><strong>${data.dancer1FullName}</strong></li>
            <li><strong>${data.dancer2FullName}</strong></li>
          </ul>
          <div style="background: #F7F9FC; border-radius: 8px; padding: 16px; margin: 24px 0; border: 1px solid #E8EDF5;">
            <p style="margin: 0; font-size: 13px; color: #555555;">Application Reference Number</p>
            <p style="margin: 4px 0 0; font-size: 20px; font-weight: bold; color: #2547B2; font-family: monospace;">${referenceNumber}</p>
          </div>
          <p>Please keep this reference number for your records.</p>
          <p>We will contact all applicants with outcomes before <strong>December 2026</strong>.</p>
          <p style="margin-top: 32px; color: #555555; font-size: 14px;">
            If you have any questions, please contact us at
            <a href="mailto:info@dancetorise.org.za" style="color: #2547B2;">info@dancetorise.org.za</a>.
          </p>
        </div>
        <div style="background: #1A3578; padding: 16px; text-align: center;">
          <p style="color: #CADCFC; font-size: 12px; margin: 0;">© 2026 Dance to Rise Foundation | NPO Reg: [Pending]</p>
        </div>
      </div>
    `;

    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2547B2;">New Application Received — Class of 2027</h2>
        <p><strong>Reference:</strong> ${referenceNumber}</p>
        <h3>Dancer 1</h3>
        <ul>
          <li>Name: ${data.dancer1FullName}</li>
          <li>DOB: ${data.dancer1Dob}</li>
          <li>School: ${data.dancer1School} (${data.dancer1Grade})</li>
          <li>Area: ${data.dancer1Area}</li>
          <li>Guardian: ${data.dancer1GuardianName} | ${data.dancer1GuardianPhone} | ${data.dancer1GuardianEmail}</li>
        </ul>
        <h3>Dancer 2</h3>
        <ul>
          <li>Name: ${data.dancer2FullName}</li>
          <li>DOB: ${data.dancer2Dob}</li>
          <li>School: ${data.dancer2School} (${data.dancer2Grade})</li>
          <li>Area: ${data.dancer2Area}</li>
          <li>Guardian: ${data.dancer2GuardianName} | ${data.dancer2GuardianPhone} | ${data.dancer2GuardianEmail}</li>
        </ul>
        <h3>Dance Information</h3>
        <ul>
          <li>Studio: ${data.studioName}</li>
          <li>Coach: ${data.coachName} | ${data.coachPhone} | ${data.coachEmail}</li>
          <li>Level: ${data.competitionLevel}</li>
          <li>Styles: ${Array.isArray(data.stylesCompeted) ? data.stylesCompeted.join(", ") : data.stylesCompeted}</li>
          <li>Competed together: ${data.dancedTogether}</li>
          <li>Competitions (12 months): ${data.competitionsLast12 || 0}</li>
        </ul>
        <h3>Financial</h3>
        <p>${data.whyApplying}</p>
        <h3>Coach Recommendation</h3>
        <p><strong>${data.coachRecommendation}</strong></p>
        <p>${data.coachComments}</p>
      </div>
    `;

    const resend = getResend();
    const emailsToSend = [];

    if (guardian1Email) {
      emailsToSend.push(
        resend.emails.send({
          from: "Dance to Rise Foundation <info@dancetorise.org.za>",
          to: [guardian1Email],
          subject: `Application Received — Dance to Rise Foundation Class of 2027 [${referenceNumber}]`,
          html: confirmationHtml,
        })
      );
    }

    if (guardian2Email && guardian2Email !== guardian1Email) {
      emailsToSend.push(
        resend.emails.send({
          from: "Dance to Rise Foundation <info@dancetorise.org.za>",
          to: [guardian2Email],
          subject: `Application Received — Dance to Rise Foundation Class of 2027 [${referenceNumber}]`,
          html: confirmationHtml,
        })
      );
    }

    emailsToSend.push(
      resend.emails.send({
        from: "Dance to Rise Foundation <info@dancetorise.org.za>",
        to: ["applications@dancetorise.org.za"],
        subject: `New Application [${referenceNumber}] — ${data.dancer1FullName} & ${data.dancer2FullName}`,
        html: notificationHtml,
      })
    );

    await Promise.allSettled(emailsToSend);

    return NextResponse.json({ success: true, referenceNumber });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: "Failed to process application. Please try again." },
      { status: 500 }
    );
  }
}
