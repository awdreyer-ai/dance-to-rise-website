import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getApplicationById, initDb } from "@/lib/db";

function Row({ label, value }: { label: string; value: string | number | boolean | null | undefined }) {
  const display =
    value === null || value === undefined || value === ""
      ? <span className="text-gray-400 italic">—</span>
      : typeof value === "boolean"
      ? value ? "✅ Yes" : "❌ No"
      : String(value);

  return (
    <tr className="border-b border-gray-50">
      <td className="py-2.5 pr-4 text-sm font-medium text-[#555555] whitespace-nowrap w-56">{label}</td>
      <td className="py-2.5 text-sm text-[#1A1A1A]">{display}</td>
    </tr>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-5">
      <div className="px-6 py-4 bg-[#F7F9FC] border-b border-gray-100">
        <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2547B2]">{title}</h2>
      </div>
      <div className="px-6 py-2">
        <table className="w-full">
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const { id } = await params;
  await initDb();
  const app = await getApplicationById(Number(id));
  if (!app) notFound();

  const arr = (v: unknown) =>
    Array.isArray(v) ? v.join(", ") : v ? String(v) : "—";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <Link
            href="/admin/applications"
            className="text-sm text-[#2547B2] hover:underline mb-2 inline-block"
          >
            ← Back to applications
          </Link>
          <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A3578]">
            {app.dancer1_full_name} &amp; {app.dancer2_full_name}
          </h1>
          <p className="text-sm text-[#555555] mt-1 font-mono">{app.reference_number}</p>
        </div>
        <p className="text-sm text-[#555555]">
          Submitted{" "}
          {new Date(app.submitted_at).toLocaleDateString("en-ZA", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      <Section title="Dancer 1">
        <Row label="Full Name" value={app.dancer1_full_name} />
        <Row label="Date of Birth" value={app.dancer1_dob?.toString().slice(0, 10)} />
        <Row label="Gender" value={app.dancer1_gender} />
        <Row label="School" value={app.dancer1_school} />
        <Row label="Grade" value={app.dancer1_grade} />
        <Row label="Area" value={app.dancer1_area} />
        <Row label="Guardian Name" value={app.dancer1_guardian_name} />
        <Row label="Relationship to Dancer" value={app.dancer1_guardian_relationship} />
        <Row label="Guardian Phone" value={app.dancer1_guardian_phone} />
        <Row label="Guardian Email" value={app.dancer1_guardian_email} />
        <Row label="Parental Consent" value={app.dancer1_guardian_consent} />
      </Section>

      <Section title="Dancer 2">
        <Row label="Full Name" value={app.dancer2_full_name} />
        <Row label="Date of Birth" value={app.dancer2_dob?.toString().slice(0, 10)} />
        <Row label="Gender" value={app.dancer2_gender} />
        <Row label="School" value={app.dancer2_school} />
        <Row label="Grade" value={app.dancer2_grade} />
        <Row label="Area" value={app.dancer2_area} />
        <Row label="Guardian Name" value={app.dancer2_guardian_name} />
        <Row label="Relationship to Dancer" value={app.dancer2_guardian_relationship} />
        <Row label="Guardian Phone" value={app.dancer2_guardian_phone} />
        <Row label="Guardian Email" value={app.dancer2_guardian_email} />
        <Row label="Parental Consent" value={app.dancer2_guardian_consent} />
      </Section>

      <Section title="Dance Information">
        <Row label="Studio / Club" value={app.studio_name} />
        <Row label="Coach Name" value={app.coach_name} />
        <Row label="Coach Phone" value={app.coach_phone} />
        <Row label="Coach Email" value={app.coach_email} />
        <Row label="Danced Together" value={app.danced_together} />
        <Row label="Styles Competed" value={arr(app.styles_competed)} />
        <Row label="Competition Level" value={app.competition_level} />
        <Row label="Competitions (12m)" value={app.competitions_last12} />
        <Row label="Recent Results" value={app.recent_results} />
      </Section>

      <Section title="Financial Circumstances">
        <Row label="Cost Challenges" value={arr(app.cost_challenges)} />
        <Row label="Other Challenge (specified)" value={app.cost_challenges_other} />
        <Row label="Missed Competition" value={app.missed_competition} />
        <Row label="Missed Explanation" value={app.missed_explanation} />
      </Section>

      {/* Why applying — full text */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-5">
        <div className="px-6 py-4 bg-[#F7F9FC] border-b border-gray-100">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2547B2]">Why Applying</h2>
        </div>
        <div className="px-6 py-5">
          <p className="text-sm text-[#1A1A1A] whitespace-pre-wrap leading-relaxed">{app.why_applying}</p>
        </div>
      </div>

      {/* Motivation letter */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-5">
        <div className="px-6 py-4 bg-[#F7F9FC] border-b border-gray-100">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2547B2]">Motivation Letter</h2>
        </div>
        <div className="px-6 py-5">
          {app.motivation_file_base64 ? (
            <a
              href={`/api/admin/applications/${app.id}/download`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2547B2] text-white text-sm font-semibold rounded-full hover:bg-[#1d3a8e] transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Motivation Letter
              {app.motivation_file_name ? ` — ${app.motivation_file_name}` : ""}
            </a>
          ) : app.motivation_letter ? (
            <>
              <p className="text-xs text-[#555555] italic mb-3">Motivation letter typed in form</p>
              <p className="text-sm text-[#1A1A1A] whitespace-pre-wrap leading-relaxed">{app.motivation_letter}</p>
            </>
          ) : (
            <p className="text-sm text-gray-400 italic">Not provided</p>
          )}
        </div>
      </div>

      <Section title="Coach Recommendation">
        <Row label="Recommendation" value={app.coach_recommendation} />
        <Row label="Coach Confirmation" value={app.coach_confirmation} />
      </Section>

      {/* Coach comments full text */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-5">
        <div className="px-6 py-4 bg-[#F7F9FC] border-b border-gray-100">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2547B2]">Coach Comments</h2>
        </div>
        <div className="px-6 py-5">
          <p className="text-sm text-[#1A1A1A] whitespace-pre-wrap leading-relaxed">{app.coach_comments}</p>
        </div>
      </div>

      <Section title="Declarations &amp; Consent">
        <Row label="Guardian Declaration" value={app.guardian_declaration} />
        <Row label="POPIA Consent" value={app.popia_consent} />
        <Row label="Media — Website" value={app.media_consent_website} />
        <Row label="Media — Social" value={app.media_consent_social} />
        <Row label="Media — Fundraising" value={app.media_consent_fundraising} />
        <Row label="Media — Sponsors" value={app.media_consent_sponsor} />
        <Row label="Media — Documentary" value={app.media_consent_documentary} />
      </Section>
    </div>
  );
}
