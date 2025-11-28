"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLogoutButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [authed, setAuthed] = useState(false);

  // Cache le bouton sur la page de maintenance
  if (pathname?.startsWith("/maintenance")) return null;

  useEffect(() => {
    // Aligne avec le cookie réellement posé par /api/maintenance/login
    setAuthed(document.cookie.includes("maintenance_auth=") || document.cookie.includes("admin_token="));
  }, []);

  if (!authed) return null;

  async function handleLogout() {
    await fetch("/api/maintenance/logout", {
      method: "POST",
      credentials: "include",
      cache: "no-store",
    });
    router.replace("/maintenance");
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg bg-black/80 text-white px-3 py-1.5 text-sm hover:bg-black shadow-md transition"
      title="Se déconnecter"
    >
      Déconnexion
    </button>
  );
}
