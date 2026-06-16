import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAllAssessmentsWithApplications, initDb } from "@/lib/db";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initDb();
  const rows = await getAllAssessmentsWithApplications();

  const assessed = rows.filter((r) => r.written_total !== null && r.released);
  const unassessed = rows.filter((r) => r.written_total === null);

  const lines: string[] = [
    "# Dance to Rise Foundation — Class of 2027",
    "## AI Assessment Summary (Written Application Scores)",
    "",
    "**Important**: These are AI-generated scores to assist the Selection Committee.",
    "Final selection decisions rest entirely with the human Selection Committee.",
    "AI scores were released only after human scores were collated (Governance Addendum 1).",
    "",
    "---",
    "",
    "## Ranked Applicants (Written Score /70)",
    "",
    "| Rank | Reference | Couple | Fin. Need /30 | Commitment /25 | Potential /20 | Motivation /15 | Coach Rec /10 | Written Total /70 |",
    "|------|-----------|--------|--------------|----------------|---------------|----------------|---------------|-------------------|",
  ];

  assessed
    .sort((a, b) => (b.written_total || 0) - (a.written_total || 0))
    .forEach((r, i) => {
      lines.push(
        `| ${i + 1} | ${r.reference_number} | ${r.dancer1_full_name} & ${r.dancer2_full_name} | ${r.financial_need_score} | ${r.commitment_score} | ${r.potential_score} | ${r.motivation_score} | ${r.coach_rec_score} | **${r.written_total}** |`
      );
    });

  if (unassessed.length > 0) {
    lines.push("", "---", "", "## Applications Not Yet Assessed", "");
    unassessed.forEach((r) => {
      lines.push(`- ${r.reference_number} — ${r.dancer1_full_name} & ${r.dancer2_full_name}`);
    });
  }

  lines.push(
    "",
    "---",
    "",
    "## Notes",
    "- Written score = 70% of final score",
    "- Interview score (30 pts) to be added after interviews",
    "- Applicant names should only appear in documents where Media Consent Forms are signed",
    "- Top 5 couples (10 athletes) to be selected for Class of 2027",
    "",
    `*Generated: ${new Date().toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}*`
  );

  return NextResponse.json({ summary: lines.join("\n"), count: assessed.length });
}
