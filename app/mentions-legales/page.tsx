import type { Metadata } from "next"
import Link from "next/link"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"

export const metadata: Metadata = {
  title: "Mentions legales — RR COIFFURE",
  description:
    "Informations legales du site RR COIFFURE : editeur, hebergement, propriete intellectuelle et donnees personnelles.",
}

export default function MentionsLegalesPage() {
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
                Informations legales
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[#2b1019]">
                Mentions <span className="text-[#EC4899]">legales</span>
              </h1>
              <p className="text-sm sm:text-base text-[#7b4256] leading-relaxed">
                Retrouvez ici les informations d&apos;edition, d&apos;hebergement et d&apos;utilisation du site RR COIFFURE.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[#FDF2F8]">
          <div className="mx-auto max-w-5xl px-6 md:px-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-[#F9A8D4]/40 bg-white/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(236,72,153,0.12)]">
                <h2 className="text-lg font-semibold text-[#2b1019]">Editeur du site</h2>
                <dl className="mt-4 space-y-2 text-sm text-[#7b4256]">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-semibold text-[#2b1019]">Nom</dt>
                    <dd className="text-right">RR COIFFURE</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-semibold text-[#2b1019]">Activite</dt>
                    <dd className="text-right">Salon de coiffure</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-semibold text-[#2b1019]">Adresse</dt>
                    <dd className="text-right">1201 Geneve, Suisse</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-semibold text-[#2b1019]">Telephone</dt>
                    <dd className="text-right">
                      <Link href="tel:+41762920712" className="hover:text-[#EC4899]">
                        +41 76 292 07 12
                      </Link>
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-semibold text-[#2b1019]">E-mail</dt>
                    <dd className="text-right">
                      <Link href="mailto:contact@rr-coiffure.com" className="hover:text-[#EC4899]">
                        contact@rr-coiffure.com
                      </Link>
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="font-semibold text-[#2b1019]">Responsable</dt>
                    <dd className="text-right">RR COIFFURE</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl border border-[#F9A8D4]/40 bg-white/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(236,72,153,0.12)]">
                <h2 className="text-lg font-semibold text-[#2b1019]">Hebergement</h2>
                <div className="mt-4 space-y-2 text-sm text-[#7b4256]">
                  <p className="font-semibold text-[#2b1019]">Vercel</p>
                  <p>Plateforme d&apos;hebergement et de deploiement.</p>
                  <Link
                    href="https://vercel.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#EC4899] hover:text-[#BE185D]"
                  >
                    vercel.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#F9A8D4]/40 bg-white/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(236,72,153,0.12)]">
              <h2 className="text-lg font-semibold text-[#2b1019]">Propriete intellectuelle</h2>
              <p className="mt-3 text-sm text-[#7b4256] leading-relaxed">
                L&apos;ensemble du contenu du site (textes, visuels, logos, photos, design) est protege par le droit
                d&apos;auteur. Toute reproduction, diffusion ou utilisation sans autorisation est interdite.
              </p>
            </div>

            <div className="rounded-3xl border border-[#F9A8D4]/40 bg-white/80 p-6 sm:p-8 shadow-[0_18px_40px_rgba(236,72,153,0.12)]">
              <h2 className="text-lg font-semibold text-[#2b1019]">Donnees personnelles</h2>
              <p className="mt-3 text-sm text-[#7b4256] leading-relaxed">
                Les donnees transmises via les formulaires sont traitees uniquement pour repondre a vos demandes et
                organiser vos rendez-vous. Pour en savoir plus, consultez notre politique de confidentialite.
              </p>
              <div className="mt-4">
                <Link
                  href="/confidentialite"
                  className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3]/70 px-4 py-2 text-xs font-semibold text-[#7b4256] transition-colors hover:border-[#EC4899]/60 hover:text-[#EC4899]"
                >
                  Politique de confidentialite
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
