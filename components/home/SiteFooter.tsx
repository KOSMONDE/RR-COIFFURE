import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#F9A8D4]/60 bg-[#FDF2F8] py-6 sm:py-8 pb-2 sm:pb-3">
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,189,217,0.25),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(236,126,184,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Grille principale */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#F9A8D4]/60">

          {/* Identité */}
          <div className="space-y-5 text-center md:px-8 md:text-left">
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-[#F9A8D4]/50 shadow-[0_10px_24px_rgba(236,72,153,0.18)]">
                <Image
                  src="/images/galerie/rr-logo.jpg"
                  alt="RR Coiffure"
                  width={44}
                  height={44}
                  className="rounded-full border border-[#F9A8D4]/60 object-cover"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#a0526e]">
                  RR COIFFURE
                </p>
                <p className="text-sm font-medium text-[#2b1019]">
                  Salon de coiffure premium
                </p>
              </div>
            </div>

            <p className="mx-auto max-w-xs text-[12px] leading-relaxed text-[#7b4256] md:mx-0">
              Expertise, créativité et soins capillaires sur mesure. Une expérience pensée pour sublimer vos cheveux.
            </p>

          </div>

          {/* Contact */}
          <div className="space-y-5 text-center md:px-8 md:text-left">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">
              Contact
            </h4>

            {/* Adresse retirée → Ne laisser que les moyens de contact */}
            <div className="flex flex-col gap-2 text-[12px]">
              <Link
                href="tel:+41211234567"
                className="group inline-flex w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-white/80 px-4 py-2 font-semibold text-[#2b1019] shadow-sm transition-colors hover:border-[#EC4899]/60 hover:text-[#EC4899] hover:bg-[#FDE7F3] md:justify-center"
                aria-label="Appeler le salon"
              >
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#EC4899]" aria-hidden="true" />
                  Appeler
                </span>
                <span className="sr-only">+41 21 123 45 67</span>
              </Link>
              <Link
                href="mailto:contact@rr-coiffure.com"
                className="group inline-flex w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-white/80 px-4 py-2 font-semibold text-[#7b4256] shadow-sm transition-colors hover:border-[#EC4899]/60 hover:text-[#EC4899] hover:bg-[#FDE7F3] md:justify-center"
                aria-label="Envoyer un e-mail au salon"
              >
                <span className="inline-flex items-center gap-2 text-[#2b1019]">
                  <Mail className="h-4 w-4 text-[#EC4899]" aria-hidden="true" />
                  Écrire
                </span>
                <span className="sr-only">contact@rr-coiffure.com</span>
              </Link>
            </div>


          </div>

          {/* Instagram */}
          <div className="space-y-6 md:px-8 md:text-left text-center">
            <div className="space-y-3">
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">
                Suivez-nous
              </h4>

              <p className="max-w-xs text-[12px] leading-relaxed text-[#7b4256] md:mx-0 mx-auto">
                Découvrez nos réalisations et nouveautés du salon.
              </p>

              <Link
                href="https://www.instagram.com/rr.coiffure/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir Instagram dans un nouvel onglet"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-white/80 px-8 sm:px-10 py-2.5 text-sm font-semibold text-[#7b4256] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#EC4899]/60 hover:text-[#EC4899] hover:bg-[#FDE7F3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 active:translate-y-0 md:justify-start"
              >
                <Instagram className="h-4 w-4 text-[#EC4899]" aria-hidden="true" />
                Instagram
              </Link>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-3 border-t border-[#F9A8D4]/60 pt-2">
          <div className="flex flex-col items-center gap-3 text-center text-[11px] text-[#7b4256] md:flex-row md:justify-between md:text-left">
            <p>
              © 2025{" "}
              <a
                href="https://www.kosmonde.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#EC4899] hover:text-[#BE185D]"
              >
                KOSMONDE
              </a>{" "}
              — Tous droits réservés.
            </p>

            <div className="flex items-center gap-4">
              <Link href="/mentions-legales" className="hover:text-[#EC4899]">
                Mentions légales
              </Link>
              <span className="hidden text-[#e4c7d8] md:inline">•</span>
              <Link href="/confidentialite" className="hover:text-[#EC4899]">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
