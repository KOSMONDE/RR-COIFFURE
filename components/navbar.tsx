"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  items: NavItem[]
}

export function Navbar({ items }: NavbarProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-[#F9A8D4]/40 bg-[#FDF2F8]/90 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/rr-coiffure-logo.jpg"
              alt="RR coiffure"
              width={60}
              height={60}
              className="rounded-xl border border-[#F9A8D4]/60 bg-white"
            />
            <span className="font-display text-sm font-semibold tracking-tight text-[#2b1019] sm:text-base">
              RR<span className="text-[#EC4899]">.COIFFURE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#b05a7b]",
                    pathname === item.href ? "text-[#EC4899]" : "text-[#7b4256]",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-full border border-[#F9A8D4]/60 bg-white p-2 text-[#2b1019] shadow-sm transition hover:bg-[#FDE7F3] hover:text-[#b05a7b]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors hover:text-[#b05a7b]",
                    pathname === item.href ? "text-[#EC4899]" : "text-[#7b4256]",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
