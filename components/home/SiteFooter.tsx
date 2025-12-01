import Image from "next/image"
import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-[#F9A8D4]/70 bg-gradient-to-b from-white via-[#FFEAF5]/60 to-white py-14 sm:py-16">
      {/* Halos décoratifs */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.65]">
        <div className="absolute -top-14 right-16 h-40 w-40 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-[#EC4899]/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Grille principale */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Identité */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#F9A8D4] via-[#FECACA] to-[#F472B6] shadow-sm">
                <Image
                  src="/images/galerie/rr-logo.jpg"
                  alt="RR Coiffure"
                  width={60}
                  height={60}
                  className="rounded-full border border-white/70 object-cover"
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

            <p className="max-w-xs text-[13px] leading-relaxed text-[#7b4256]">
              Expertise, créativité et soins capillaires sur mesure.  
              Une expérience pensée pour sublimer vos cheveux.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">
              Contact
            </h4>

            {/* Adresse retirée → Ne laisser que les moyens de contact */}
            <div className="space-y-2 text-[13px]">
              <p>
                <Link
                  href="tel:+41211234567"
                  className="font-semibold text-[#2b1019] underline underline-offset-[3px] decoration-[#d1b0c4] transition-colors hover:text-[#EC4899] hover:decoration-[#EC4899]"
                >
                  +41 21 123 45 67
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:contact@rr-coiffure.com"
                  className="text-[#7b4256] underline underline-offset-[3px] decoration-[#e7cad8] transition-colors hover:text-[#EC4899] hover:decoration-[#EC4899]"
                >
                  contact@rr-coiffure.com
                </Link>
              </p>
            </div>
          </div>

          {/* Instagram */}
          <div className="space-y-5">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">
              Suivez-nous
            </h4>

            <Link
              href="https://www.instagram.com/rr.coiffure/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Instagram
              <span aria-hidden="true" className="text-[12px]">
                ↗
              </span>
            </Link>

            <p className="max-w-xs text-[13px] leading-relaxed text-[#7b4256]">
              Découvrez nos réalisations, avant / après et nouveautés du salon.
            </p>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-12 border-t border-[#F9A8D4]/70 pt-5">
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
