"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ApplicationSummary } from "@/lib/db";

interface AssessmentResult {
  financial_need_score: number;
  commitment_score: number;
  potential_score: number;
  motivation_score: number;
  coach_rec_score: number;
  written_total: number;
}

interface AppRow extends ApplicationSummary {
  ai_score?: number | null;
  ai_released?: boolean;
}

export default function AdminApplicationsClient({
  applications,
}: {
  applications: AppRow[];
}) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<number | null>(null);
  const [assessing, setAssessing] = useState<number | null>(null);
  const [releasing, setReleasing] = useState(false);
  const [generatingSummary, setGeneratingSummary] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [rows, setRows] = useState(applications);
  const [scores, setScores] = useState<Record<number, AssessmentResult>>({});

  async function handleDelete(id: number, ref: string) {
    if (!confirm(`Delete application ${ref}? This cannot be undone.`)) return;
    setDeleting(id);
    const res = await fetch("/api/admin/applications", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setRows((prev) => prev.filter((r) => r.id !== id));
    } else {
      alert("Delete failed. Please try again.");
    }
    setDeleting(null);
    router.refresh();
  }

  async function handleAssess(id: number) {
    if (!confirm("Run AI assessment on this application? This will score it using Claude against the Foundation's selection criteria.")) return;
    setAssessing(id);
    const res = await fetch("/api/admin/assess", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    if (res.ok && data.scores) {
      setScores((prev) => ({ ...prev, [id]: data.scores }));
    } else {
      alert("Assessment failed. Please try again.");
    }
    setAssessing(null);
  }

  async function handleRelease() {
    if (!confirm("Release AI scores? This should only be done AFTER the human Selection Committee has finalised their scores (Governance Addendum 1).")) return;
    setReleasing(true);
    await fetch("/api/admin/release-scores", { method: "POST" });
    setReleasing(false);
    router.refresh();
  }

  async function handleGenerateSummary() {
    setGeneratingSummary(true);
    const res = await fetch("/api/admin/generate-summary");
    const data = await res.json();
    setSummary(data.summary);
    setGeneratingSummary(false);
  }

  const anyReleased = rows.some((r) => r.ai_released);
  const allAssessed = rows.length > 0 && rows.every((r) => r.ai_score !== null && r.ai_score !== undefined || scores[r.id]);

  return (
    <div className="space-y-6">
      {/* Governance notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
        <strong>Governance Addendum 1:</strong> AI scores are stored separately and must remain hidden until the Selection Committee has finalised human scores. Only release AI scores after human scoring is complete.
      </div>

      {/* Action bar */}
      <div className="flex flex-wrap gap-3">
        {allAssessed && !anyReleased && (
          <button
            onClick={handleRelease}
            disabled={releasing}
            className="px-4 py-2 bg-[#1A3578] text-white text-sm font-semibold rounded-full hover:bg-[#2547B2] transition-colors disabled:opacity-40"
          >
            {releasing ? "Releasing…" : "Release AI Scores (post human scoring)"}
          </button>
        )}
        {anyReleased && (
          <button
            onClick={handleGenerateSummary}
            disabled={generatingSummary}
            className="px-4 py-2 bg-[#CC9438] text-white text-sm font-semibold rounded-full hover:bg-[#A87828] transition-colors disabled:opacity-40"
          >
            {generatingSummary ? "Generating…" : "Generate Summary Report"}
          </button>
        )}
      </div>

      {/* Summary report */}
      {summary && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2547B2]">Assessment Summary</h2>
            <button
              onClick={() => {
                const blob = new Blob([summary], { type: "text/markdown" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "DTR_Class2027_AISummary.md";
                a.click();
              }}
              className="px-3 py-1.5 bg-[#2547B2] text-white text-xs font-semibold rounded-full hover:bg-[#1d3a8e] transition-colors"
            >
              Download
            </button>
          </div>
          <pre className="text-xs text-[#1A1A1A] whitespace-pre-wrap leading-relaxed font-mono overflow-auto max-h-96">{summary}</pre>
        </div>
      )}

      {/* Applications table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F7F9FC] border-b border-gray-100">
                <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Reference</th>
                <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Dancer 1</th>
                <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Dancer 2</th>
                <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Submitted</th>
                <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">AI Score /70</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {rows.map((app, i) => {
                const liveScore = scores[app.id];
                const displayScore = liveScore?.written_total ?? (app.ai_released ? app.ai_score : null);

                return (
                  <tr
                    key={app.id}
                    className={`border-b border-gray-50 hover:bg-[#F7F9FC] transition-colors duration-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#FAFBFD]"
                    }`}
                  >
                    <td className="px-5 py-4 font-mono text-xs text-[#2547B2] font-semibold whitespace-nowrap">
                      {app.reference_number}
                    </td>
                    <td className="px-5 py-4 text-[#1A1A1A] font-medium">{app.dancer1_full_name}</td>
                    <td className="px-5 py-4 text-[#1A1A1A] font-medium">{app.dancer2_full_name}</td>
                    <td className="px-5 py-4 text-[#555555] whitespace-nowrap">
                      {new Date(app.submitted_at).toLocaleDateString("en-ZA", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-4">
                      {displayScore !== null && displayScore !== undefined ? (
                        <span className={`font-semibold ${displayScore >= 50 ? "text-green-700" : displayScore >= 35 ? "text-amber-600" : "text-red-600"}`}>
                          {displayScore}
                        </span>
                      ) : liveScore ? (
                        <span className="text-[#555555] italic text-xs">Assessed (locked)</span>
                      ) : (
                        <span className="text-gray-300 text-xs">—</span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 justify-end">
                        <Link
                          href={`/admin/applications/${app.id}`}
                          className="px-3 py-1.5 bg-[#2547B2] text-white text-xs font-semibold rounded-full hover:bg-[#1d3a8e] transition-colors duration-200"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleAssess(app.id)}
                          disabled={assessing === app.id}
                          className="px-3 py-1.5 bg-[#3A9BAD] text-white text-xs font-semibold rounded-full hover:bg-[#2d7a89] transition-colors duration-200 disabled:opacity-40"
                        >
                          {assessing === app.id ? "Assessing…" : "Assess AI"}
                        </button>
                        <button
                          onClick={() => handleDelete(app.id, app.reference_number)}
                          disabled={deleting === app.id}
                          className="px-3 py-1.5 border border-[#C4305A] text-[#C4305A] text-xs font-semibold rounded-full hover:bg-[#C4305A] hover:text-white transition-colors duration-200 disabled:opacity-40"
                        >
                          {deleting === app.id ? "…" : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
