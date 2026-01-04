"use client";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLogoutButton() {
  const router = useRouter();
  const pathname = usePathname();
  const authed =
    typeof document !== "undefined" &&
    (document.cookie.includes("maintenance_auth=") || document.cookie.includes("admin_token="));
  const isMaintenance = pathname?.startsWith("/maintenance");

  // Cache le bouton sur la page de maintenance
  if (isMaintenance) return null;

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
