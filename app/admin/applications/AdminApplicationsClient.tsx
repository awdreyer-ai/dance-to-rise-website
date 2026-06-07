"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ApplicationSummary } from "@/lib/db";

export default function AdminApplicationsClient({
  applications,
}: {
  applications: ApplicationSummary[];
}) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<number | null>(null);
  const [rows, setRows] = useState(applications);

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

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F7F9FC] border-b border-gray-100">
              <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Reference</th>
              <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Dancer 1</th>
              <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Dancer 2</th>
              <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Submitted</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {rows.map((app, i) => (
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
                  <div className="flex items-center gap-2 justify-end">
                    <Link
                      href={`/admin/applications/${app.id}`}
                      className="px-3 py-1.5 bg-[#2547B2] text-white text-xs font-semibold rounded-full hover:bg-[#1d3a8e] transition-colors duration-200"
                    >
                      View
                    </Link>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
