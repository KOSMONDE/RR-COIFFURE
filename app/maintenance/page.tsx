import { redirect } from "next/navigation"
import MaintenancePageClient from "@/components/maintenance/MaintenancePageClient"

const isMaintenanceEnabled =
  process.env.MAINTENANCE_MODE === "1" || process.env.MAINTENANCE_MODE === "true"

export default function MaintenancePage() {
  if (!isMaintenanceEnabled) {
    redirect("/")
  }

  return <MaintenancePageClient />
}
