// app/api/maintenance/logout/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_token", "", { httpOnly: true, path: "/", maxAge: 0 });
  return res;
}
