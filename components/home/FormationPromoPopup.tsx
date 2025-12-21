"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronUp, X } from "lucide-react"

const STORAGE_KEY = "rr-formation-promo-dismissed"

export default function FormationPromoPopup() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const dismissed = window.localStorage.getItem(STORAGE_KEY)
    if (dismissed) return
    const timer = window.setTimeout(() => {
      setOpen(true)
      setExpanded(false)
    }, 600)
    return () => window.clearTimeout(timer)
  }, [])

  const handleClose = () => {
    window.localStorage.setItem(STORAGE_KEY, "1")
    setOpen(false)
  }

  const handleToggle = () => {
    setExpanded((current) => !current)
  }

  if (!open) return null

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[320px]">
      <div className="relative flex flex-col items-end">
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls="formation-promo-panel"
          className={[
            "group inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-white/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b4256] shadow-[0_12px_30px_rgba(190,24,93,0.16)] backdrop-blur transition-all",
            expanded ? "bg-white/95 shadow-[0_14px_36px_rgba(190,24,93,0.22)]" : "hover:bg-[#FDF2F8]",
          ].join(" ")}
        >
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute h-2.5 w-2.5 rounded-full bg-[#EC4899]/20" />
            <span className="relative h-2 w-2 rounded-full bg-[#EC4899]" />
          </span>
          Formation 40 h
          <span className="rounded-full bg-[#FFF3FA] px-2 py-0.5 text-[9px] text-[#EC4899] ring-1 ring-[#F9C3DF]">
            Licence
          </span>
          <ChevronUp
            className={[
              "h-3.5 w-3.5 text-[#EC4899] transition-transform",
              expanded ? "rotate-180" : "group-hover:-translate-y-0.5",
            ].join(" ")}
            aria-hidden="true"
          />
        </button>

        <div
          id="formation-promo-panel"
          className={[
            "absolute bottom-12 right-0 w-full origin-bottom-right transition-all duration-200",
            expanded ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#F9A8D4]/70 bg-white/95 p-4 shadow-[0_22px_55px_rgba(190,24,93,0.22)] backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.12),transparent_60%)]" />
            <span className="pointer-events-none absolute -left-2 top-9 h-4 w-4 rounded-full bg-white" />
            <span className="pointer-events-none absolute -right-2 top-9 h-4 w-4 rounded-full bg-white" />

            <button
              type="button"
              onClick={handleClose}
              className="absolute right-3 top-3 rounded-full bg-[#FDF2F8] p-1.5 text-[#EC4899] ring-1 ring-[#F9A8D4]/70 transition hover:bg-[#FDE7F3]"
            >
              <span className="sr-only">Fermer la promo</span>
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b05a7b]">
                Parcours pro
              </p>
              <p className="mt-2 text-base font-semibold text-[#2b1019]">Parcours 40 h – Licence</p>
              <p className="mt-1 text-[12px] leading-relaxed text-[#7b4256]">
                Formation intensive pour passer pro, avec licence RR COIFFURE. Places limitées en présentiel.
              </p>

              <div className="mt-3 flex items-center justify-between border-t border-dashed border-[#F9A8D4]/60 pt-3 text-[12px]">
                <Link
                  href="/formations#intro"
                  className="font-semibold text-[#EC4899] underline decoration-[#F9A8D4] underline-offset-4 transition-colors hover:text-[#D61F7A]"
                >
                  Voir la formation
                </Link>
                <a
                  href="https://www.instagram.com/rr.coiffure/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#7b4256] transition-colors hover:text-[#EC4899]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
