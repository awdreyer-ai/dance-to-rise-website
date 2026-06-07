import { cookies } from "next/headers";
import { createHmac } from "crypto";

const COOKIE = "dtr_admin_session";

function sign(password: string): string {
  const secret = process.env.ADMIN_PASSWORD ?? "fallback";
  return createHmac("sha256", secret).update(password).digest("hex");
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return false;
  const expected = sign(process.env.ADMIN_PASSWORD ?? "");
  return token === expected;
}

export function makeSessionToken(): string {
  return sign(process.env.ADMIN_PASSWORD ?? "");
}

export { COOKIE };
