import type { Metadata } from "next"
import Link from "next/link"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"

export const metadata: Metadata = {
  title: "Politique de confidentialite — RR COIFFURE",
  description:
    "Politique de confidentialite RR COIFFURE : donnees collectees, utilisation, conservation et droits des utilisateurs.",
}

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-[#EC4899]/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e] ring-1 ring-[#F9A8D4]/60">
                Confidentialite
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[#2b1019]">
                Politique de <span className="text-[#EC4899]">confidentialite</span>
              </h1>
              <p className="text-sm sm:text-base text-[#7b4256] leading-relaxed">
                Cette page explique comment RR COIFFURE collecte, utilise et protege vos donnees personnelles.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[#FDF2F8]">
          <div className="mx-auto max-w-5xl px-6 md:px-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-[#F9A8D4]/40 bg-white/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(236,72,153,0.12)]">
                <h2 className="text-lg font-semibold text-[#2b1019]">Donnees collectees</h2>
                <ul className="mt-4 space-y-2 text-sm text-[#7b4256]">
                  <li>Coordonnees : nom, email, telephone.</li>
                  <li>Informations de rendez-vous : date, service, message.</li>
                  <li>Donnees techniques : pages consultees et appareil utilise.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-[#F9A8D4]/40 bg-white/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(236,72,153,0.12)]">
                <h2 className="text-lg font-semibold text-[#2b1019]">Utilisation des donnees</h2>
                <ul className="mt-4 space-y-2 text-sm text-[#7b4256]">
                  <li>Repondre a vos demandes et confirmations.</li>
                  <li>Organiser vos rendez-vous et le suivi client.</li>
                  <li>Ameliorer l&apos;experience et le contenu du site.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-[#F9A8D4]/40 bg-white/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(236,72,153,0.12)]">
              <h2 className="text-lg font-semibold text-[#2b1019]">Duree de conservation</h2>
              <p className="mt-3 text-sm text-[#7b4256] leading-relaxed">
                Les donnees sont conservees uniquement le temps necessaire pour traiter vos demandes et respecter nos
                obligations legales. Elles sont ensuite supprimees ou anonymisees.
              </p>
            </div>

            <div className="rounded-3xl border border-[#F9A8D4]/40 bg-white/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(236,72,153,0.12)]">
              <h2 className="text-lg font-semibold text-[#2b1019]">Vos droits</h2>
              <p className="mt-3 text-sm text-[#7b4256] leading-relaxed">
                Vous pouvez demander l&apos;acces, la rectification ou la suppression de vos donnees. Pour exercer vos
                droits, contactez-nous par email ou telephone.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="mailto:contact@rr-coiffure.com"
                  className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3]/70 px-4 py-2 text-xs font-semibold text-[#7b4256] transition-colors hover:border-[#EC4899]/60 hover:text-[#EC4899]"
                >
                  contact@rr-coiffure.com
                </Link>
                <Link
                  href="tel:+41211234567"
                  className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3]/70 px-4 py-2 text-xs font-semibold text-[#7b4256] transition-colors hover:border-[#EC4899]/60 hover:text-[#EC4899]"
                >
                  +41 21 123 45 67
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-[#F9A8D4]/40 bg-white/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(236,72,153,0.12)]">
              <h2 className="text-lg font-semibold text-[#2b1019]">Liens utiles</h2>
              <p className="mt-3 text-sm text-[#7b4256] leading-relaxed">
                Pour les informations sur l&apos;editeur et l&apos;hebergement, consultez les mentions legales.
              </p>
              <div className="mt-4">
                <Link
                  href="/mentions-legales"
                  className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3]/70 px-4 py-2 text-xs font-semibold text-[#7b4256] transition-colors hover:border-[#EC4899]/60 hover:text-[#EC4899]"
                >
                  Mentions legales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
