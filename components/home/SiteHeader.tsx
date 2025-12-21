"use client"

import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"

type NavItem = {
  label: string
  href: string
}

type SiteHeaderProps = {
  items?: NavItem[]
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Galerie", href: "/galerie" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/contact" },
]

const DEFAULT_ACTIVE = "#services"

export default function SiteHeader({ items = DEFAULT_NAV_ITEMS }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>(DEFAULT_ACTIVE)

  const pathname = usePathname()

  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const mobileButtonRef = useRef<HTMLButtonElement | null>(null)
  const rafRef = useRef<number | null>(null)

  const sectionIds = useMemo(
    () =>
      items
        .filter((item) => item.href.startsWith("#"))
        .map((item) => item.href.slice(1)),
    [items]
  )

  // 1) Effet visuel au scroll (fond + ombre) avec rAF pour éviter spam setState
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        setIsScrolled(window.scrollY > 10)
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  // 2) Section active via IntersectionObserver (plus stable que offsetTop)
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

        if (visible?.target?.id) {
          setActiveSection(`#${visible.target.id}`)
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -55% 0px",
        threshold: [0.08, 0.15, 0.25, 0.35, 0.5, 0.75],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  // 3) Si la page change de hash (#contact etc.)
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash
      if (hash && hash.startsWith("#")) setActiveSection(hash)
      else setActiveSection(DEFAULT_ACTIVE)
    }
    syncHash()
    window.addEventListener("hashchange", syncHash)
    return () => window.removeEventListener("hashchange", syncHash)
  }, [])

  // 4) Lock scroll + Escape + clic hors menu + retour focus
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        window.requestAnimationFrame(() => mobileButtonRef.current?.focus())
      }
    }

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null
      if (!target) return
      if (!mobileMenuRef.current) return
      if (mobileMenuRef.current.contains(target)) return
      if (mobileButtonRef.current?.contains(target)) return

      setOpen(false)
      window.requestAnimationFrame(() => mobileButtonRef.current?.focus())
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("pointerdown", onPointerDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("pointerdown", onPointerDown)
    }
  }, [open])

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      event.preventDefault()

      const targetId = href.slice(1)
      const element = document.getElementById(targetId)

      if (element) {
        const headerOffset = 80
        const rect = element.getBoundingClientRect()
        const offsetPosition = rect.top + window.scrollY - headerOffset

        if (window.location.hash !== href) {
          history.pushState(null, "", href)
          setActiveSection(href)
        }

        window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      }
    }

    setOpen(false)
  }

  const isItemActive = (href: string) => {
    if (href.startsWith("#")) return activeSection === href
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-40">
      <div className="h-0.5 w-full bg-gradient-to-r from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]" />

      <a
        href="#main-content"
        className="absolute left-4 top-2 z-50 -translate-y-10 rounded-full bg-[#2b1019] px-4 py-2 text-xs font-medium text-white opacity-0 focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#EC4899]/40"
      >
        Aller au contenu
      </a>

      <div
        className={[
          "border-b backdrop-blur-md transition-all duration-200 bg-[#FDF2F8]/90",
          isScrolled
            ? "border-[#F9A8D4]/50 shadow-[0_12px_34px_rgba(236,72,153,0.18)]"
            : "border-transparent shadow-[0_14px_40px_rgba(236,72,153,0.08)]",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Retour à l’accueil RR Coiffure"
            onClick={() => setOpen(false)}
          >
            <div className="relative rounded-full ring-1 ring-[#F9A8D4]/40 bg-white shadow-[0_10px_24px_rgba(236,72,153,0.18)]">
              <Image
                src="/images/galerie/rr-logo.jpg"
                alt="RR Coiffure Logo"
                width={44}
                height={44}
                className="relative rounded-full border border-[#F9A8D4]/60 bg-white object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold tracking-tight text-[#2b1019] sm:text-base">
                RR COIFFURE
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a0526e] sm:block">
                Salon premium
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 text-sm md:flex" aria-label="Navigation principale">
            {items.map((item) => {
              const active = isItemActive(item.href)
              const ariaCurrent =
                item.href.startsWith("#")
                  ? active
                    ? "true"
                    : undefined
                  : active
                    ? "page"
                    : undefined

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={ariaCurrent as any}
                  className={[
                    "rounded-full px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40",
                    active
                      ? "bg-[#FDE7F3] text-[#2b1019] border border-[#F9A8D4]/60 font-semibold"
                      : "text-[#7b4256] hover:bg-[#FDF2F8] hover:text-[#b05a7b]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button
                asChild
                size="sm"
                className="rounded-full bg-[#EC4899] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6]"
              >
                <a href="tel:+41762920712" aria-label="Appeler le salon">
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Appeler
                  </span>
                </a>
              </Button>
            </div>

            <button
              ref={mobileButtonRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F9A8D4]/60 bg-white text-[#2b1019] shadow-sm transition hover:bg-[#FDE7F3] hover:text-[#b05a7b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 md:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className="border-t border-[#F9A8D4]/50 bg-[#FDF2F8]/95 px-4 pb-4 pt-3 shadow-[0_12px_30px_rgba(236,72,153,0.18)] md:hidden"
          >
            <nav className="flex flex-col gap-2 text-sm" aria-label="Navigation principale mobile">
              {items.map((item) => {
                const active = isItemActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={
                      item.href.startsWith("#") ? (active ? "true" : undefined) : active ? "page" : undefined
                    }
                    className={[
                      "rounded-xl px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40",
                      active
                        ? "bg-[#FDE7F3] text-[#2b1019] border border-[#F9A8D4]/60 font-semibold"
                        : "text-[#7b4256] hover:bg-[#FDF2F8] hover:text-[#b05a7b]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <Button
                asChild
                size="sm"
                className="w-full rounded-full bg-[#EC4899] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6]"
              >
                <a
                  href="tel:+41762920712"
                  onClick={() => {
                    setOpen(false)
                    window.requestAnimationFrame(() => mobileButtonRef.current?.focus())
                  }}
                  aria-label="Appeler le salon"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Appeler
                  </span>
                </a>
              </Button>

 
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
