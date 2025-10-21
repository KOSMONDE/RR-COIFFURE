import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOW = [
  /^\/maintenance(\/|$)/,
  /^\/_next\//,
  /^\/favicon\.ico$/,
  /^\/robots\.txt$/,
  /^\/sitemap\.xml$/,
  /^\/images\//,
  /^\/api\/maintenance\/login(\/|$)/,
  /^\/api\/maintenance\/logout(\/|$)/,
  /^\/api\/maintenance\/status(\/|$)/, // ✅ autorise la route status
];

export function middleware(req: NextRequest) {
  const on = process.env.MAINTENANCE_MODE === "true";
  if (!on) return NextResponse.next();

  const { pathname } = req.nextUrl;
  if (ALLOW.some((r) => r.test(pathname))) return NextResponse.next();

  const cookie = req.cookies.get("admin_token")?.value;
  if (cookie && cookie === (process.env.ADMIN_TOKEN ?? "")) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

// ✅ Toujours à la fin du fichier
export const config = {
  matcher: ["/:path*"],
};
