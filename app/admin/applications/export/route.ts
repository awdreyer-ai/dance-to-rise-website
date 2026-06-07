import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAllApplicationsFull, initDb } from "@/lib/db";

function esc(v: unknown): string {
  if (v === null || v === undefined) return "";
  const s = Array.isArray(v) ? v.join("; ") : String(v);
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await initDb();
  const rows = await getAllApplicationsFull();

  const headers = [
    "Reference Number", "Submitted At",
    "Dancer 1 Name", "Dancer 1 DOB", "Dancer 1 Gender", "Dancer 1 School", "Dancer 1 Grade", "Dancer 1 Area",
    "Dancer 1 Guardian Name", "Dancer 1 Guardian Phone", "Dancer 1 Guardian Email",
    "Dancer 2 Name", "Dancer 2 DOB", "Dancer 2 Gender", "Dancer 2 School", "Dancer 2 Grade", "Dancer 2 Area",
    "Dancer 2 Guardian Name", "Dancer 2 Guardian Phone", "Dancer 2 Guardian Email",
    "Studio", "Coach Name", "Coach Phone", "Coach Email", "Danced Together",
    "Styles Competed", "Competition Level", "Competitions Last 12m", "Recent Results",
    "Why Applying", "Cost Challenges", "Missed Competition", "Missed Explanation",
    "Motivation Letter", "Motivation File URL",
    "Coach Recommendation", "Coach Comments", "Coach Confirmation",
    "Guardian Declaration", "POPIA Consent",
    "Media Website", "Media Social", "Media Fundraising", "Media Sponsor", "Media Documentary",
  ];

  const lines = [
    headers.join(","),
    ...rows.map((r) =>
      [
        esc(r.reference_number), esc(r.submitted_at),
        esc(r.dancer1_full_name), esc(r.dancer1_dob?.toString().slice(0, 10)), esc(r.dancer1_gender),
        esc(r.dancer1_school), esc(r.dancer1_grade), esc(r.dancer1_area),
        esc(r.dancer1_guardian_name), esc(r.dancer1_guardian_phone), esc(r.dancer1_guardian_email),
        esc(r.dancer2_full_name), esc(r.dancer2_dob?.toString().slice(0, 10)), esc(r.dancer2_gender),
        esc(r.dancer2_school), esc(r.dancer2_grade), esc(r.dancer2_area),
        esc(r.dancer2_guardian_name), esc(r.dancer2_guardian_phone), esc(r.dancer2_guardian_email),
        esc(r.studio_name), esc(r.coach_name), esc(r.coach_phone), esc(r.coach_email),
        esc(r.danced_together), esc(r.styles_competed), esc(r.competition_level),
        esc(r.competitions_last12), esc(r.recent_results),
        esc(r.why_applying), esc(r.cost_challenges), esc(r.missed_competition), esc(r.missed_explanation),
        esc(r.motivation_letter), esc(r.motivation_file_url),
        esc(r.coach_recommendation), esc(r.coach_comments), esc(r.coach_confirmation),
        esc(r.guardian_declaration), esc(r.popia_consent),
        esc(r.media_consent_website), esc(r.media_consent_social), esc(r.media_consent_fundraising),
        esc(r.media_consent_sponsor), esc(r.media_consent_documentary),
      ].join(",")
    ),
  ];

  const csv = lines.join("\n");
  const filename = `dtr-applications-${new Date().toISOString().slice(0, 10)}.csv`;

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
