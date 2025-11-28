import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    env: process.env.MAINTENANCE_MODE ?? null,
    hasAdminCookie: !!cookies().get("admin_token")?.value,
    nodeEnv: process.env.NODE_ENV,
  });
}
