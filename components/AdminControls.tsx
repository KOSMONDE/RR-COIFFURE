import { cookies } from "next/headers";
import AdminLogoutButton from "./AdminLogoutButton";

export default function AdminControls() {
  // Afficher le bouton dès qu'un admin est connecté (cookie présent)
  const token = cookies().get("admin_token")?.value;
  if (!token) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AdminLogoutButton />
    </div>
  );
}
