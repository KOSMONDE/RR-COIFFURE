"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#galerie" },
  { label: "Formations", href: "formations" },
  { label: "Contact", href: "#contact" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState<string | null>("#services")

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40">
      {/* Lien d'accès rapide */}
      <a
        href="#main-content"
        className="absolute left-4 top-2 z-50 -translate-y-10 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white opacity-0 focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        Aller au contenu
      </a>

      <div
        className={[
          "border-b border-pink-100/70 bg-white/70 backdrop-blur-md transition-all duration-200",
          isScrolled ? "shadow-[0_10px_25px_rgba(15,23,42,0.08)] bg-white/90" : "shadow-[0_6px_18px_rgba(15,23,42,0.05)]",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo + nom */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Retour à l’accueil RR Coiffure"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-br from-[#f472b6] via-[#ec4899] to-[#a855f7] opacity-60 blur-md transition-opacity group-hover:opacity-90" />
              <Image
                src="/images/galerie/rr-logo.jpg"
                alt="RR Coiffure Logo"
                width={44}
                height={44}
                className="relative rounded-full border border-pink-200 bg-white shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                RR COIFFURE
              </span>
              <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:block">
                Salon premium
              </span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden items-center gap-4 text-sm md:flex">
            {navItems.map((item) => {
              const isActive = active === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "rounded-full px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300",
                    isActive
                      ? "bg-pink-50 text-[#ec4899]"
                      : "text-slate-700 hover:text-[#ec4899]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Bouton réserver */}
            <div className="hidden md:block">
              <Button
                asChild
                size="sm"
                className="rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] px-5 text-sm font-semibold shadow-md hover:from-[#ec4899] hover:to-[#f472b6]"
              >
                <Link href="https://www.snailscreation.com/book-online">
                  Réserver
                </Link>
              </Button>
            </div>

            {/* Menu mobile */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-full border border-pink-100 bg-white p-2 text-slate-700 shadow-sm transition hover:border-pink-300 hover:text-[#ec4899] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 md:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {open && (
          <div className="border-t border-pink-100 bg-white/95 px-4 pb-4 pt-3 shadow-sm md:hidden">
            <nav className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => {
                const isActive = active === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={[
                      "rounded-lg px-3 py-2 transition-colors",
                      isActive
                        ? "bg-pink-50 text-[#ec4899]"
                        : "text-slate-700 hover:bg-pink-50 hover:text-[#ec4899]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <Button
                asChild
                size="sm"
                className="mt-2 w-full rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] text-sm font-semibold shadow-md hover:from-[#ec4899] hover:to-[#f472b6]"
              >
                <Link
                  href="https://www.snailscreation.com/book-online"
                  onClick={() => setOpen(false)}
                >
                  Réserver
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
