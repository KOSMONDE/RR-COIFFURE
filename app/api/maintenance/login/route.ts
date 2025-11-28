// app/api/maintenance/login/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const password = String(body?.password ?? "");

    const ADMIN_TOKEN = process.env.ADMIN_TOKEN ?? "";
    if (!ADMIN_TOKEN) {
      return NextResponse.json({ ok: false, error: "ADMIN_TOKEN not set" }, { status: 500 });
    }

    if (password !== ADMIN_TOKEN) {
      return NextResponse.json({ ok: false, error: "Invalid password" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set("admin_token", ADMIN_TOKEN, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  } catch (e) {
    return NextResponse.json({ ok: false, error: "server error" }, { status: 500 });
  }
}
