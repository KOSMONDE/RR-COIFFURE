import { cookies } from "next/headers";
import AdminLogoutButton from "./AdminLogoutButton";

export default async function AdminControls() {
  const c = await cookies();
  // Protection : certaines phases de build peuvent renvoyer un store sans méthode get
  const getCookie = typeof (c as any).get === "function" ? (c as any).get.bind(c) : null;
  const token = getCookie?.("admin_token")?.value ?? getCookie?.("maintenance_auth")?.value;
  if (!token) return null;

  // Validation stricte optionnelle
  if (process.env.ADMIN_TOKEN && token !== process.env.ADMIN_TOKEN) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AdminLogoutButton />
    </div>
  );
}
