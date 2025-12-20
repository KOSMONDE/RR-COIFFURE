import type { Metadata } from "next"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"
import ContactSection from "@/components/home/ContactSection"

export const metadata: Metadata = {
  title: "Contact — RR COIFFURE",
  description:
    "Contactez RR COIFFURE à Genève pour vos rendez-vous, conseils personnalisés et diagnostics sur mesure.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main id="main-content" className="flex-1">
        {/* HERO PAGE */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <div className="mx-auto max-w-5xl space-y-4 text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e] ring-1 ring-[#F9A8D4]/60">
                Contact
              </p>

              <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#2b1019] md:text-5xl">
                Parlons de vos <span className="text-[#EC4899]">cheveux</span>
              </h1>

              <p className="text-sm leading-relaxed text-[#7b4256] sm:text-base">
                Dites-nous vos envies et vos disponibilités : nous revenons vers vous rapidement avec un diagnostic
                personnalisé.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION CONTACT (composant) */}
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}
