import Image from "next/image"
import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer
      className="relative border-t border-pink-100/70 bg-gradient-to-b from-[#ffe7f2]/40 to-white py-14"
    >
      {/* Halo décoratif */}
      <div className="pointer-events-none absolute -top-10 right-20 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo + description */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/galerie/rr-logo.jpg"
                alt="RR coiffure"
                width={80}
                height={80}
                className="rounded-full border border-pink-200 bg-white shadow-md"
              />
            </div>
            <p className="max-w-xs text-sm text-slate-600">
              Salon de coiffure premium à Lausanne. Expertise, créativité et soins sur mesure.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-bold text-slate-900 tracking-wide">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-slate-600">
              <p>Rue de la Gare 12</p>
              <p>1003 Lausanne</p>
              <p>
                <Link
                  href="tel:+41211234567"
                  className="transition-colors hover:text-[#ec4899]"
                >
                  +41 21 123 45 67
                </Link>
              </p>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="mb-3 text-sm font-bold text-slate-900 tracking-wide">
              Horaires
            </h4>
            <div className="space-y-2 text-sm text-slate-600">
              <p>Lundi – Samedi</p>
              <p>9h00 – 19h00</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>

          {/* Réseaux */}
          <div>
            <h4 className="mb-3 text-sm font-bold text-slate-900 tracking-wide">
              Suivez-nous
            </h4>

            <Link
              href="https://www.instagram.com/rr.coiffure/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Instagram <span aria-hidden="true">↗</span>
            </Link>

            <p className="mt-4 text-xs text-slate-500">
              Découvrez nos réalisations, avant/après et nouveautés directement sur notre compte.
            </p>
          </div>
        </div>

        {/* Bas du footer (copyright + légal) */}
        <div className="mt-12 border-t border-pink-100 pt-8">
          <div className="flex flex-col items-center space-y-4 text-center">

            {/* COPYRIGHT */}
            <p className="text-sm text-slate-500">
              © 2025{" "}
              <a
                href="https://www.kosmonde.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#ec4899] transition-colors hover:text-[#be185d]"
              >
                KOSMONDE
              </a>{" "}
              — Tous droits réservés.
            </p>

            {/* MINI MENU */}
            <div className="flex items-center gap-6 text-xs sm:text-sm text-slate-500">
              <Link
                href="/mentions-legales"
                className="transition-colors hover:text-[#ec4899]"
              >
                Mentions légales
              </Link>

              <span className="text-slate-300">•</span>

              <Link
                href="/confidentialite"
                className="transition-colors hover:text-[#ec4899]"
              >
                Politique de confidentialité
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  )
}
