import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasAdminCookie: !!(await cookies()).get("admin_token")?.value,
  });
}
