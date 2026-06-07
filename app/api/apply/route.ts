import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { v4 as uuidv4 } from "uuid";
import { initDb, insertApplication } from "@/lib/db";

const FROM = "Dance to Rise Foundation <info@dancetorise.org.za>";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "re_placeholder_for_build");
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const referenceNumber = `DTR-2027-${uuidv4().slice(0, 8).toUpperCase()}`;

    // ── 1. Persist to database ─────────────────────────────────────────────
    await initDb();
    await insertApplication({
      reference_number: referenceNumber,
      dancer1_full_name: data.dancer1FullName,
      dancer1_dob: data.dancer1Dob,
      dancer1_gender: data.dancer1Gender,
      dancer1_school: data.dancer1School,
      dancer1_grade: data.dancer1Grade,
      dancer1_area: data.dancer1Area,
      dancer1_guardian_name: data.dancer1GuardianName,
      dancer1_guardian_phone: data.dancer1GuardianPhone,
      dancer1_guardian_email: data.dancer1GuardianEmail,
      dancer2_full_name: data.dancer2FullName,
      dancer2_dob: data.dancer2Dob,
      dancer2_gender: data.dancer2Gender,
      dancer2_school: data.dancer2School,
      dancer2_grade: data.dancer2Grade,
      dancer2_area: data.dancer2Area,
      dancer2_guardian_name: data.dancer2GuardianName,
      dancer2_guardian_phone: data.dancer2GuardianPhone,
      dancer2_guardian_email: data.dancer2GuardianEmail,
      studio_name: data.studioName,
      coach_name: data.coachName,
      coach_phone: data.coachPhone,
      coach_email: data.coachEmail,
      danced_together: data.dancedTogether,
      styles_competed: Array.isArray(data.stylesCompeted) ? data.stylesCompeted : [],
      competition_level: data.competitionLevel,
      competitions_last12: Number(data.competitionsLast12) || 0,
      recent_results: data.recentResults || undefined,
      why_applying: data.whyApplying,
      cost_challenges: Array.isArray(data.costChallenges) ? data.costChallenges : [],
      missed_competition: data.missedCompetition || undefined,
      missed_explanation: data.missedExplanation || undefined,
      motivation_letter: data.motivationLetter || undefined,
      motivation_file_url: data.motivationFileUrl || undefined,
      motivation_file_name: data.motivationFileName || undefined,
      coach_recommendation: data.coachRecommendation,
      coach_comments: data.coachComments,
      coach_confirmation: Boolean(data.coachConfirmation),
      guardian_declaration: Boolean(data.guardianDeclaration),
      media_consent_website: Boolean(data.mediaConsentWebsite),
      media_consent_social: Boolean(data.mediaConsentSocial),
      media_consent_fundraising: Boolean(data.mediaConsentFundraising),
      media_consent_sponsor: Boolean(data.mediaConsentSponsor),
      media_consent_documentary: Boolean(data.mediaConsentDocumentary),
      popia_consent: Boolean(data.popiaConsent),
    });

    // ── 2. Send emails ─────────────────────────────────────────────────────
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

    const bool = (v: boolean) => (v ? "✅ Yes" : "❌ No");
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #1A1A1A;">
        <div style="background: #1A3578; padding: 24px;">
          <h2 style="color: white; margin: 0;">New Application — Class of 2027</h2>
          <p style="color: #CADCFC; margin: 8px 0 0;">Reference: <strong>${referenceNumber}</strong></p>
        </div>
        <div style="padding: 24px; background: #F7F9FC;">

          <h3 style="color: #2547B2; border-bottom: 2px solid #E8EDF5; padding-bottom: 6px;">Dancer 1</h3>
          <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
            <tr><td style="padding:4px 8px; font-weight:bold; width:200px;">Name</td><td>${data.dancer1FullName}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">DOB</td><td>${data.dancer1Dob}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Gender</td><td>${data.dancer1Gender}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">School</td><td>${data.dancer1School} (${data.dancer1Grade})</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Area</td><td>${data.dancer1Area}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">Guardian</td><td>${data.dancer1GuardianName}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Guardian Phone</td><td>${data.dancer1GuardianPhone}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">Guardian Email</td><td>${data.dancer1GuardianEmail}</td></tr>
          </table>

          <h3 style="color: #2547B2; border-bottom: 2px solid #E8EDF5; padding-bottom: 6px;">Dancer 2</h3>
          <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
            <tr><td style="padding:4px 8px; font-weight:bold; width:200px;">Name</td><td>${data.dancer2FullName}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">DOB</td><td>${data.dancer2Dob}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Gender</td><td>${data.dancer2Gender}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">School</td><td>${data.dancer2School} (${data.dancer2Grade})</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Area</td><td>${data.dancer2Area}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">Guardian</td><td>${data.dancer2GuardianName}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Guardian Phone</td><td>${data.dancer2GuardianPhone}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">Guardian Email</td><td>${data.dancer2GuardianEmail}</td></tr>
          </table>

          <h3 style="color: #2547B2; border-bottom: 2px solid #E8EDF5; padding-bottom: 6px;">Dance Information</h3>
          <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
            <tr><td style="padding:4px 8px; font-weight:bold; width:200px;">Studio</td><td>${data.studioName}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">Coach</td><td>${data.coachName} | ${data.coachPhone} | ${data.coachEmail}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Danced Together</td><td>${data.dancedTogether}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">Level</td><td>${data.competitionLevel}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Styles</td><td>${Array.isArray(data.stylesCompeted) ? data.stylesCompeted.join(", ") : data.stylesCompeted || "—"}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px; font-weight:bold;">Competitions (12m)</td><td>${data.competitionsLast12 || 0}</td></tr>
            <tr><td style="padding:4px 8px; font-weight:bold;">Recent Results</td><td>${data.recentResults || "—"}</td></tr>
          </table>

          <h3 style="color: #2547B2; border-bottom: 2px solid #E8EDF5; padding-bottom: 6px;">Financial Circumstances</h3>
          <p><strong>Cost challenges:</strong> ${Array.isArray(data.costChallenges) ? data.costChallenges.join(", ") : "—"}</p>
          <p><strong>Missed competition due to cost:</strong> ${data.missedCompetition || "—"}${data.missedExplanation ? ` — ${data.missedExplanation}` : ""}</p>
          <div style="background:white; border-radius:8px; padding:16px; border:1px solid #E8EDF5; margin-top:8px;">
            <p style="font-weight:bold; margin:0 0 8px;">Why applying:</p>
            <p style="white-space:pre-wrap; margin:0; color:#555;">${data.whyApplying}</p>
          </div>

          <h3 style="color: #2547B2; border-bottom: 2px solid #E8EDF5; padding-bottom: 6px; margin-top:24px;">Motivation Letter</h3>
          ${data.motivationFileUrl
            ? `<p>📎 <a href="${data.motivationFileUrl}">${data.motivationFileName || "Uploaded file"}</a></p>`
            : `<div style="background:white; border-radius:8px; padding:16px; border:1px solid #E8EDF5;">
                <p style="white-space:pre-wrap; margin:0; color:#555;">${data.motivationLetter || "—"}</p>
               </div>`}

          <h3 style="color: #2547B2; border-bottom: 2px solid #E8EDF5; padding-bottom: 6px; margin-top:24px;">Coach Recommendation</h3>
          <p><strong>${data.coachRecommendation}</strong></p>
          <p>${data.coachComments}</p>

          <h3 style="color: #2547B2; border-bottom: 2px solid #E8EDF5; padding-bottom: 6px; margin-top:24px;">Declarations</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:4px 8px; width:300px;">Guardian Declaration</td><td>${bool(data.guardianDeclaration)}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px;">POPIA Consent</td><td>${bool(data.popiaConsent)}</td></tr>
            <tr><td style="padding:4px 8px;">Media — Website</td><td>${bool(data.mediaConsentWebsite)}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px;">Media — Social</td><td>${bool(data.mediaConsentSocial)}</td></tr>
            <tr><td style="padding:4px 8px;">Media — Fundraising</td><td>${bool(data.mediaConsentFundraising)}</td></tr>
            <tr style="background:#fff"><td style="padding:4px 8px;">Media — Sponsors</td><td>${bool(data.mediaConsentSponsor)}</td></tr>
            <tr><td style="padding:4px 8px;">Media — Documentary</td><td>${bool(data.mediaConsentDocumentary)}</td></tr>
          </table>

          <div style="margin-top:32px; text-align:center;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/applications"
               style="display:inline-block; background:#2547B2; color:white; padding:12px 28px; border-radius:24px; text-decoration:none; font-weight:bold; font-size:14px;">
              View in Admin Dashboard →
            </a>
          </div>
        </div>
      </div>
    `;

    const resend = getResend();
    const emailsToSend = [];

    if (guardian1Email) {
      emailsToSend.push(
        resend.emails.send({
          from: FROM,
          to: [guardian1Email],
          subject: `Application Received — Dance to Rise Foundation Class of 2027 [${referenceNumber}]`,
          html: confirmationHtml,
        })
      );
    }

    if (guardian2Email && guardian2Email !== guardian1Email) {
      emailsToSend.push(
        resend.emails.send({
          from: FROM,
          to: [guardian2Email],
          subject: `Application Received — Dance to Rise Foundation Class of 2027 [${referenceNumber}]`,
          html: confirmationHtml,
        })
      );
    }

    emailsToSend.push(
      resend.emails.send({
        from: FROM,
        to: ["info@dancetorise.org.za"],
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
