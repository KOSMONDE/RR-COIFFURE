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
  /^\/api\/maintenance\/status(\/|$)/,
];

export function middleware(req: NextRequest) {
  const on = process.env.MAINTENANCE_MODE === "true";
  if (!on) return NextResponse.next();

  const { pathname, origin } = req.nextUrl;

  // autorisés
  if (ALLOW.some((r) => r.test(pathname))) return NextResponse.next();

  // admin connecté
  const cookie = req.cookies.get("admin_token")?.value;
  if (cookie && cookie === (process.env.ADMIN_TOKEN ?? "")) return NextResponse.next();

  // REDIRECT clair vers /maintenance (et non rewrite)
  const url = new URL("/maintenance", origin);
  return NextResponse.redirect(url, 307);
}

export const config = { matcher: ["/:path*"] };
