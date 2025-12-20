import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#F9A8D4]/60 bg-[#FDF2F8] pt-7 pb-4 sm:pt-9 sm:pb-5">
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

              <div className="hidden sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#a0526e]">
                  RR COIFFURE
                </p>
                <p className="text-sm font-medium text-[#2b1019]">Salon de coiffure premium</p>
              </div>
            </div>

            <p className="mx-auto max-w-xs text-[12px] leading-relaxed text-[#7b4256] md:mx-0">
              Expertise, créativité et soins capillaires sur mesure. Une expérience pensée pour sublimer vos cheveux.
            </p>

            {/* Micro-infos (optionnel mais premium) */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-[#7b4256] md:justify-start">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F9A8D4]/50 bg-white/70 px-3 py-1 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-[#EC4899]" aria-hidden="true" />
                1201 Genève
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F9A8D4]/50 bg-white/70 px-3 py-1 shadow-sm">
                <Clock className="h-3.5 w-3.5 text-[#EC4899]" aria-hidden="true" />
                Sur rendez-vous
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5 text-center md:px-8 md:text-left">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">Contact</h4>

            <div className="flex flex-col items-center gap-2 md:items-start">
              <Link
                href="tel:+41762920712"
                aria-label="Appeler le salon"
                className="group inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#2b1019] shadow-sm transition-colors hover:border-[#EC4899]/60 hover:bg-[#FDE7F3] hover:text-[#EC4899] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF2F8] md:w-fit md:justify-start"
              >
                <Phone className="h-4 w-4 text-[#EC4899]" aria-hidden="true" />
                <span>Appeler</span>
                <span className="ml-1 text-[11px] font-medium text-[#7b4256]">+41 76 292 07 12</span>
              </Link>

              <Link
                href="mailto:contact@rr-coiffure.com"
                aria-label="Envoyer un e-mail au salon"
                className="group inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#2b1019] shadow-sm transition-colors hover:border-[#EC4899]/60 hover:bg-[#FDE7F3] hover:text-[#EC4899] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF2F8] md:w-fit md:justify-start"
              >
                <Mail className="h-4 w-4 text-[#EC4899]" aria-hidden="true" />
                <span>Écrire</span>
                <span className="ml-1 text-[11px] font-medium text-[#7b4256]">contact@rr-coiffure.com</span>
              </Link>
            </div>

            {/* Liens rapides */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] md:justify-start">
              <Link
                href="/tarifs"
                className="rounded-full border border-[#F9A8D4]/50 bg-white/70 px-3 py-1 font-semibold text-[#7b4256] shadow-sm transition-colors hover:bg-white hover:text-[#2b1019]"
              >
                Tarifs
              </Link>
              <Link
                href="/#services"
                className="rounded-full border border-[#F9A8D4]/50 bg-white/70 px-3 py-1 font-semibold text-[#7b4256] shadow-sm transition-colors hover:bg-white hover:text-[#2b1019]"
              >
                Services
              </Link>
              <Link
                href="/#galerie"
                className="rounded-full border border-[#F9A8D4]/50 bg-white/70 px-3 py-1 font-semibold text-[#7b4256] shadow-sm transition-colors hover:bg-white hover:text-[#2b1019]"
              >
                Galerie
              </Link>
            </div>
          </div>

          {/* Instagram */}
          <div className="space-y-6 text-center md:px-8 md:text-left">
            <div className="space-y-3">
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">Suivez-nous</h4>

              <p className="mx-auto max-w-xs text-[12px] leading-relaxed text-[#7b4256] md:mx-0">
                Découvrez nos réalisations et nouveautés du salon.
              </p>

              <Link
                href="https://www.instagram.com/rr.coiffure/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir Instagram dans un nouvel onglet"
                className="group inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-white/80 px-8 py-2.5 text-sm font-semibold text-[#2b1019] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#EC4899]/60 hover:bg-[#FDE7F3] hover:text-[#EC4899] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF2F8] md:w-fit md:justify-start"
              >
                <Instagram className="h-4 w-4 text-[#EC4899]" aria-hidden="true" />
                Instagram
              </Link>

              <p className="text-[11px] text-[#7b4256]">Photos réelles • Avant / après • Inspirations</p>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-6 border-t border-[#F9A8D4]/60 pt-4">
          <div className="flex flex-col items-center gap-3 text-center text-[11px] text-[#7b4256] md:flex-row md:justify-between md:text-left">
            <p>
              © 2025{" "}
              <a
                href="https://www.kosmonde.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#EC4899] transition-colors hover:text-[#BE185D]"
              >
                KOSMONDE
              </a>{" "}
              — Tous droits réservés.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/mentions-legales" className="whitespace-nowrap transition-colors hover:text-[#EC4899]">
                Mentions légales
              </Link>

              <span className="hidden text-[#e4c7d8] md:inline">•</span>

              <Link href="/confidentialite" className="whitespace-nowrap transition-colors hover:text-[#EC4899]">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
