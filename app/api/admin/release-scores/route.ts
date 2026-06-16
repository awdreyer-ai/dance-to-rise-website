import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { releaseAllAiScores, initDb } from "@/lib/db";

export async function POST() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await initDb();
  await releaseAllAiScores();
  return NextResponse.json({ success: true });
}
