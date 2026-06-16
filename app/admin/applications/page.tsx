import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getAllApplications, getAllAssessmentsWithApplications, initDb } from "@/lib/db";
import AdminApplicationsClient from "./AdminApplicationsClient";
import LogoutButton from "./LogoutButton";

export default async function AdminApplicationsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  await initDb();
  const applications = await getAllApplications();
  const assessments = await getAllAssessmentsWithApplications();
  const assessmentMap = Object.fromEntries(
    assessments.map((a) => [a.id, { ai_score: a.written_total, ai_released: a.released }])
  );
  const applicationsWithScores = applications.map((app) => ({
    ...app,
    ...(assessmentMap[app.id] || { ai_score: null, ai_released: false }),
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1A3578]">
            Applications
          </h1>
          <p className="text-[#555555] text-sm mt-1">
            {applications.length} submission{applications.length !== 1 ? "s" : ""} — Class of 2027
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/applications/export"
            className="px-4 py-2 bg-[#CC9438] text-white text-sm font-semibold rounded-full hover:bg-[#A87828] transition-colors duration-200"
          >
            Export CSV
          </Link>
          <LogoutButton />
        </div>
      </div>

      {applications.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
          <p className="text-[#555555] text-lg">No applications received yet.</p>
        </div>
      ) : (
        <AdminApplicationsClient applications={applicationsWithScores} />
      )}
    </div>
  );
}
