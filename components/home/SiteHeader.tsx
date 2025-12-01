"use client"

import { useEffect, useState, type MouseEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#galerie" },
  { label: "Formations", href: "/formations" },
  { label: "Contact", href: "#contact" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>("#services")

  const pathname = usePathname()

  // Effet visuel au scroll (fond + ombre)
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Met à jour la section active en fonction du scroll
  useEffect(() => {
    const sectionIds = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.href.slice(1))

    const handleScroll = () => {
      const scrollY = window.scrollY
      const headerOffset = 120
      const currentPosition = scrollY + headerOffset

      let currentSection: string | null = null

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue

        const elementTop = el.offsetTop

        if (currentPosition >= elementTop) {
          currentSection = `#${id}`
        }
      }

      if (currentSection) {
        setActiveSection(currentSection)
      } else {
        setActiveSection("#services")
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Si la page se charge avec un hash (#contact par ex.)
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setActiveSection(hash)
    }
  }, [])

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      event.preventDefault()
      const targetId = href.slice(1)
      const element = document.getElementById(targetId)

      if (element) {
        const headerOffset = 80
        const rect = element.getBoundingClientRect()
        const offsetPosition = rect.top + window.scrollY - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }

    setOpen(false)
  }

  const isItemActive = (href: string) => {
    if (href.startsWith("#")) {
      return activeSection === href
    }
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-40">
      {/* Trait dégradé signature en haut */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#F97316]" />

      {/* Lien d'accès rapide */}
      <a
        href="#main-content"
        className="absolute left-4 top-2 z-50 -translate-y-10 rounded-full bg-[#2b1019] px-4 py-2 text-xs font-medium text-white opacity-0 focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#F472B6]"
      >
        Aller au contenu
      </a>

      <div
        className={[
          "border-b backdrop-blur-md transition-all duration-200",
          isScrolled
            ? "border-[#F9A8D4]/70 bg-white/92 shadow-[0_12px_40px_rgba(176,51,116,0.22)]"
            : "border-transparent bg-gradient-to-b from-white/95 via-[#FFEAF5]/95 to-white/90 shadow-[0_8px_28px_rgba(176,51,116,0.18)]",
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
              <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-br from-[#F9A8D4] via-[#F472B6] to-[#EC4899] opacity-70 blur-md transition-opacity group-hover:opacity-95" />
              <Image
                src="/images/galerie/rr-logo.jpg"
                alt="RR Coiffure Logo"
                width={44}
                height={44}
                className="relative rounded-full border border-[#F9A8D4] bg-white shadow-md object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-[#2b1019] sm:text-base">
                RR COIFFURE
              </span>
              <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-[#a0526e] sm:block">
                Salon premium
              </span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav
            className="hidden items-center gap-4 text-sm md:flex"
            aria-label="Navigation principale"
          >
            {navItems.map((item) => {
              const active = isItemActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-full px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9A8D4]",
                    active
                      ? "bg-[#FDE7F3] text-[#EC4899]"
                      : "text-[#7b4256] hover:text-[#EC4899]",
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
                className="rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] px-5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <Link href="/#reservation">
                  Réserver
                </Link>
              </Button>
            </div>

            {/* Menu mobile */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-full border border-[#F9A8D4]/80 bg-white px-2.5 py-2 text-[#2b1019] shadow-sm transition hover:bg-[#FDE7F3] hover:text-[#EC4899] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F472B6] md:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {open && (
          <div
            id="mobile-menu"
            className="border-t border-[#F9A8D4]/70 bg-white/96 px-4 pb-4 pt-3 shadow-[0_10px_30px_rgba(176,51,116,0.25)] md:hidden"
          >
            <nav
              className="flex flex-col gap-2 text-sm"
              aria-label="Navigation principale mobile"
            >
              {navItems.map((item) => {
                const active = isItemActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={[
                      "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-[#FDE7F3] text-[#EC4899]"
                        : "text-[#7b4256] hover:bg-[#FDF2F8] hover:text-[#EC4899]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <Button
                asChild
                size="sm"
                className="mt-3 w-full rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <Link
                  href="/#reservation"
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
