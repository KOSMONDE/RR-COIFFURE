import type { Metadata } from "next"
import { services } from "@/data/services"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"
import ServicesCatalog from "@/components/services/ServicesCatalog"

export const metadata: Metadata = {
  title: "Services — RR COIFFURE",
  description:
    "Découvrez toutes les prestations RR COIFFURE : coupes, colorations, balayages, soins profonds, tresses et extensions.",
}

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Galerie", href: "/galerie" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/contact" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader items={navItems} />

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20 bg-linear-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <div className="mx-auto max-w-5xl text-center space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e] ring-1 ring-[#F9A8D4]/60">
                Services
              </p>
              <h1 className="font-display text-[26px] font-extrabold tracking-tight text-[#2b1019] whitespace-nowrap sm:text-4xl sm:whitespace-normal md:text-5xl">
                Nos <span className="text-[#EC4899]">prestations</span>
              </h1>
              <p className="text-[12px] text-[#7b4256] whitespace-nowrap sm:text-base sm:whitespace-normal">
                Coupes, couleurs, soins premium.
              </p>
            </div>
          </div>
        </section>

        <ServicesCatalog services={services} />
      </main>

      <SiteFooter />
    </div>
  )
}
