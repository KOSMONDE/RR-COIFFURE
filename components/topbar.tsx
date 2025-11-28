import { MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface TopbarProps {
  address: string
  phone: string
  hours: string
  ctaUrl: string
}

export function Topbar({ address, phone, hours, ctaUrl }: TopbarProps) {
  return (
    <div className="border-b border-border bg-brand-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 text-sm">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ink/70 hover:text-brand-600 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">{address}</span>
            </a>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-ink/70 hover:text-brand-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{phone}</span>
            </a>
            <div className="flex items-center gap-2 text-ink/70">
              <Clock className="h-4 w-4" />
              <span className="hidden md:inline">{hours}</span>
            </div>
          </div>
          <Button asChild size="sm" className="rounded-2xl shadow-md bg-brand-600 hover:bg-brand-600/90 text-white">
            <Link href={ctaUrl}>Prendre RDV</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
