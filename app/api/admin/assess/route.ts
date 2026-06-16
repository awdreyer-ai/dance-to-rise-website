import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getApplicationById, upsertAiAssessment, initDb } from "@/lib/db";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await initDb();
  const app = await getApplicationById(Number(id));
  if (!app) return NextResponse.json({ error: "Application not found" }, { status: 404 });

  const prompt = `You are an independent assessor for the Dance to Rise Foundation Class of 2027 bursary programme. Score the following application strictly according to the criteria below. Be objective, evidence-based, and consistent.

## SCORING CRITERIA

1. **Financial Need** (0–30 points)
   - 25–30: Severe financial hardship — multiple serious barriers documented, missed competitions due to cost
   - 18–24: Significant financial challenges clearly evidenced
   - 10–17: Moderate financial challenges, some evidence
   - 0–9: Limited evidence of financial need

2. **Commitment to Dance** (0–25 points)
   - 21–25: Exceptional commitment — regular competitions, dedicated training, strong coach endorsement
   - 15–20: Strong commitment with good track record
   - 8–14: Moderate commitment, some gaps
   - 0–7: Limited evidence of commitment

3. **Potential for Development** (0–20 points)
   - 17–20: Outstanding potential — coach strongly believes in trajectory, clear progression
   - 12–16: Good potential with evidence of improvement
   - 6–11: Some potential, limited evidence
   - 0–5: Unclear potential

4. **Motivation Letter** (0–15 points)
   - 13–15: Compelling, specific, shows deep understanding of the opportunity
   - 9–12: Good motivation, genuine and specific
   - 5–8: Adequate but generic
   - 0–4: Weak or missing

5. **Coach Recommendation** (0–10 points)
   - 9–10: Enthusiastic, specific, strongly recommends
   - 6–8: Positive recommendation with some specifics
   - 3–5: Lukewarm or vague
   - 0–2: Weak or not confirmed

## APPLICATION DATA

**Reference**: ${app.reference_number}
**Dancer 1**: ${app.dancer1_full_name} (DOB: ${app.dancer1_dob?.toString().slice(0, 10)}, Grade ${app.dancer1_grade}, Area: ${app.dancer1_area})
**Dancer 2**: ${app.dancer2_full_name} (DOB: ${app.dancer2_dob?.toString().slice(0, 10)}, Grade ${app.dancer2_grade}, Area: ${app.dancer2_area})
**Studio**: ${app.studio_name}
**Coach**: ${app.coach_name}
**Competition level**: ${app.competition_level}
**Competitions in last 12 months**: ${app.competitions_last12}
**Recent results**: ${app.recent_results || "Not provided"}
**Styles competed**: ${Array.isArray(app.styles_competed) ? app.styles_competed.join(", ") : app.styles_competed || "Not specified"}
**Cost challenges**: ${Array.isArray(app.cost_challenges) ? app.cost_challenges.join(", ") : app.cost_challenges || "None listed"}${app.cost_challenges_other ? ` (${app.cost_challenges_other})` : ""}
**Missed competition due to cost**: ${app.missed_competition || "Not specified"}${app.missed_explanation ? ` — ${app.missed_explanation}` : ""}
**Why applying**: ${app.why_applying}
**Motivation letter**: ${app.motivation_letter || (app.motivation_file_name ? `[File uploaded: ${app.motivation_file_name}]` : "Not provided")}
**Coach recommendation**: ${app.coach_recommendation}
**Coach comments**: ${app.coach_comments}
**Coach confirmed**: ${app.coach_confirmation ? "Yes" : "No"}

## RESPONSE FORMAT

Respond with a JSON object only — no prose, no markdown fences:
{
  "financial_need_score": <0-30>,
  "commitment_score": <0-25>,
  "potential_score": <0-20>,
  "motivation_score": <0-15>,
  "coach_rec_score": <0-10>,
  "reasoning": {
    "financial_need": "<2-3 sentence justification>",
    "commitment": "<2-3 sentence justification>",
    "potential": "<2-3 sentence justification>",
    "motivation": "<2-3 sentence justification>",
    "coach_rec": "<2-3 sentence justification>",
    "overall": "<1-2 sentence overall assessment>"
  }
}`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  const raw = response.content[0].type === "text" ? response.content[0].text.trim() : "";

  let scores;
  try {
    scores = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Failed to parse AI response", raw }, { status: 500 });
  }

  const written_total =
    (scores.financial_need_score || 0) +
    (scores.commitment_score || 0) +
    (scores.potential_score || 0) +
    (scores.motivation_score || 0) +
    (scores.coach_rec_score || 0);

  await upsertAiAssessment(Number(id), { ...scores, written_total });

  return NextResponse.json({ success: true, scores: { ...scores, written_total } });
}
