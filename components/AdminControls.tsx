import { cookies } from "next/headers";
import AdminLogoutButton from "./AdminLogoutButton";

export default function AdminControls() {
  const c = cookies();
  const token = c.get("admin_token")?.value;
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
