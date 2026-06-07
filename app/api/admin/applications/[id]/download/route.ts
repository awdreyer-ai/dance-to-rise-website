import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getApplicationById, initDb } from "@/lib/db";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id } = await params;
  await initDb();
  const app = await getApplicationById(Number(id));

  if (!app?.motivation_file_base64) {
    return new NextResponse("No file found for this application", { status: 404 });
  }

  const buffer = Buffer.from(app.motivation_file_base64, "base64");
  const contentType = app.motivation_file_type || "application/octet-stream";
  const filename = app.motivation_file_name || "motivation-letter";

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Length": String(buffer.length),
    },
  });
}
