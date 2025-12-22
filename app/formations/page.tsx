"use client"

import type { ReactNode } from "react"
import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"
import { useActiveSection } from "@/hooks/useActiveSection"

const training = {
  title: "Parcours Licence Professionnelle – 40 h RR COIFFURE",
  duration: "40 h intensives sur 6 jours",
  shortDuration: "40 h intensives",
  level: "Débutant à avancé",
  price: "1 490 CHF",
  image: "/formations/formationRRCOIFFURE.png",
  desc: "Un parcours intensif de 40 h pour passer du niveau débutant/autodidacte à un niveau professionnel, avec licence RR COIFFURE à la clé. Vous apprenez les bases techniques, les gestes de salon essentiels et comment sécuriser vos prestations.",
  badge: "Licence professionnelle RR COIFFURE",
}

// ✅ UX: prochaines dates + places + compteur (cohérent Lausanne partout)
const nextSession = {
  startISO: "2026-01-01T09:00:00+01:00",
  startLabel: "1 janvier 2026",
  startTimeLabel: "09:00",
  city: "Lausanne",
  totalSeats: 10,
  seatsLeft: 8,
  // ✅ Google Calendar : timestamps (exemple 6 jours, fin à 17:00)
  calendarDates: "20260101T090000/20260106T170000",
}

const modules = [
  { title: "Anatomie et physiologie capillaire", hours: "3 h", desc: "Structure du cheveu et du cuir chevelu." },
  { title: "Coupe et coiffage (modelage)", hours: "5 h", desc: "Techniques de coupe, mise en forme et coiffage." },
  { title: "Hygiène, soins et sécurité", hours: "3 h", desc: "Protocoles d’hygiène, soins essentiels et sécurité." },
  { title: "Colorimétrie et techniques de design de mèches", hours: "6 h", desc: "Bases de la couleur, diagnostic et placement des mèches." },
  { title: "Chimie et traitements (techniques chimiques)", hours: "8 h", desc: "Comprendre les réactions chimiques et les traitements capillaires." },
  { title: "Lissage et définition des boucles", hours: "6 h", desc: "Techniques de lissage et travail des boucles." },
  { title: "Accueil et service client", hours: "3 h", desc: "Accueil, écoute, diagnostic et relation client." },
  { title: "Marketing et notions de business", hours: "4 h", desc: "Positionnement, communication et bases business." },
  { title: "Bonus : Tricologie", hours: "2 h", desc: "Science du cuir chevelu et des cheveux." },
]

const modes = [
  {
    type: "Présentiel",
    highlight: true,
    title: "Formation au salon RR COIFFURE",
    place: "Au salon – Lausanne",
    advantages: [
      "Pratique directe sur modèles, encadrée par la formatrice.",
      "Corrections en temps réel sur vos gestes et vos diagnostics.",
      "Immersion dans le rythme et l’ambiance d’un vrai salon.",
    ],
    priceNote: "Tarif indicatif : 1 490 CHF le parcours complet en présentiel.",
    licenceNote: "Licence professionnelle RR COIFFURE délivrée après validation des compétences en fin de formation.",
  },
  {
    type: "À distance",
    highlight: false,
    title: "Formation vidéo en ligne",
    place: "Suivi depuis chez vous",
    advantages: [
      "Accès aux vidéos de cours 24 h/24.",
      "Possibilité de revoir les modules autant de fois que nécessaire pendant la durée d’accès.",
      "Idéal si vous êtes en reconversion, à l’étranger ou à distance de Lausanne.",
    ],
    priceNote: "Tarif adapté pour la version vidéo (à définir directement avec le salon).",
    licenceNote: "Licence professionnelle RR COIFFURE délivrée après validation des évaluations prévues en fin de parcours.",
  },
]

const faqs = [
  {
    q: "À qui s’adresse ce parcours de 40 h ?",
    a: "À toute personne qui veut passer au niveau supérieur : débutant·e motivé·e, coiffeur·se déjà en activité ou personne en reconversion qui souhaite une base solide et une licence professionnelle RR COIFFURE.",
  },
  {
    q: "Faut-il déjà savoir coiffer pour s’inscrire ?",
    a: "Non. Le parcours reprend les bases, puis monte en niveau au fil des modules. Ce qui compte surtout : votre motivation, votre sérieux et votre engagement sur la durée des 40 h.",
  },
  {
    q: "La licence est-elle vraiment délivrée en vidéo à distance ?",
    a: "Oui, à condition de suivre l’ensemble du programme, d’envoyer les travaux et vidéos demandés et de valider les compétences évaluées en fin de parcours. La même exigence, simplement à distance.",
  },
  {
    q: "Comment connaître les prochaines dates et les modalités de paiement ?",
    a: "Les dates, les acomptes et les paiements en plusieurs fois sont précisés directement par le salon. Le plus rapide est d’écrire sur Instagram ou de passer au salon pour en parler.",
  },
]

const sideNavItems = [
  { id: "intro", label: "Présentation" },
  { id: "parcours", label: "Votre parcours" },
  { id: "modes", label: "Modes de formation" },
  { id: "programme", label: "Programme 40 h" },
  { id: "formatrice", label: "La formatrice" },
  { id: "apres-formation", label: "Après 40 h" },
  { id: "avantages", label: "Ce que vous obtenez" },
  { id: "infos-pratiques", label: "Infos pratiques" },
  { id: "faq", label: "FAQ" },
]

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[#E11D74]" viewBox="0 0 16 16">
      <path d="M6.2 11.3 3.2 8.3l1.1-1.1 1.9 1.9 4.5-4.5 1.1 1.1-5.6 5.6z" fill="currentColor" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0">
      <path
        fill="currentColor"
        d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.71 4.71 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm4.9-7.9a1.1 1.1 0 1 0-1.1-1.1 a1.09 1.09 0 0 0 1.1 1.1ZM19 4.3A4.27 4.27 0 0 0 16.7 3 15.42 15.42 0 0 0 12 2.8a15.42 15.42 0 0 0-4.7.2A4.27 4.27 0 0 0 5 4.3a4.27 4.27 0 0 0-1.3 2.3A15.42 15.42 0 0 0 3.5 11v2a15.42 15.42 0 0 0 .2 4.7A4.27 4.27 0 0 0 5 20.3a4.27 4.27 0 0 0 2.3 1.3 15.42 15.42 0 0 0 4.7.2 15.42 15.42 0 0 0 4.7-.2A4.27 4.27 0 0 0 19 20.3a4.27 4.27 0 0 0 1.3-2.3 15.42 15.42 0 0 0 .2-4.7v-2a15.42 15.42 0 0 0-.2-4.7A4.27 4.27 0 0 0 19 4.3Zm-.1 9.8a13.86 13.86 0 0 1-.2 4.2 2.6 2.6 0 0 1-1.5 1.5 13.86 13.86 0 0 1-4.2.2 13.86 13.86 0 0 1-4.2-.2 2.6 2.6 0 0 1-1.5-1.5 13.86 13.86 0 0 1-.2-4.2v-2a13.86 13.86 0 0 1 .2-4.2 2.6 2.6 0 0 1 1.5-1.5 13.86 13.86 0 0 1 4.2-.2 13.86 13.86 0 0 1 4.2.2 2.6 2.6 0 0 1 1.5 1.5 13.86 13.86 0 0 1 .2 4.2Z"
      />
    </svg>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm12 8H5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8ZM6 7h12a1 1 0 0 1 1 1v1H5V8a1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}

/* ----------------------------- PREMIUM CARDS ----------------------------- */

function StatCardHorizontal({
  title,
  value,
  desc,
  icon,
}: {
  title: string
  value: string
  desc: string
  icon: ReactNode
}) {
  return (
    <div className="group relative w-full overflow-hidden rounded-4xl bg-white/95 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F7E1EB] transition-all hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(17,24,39,0.10)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity group-hover:opacity-25 bg-[radial-gradient(circle_at_30%_20%,rgba(225,29,116,0.14),transparent_55%)]" />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4F9] ring-1 ring-[#EFC6DA] text-[#E11D74]">
          {icon}
        </div>
        <div className="min-w-0 break-normal">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B3E56]">{title}</p>
          <p className="mt-1 text-[15px] font-semibold leading-snug text-[#140A11]">{value}</p>
          <p className="mt-2 text-[12px] leading-[1.55] text-[#563646]">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function BulletPanelPremium({
  variant,
  title,
  items,
}: {
  variant: "ideal" | "not"
  title: string
  items: string[]
}) {
  const isIdeal = variant === "ideal"

  return (
    <div className="relative overflow-hidden rounded-4xl bg-white/95 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F3D6E5]">
      <div
        className={[
          "absolute left-0 top-0 h-full w-[3px]",
          isIdeal
            ? "bg-linear-to-b from-[#E11D74] via-[#F472B6] to-[#E11D74]"
            : "bg-linear-to-b from-[#1B1220] via-[#3A2A35] to-[#1B1220]",
        ].join(" ")}
        aria-hidden="true"
      />

      <div className="pl-4">
        <span
          className={[
            "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ring-1",
            isIdeal
              ? "bg-[#FFF2F8] text-[#E11D74] ring-[#F0C2D9]"
              : "bg-[#F8F6F7] text-[#3A2A35] ring-[#E9E1E6]",
          ].join(" ")}
        >
          {title}
        </span>

        <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-[#5E3B4D]">
          {items.map((t) => (
            <li key={t} className="flex gap-3">
              <span
                className={[
                  "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                  isIdeal ? "bg-[#E11D74]" : "bg-[#3A2A35]",
                ].join(" ")}
              />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ----------------------------- RESERVE / NAV ----------------------------- */

function useCountdown(targetISO: string) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO])
  const [ms, setMs] = useState<number | null>(null)

  useEffect(() => {
    const update = () => setMs(Math.max(0, target - Date.now()))
    update()
    const id = window.setInterval(update, 1000)
    return () => window.clearInterval(id)
  }, [target])

  const safeMs = ms ?? 0
  const days = Math.floor(safeMs / (1000 * 60 * 60 * 24))
  const hours = Math.floor((safeMs / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((safeMs / (1000 * 60)) % 60)
  const seconds = Math.floor((safeMs / 1000) % 60)

  return { ms: safeMs, days, hours, minutes, seconds, done: ms !== null && safeMs === 0 }
}

function pad2(n: number) {
  return String(n).padStart(2, "0")
}

function ModePill({
  label,
  active,
  onClick,
  className,
}: {
  label: string
  active: boolean
  onClick: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-3 py-2 text-[11px] font-semibold transition-all ring-1",
        active
          ? "bg-[#141018] text-white shadow-[0_14px_36px_rgba(17,24,39,0.22)] ring-[#141018]/40"
          : "bg-white/90 text-[#5E3B4D] ring-[#F0C2D9]/70 hover:bg-[#FFF2F8] hover:text-[#E11D74]",
        className,
      ].join(" ")}
    >
      {label}
    </button>
  )
}

function ReserveCard({
  selectedMode,
  onSelectMode,
}: {
  selectedMode: "Présentiel" | "À distance"
  onSelectMode: (m: "Présentiel" | "À distance") => void
}) {
  const seatsLeft = nextSession.seatsLeft
  const totalSeats = nextSession.totalSeats
  const filled = Math.max(0, totalSeats - seatsLeft)
  const progress = totalSeats === 0 ? 0 : Math.min(100, Math.round((filled / totalSeats) * 100))
  const isHighDemand = progress >= 80
  const showLastSeats = seatsLeft > 0 && (seatsLeft <= 3 || isHighDemand)

  const countdown = useCountdown(nextSession.startISO)

  const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Formation RR COIFFURE – 40 h sur 6 jours"
  )}&dates=${nextSession.calendarDates}&details=${encodeURIComponent(
    `Formation RR COIFFURE. ${training.duration}. Démarrage le ${nextSession.startLabel} à ${nextSession.startTimeLabel} (heure locale).`
  )}&location=${encodeURIComponent(nextSession.city)}`

  const modeNote =
    selectedMode === "Présentiel"
      ? "Présentiel : encadrement au salon, pratique guidée."
      : "À distance : vidéos + validation de la licence."

  return (
    <div className="rounded-3xl bg-white/95 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.10)] ring-1 ring-[#F3D6E5]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">Choisir votre format</p>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <ModePill
          label="Présentiel"
          active={selectedMode === "Présentiel"}
          onClick={() => onSelectMode("Présentiel")}
          className="w-full justify-center"
        />
        <ModePill
          label="À distance"
          active={selectedMode === "À distance"}
          onClick={() => onSelectMode("À distance")}
          className="w-full justify-center"
        />
      </div>

      <p className="mt-2 text-center text-[11px] text-[#7A5468]">{modeNote}</p>

      <div className="mt-4 rounded-3xl bg-[#FFF7FB] p-4 ring-1 ring-[#F0C2D9]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">Parcours complet</p>

        <div className="mt-2 flex items-baseline justify-between gap-3">
          <p className="text-3xl font-semibold tracking-tight text-[#140A11]">{training.price}</p>
          <p className="text-[12px] text-[#5E3B4D]">{training.duration}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#5E3B4D]">
          <span className="rounded-full bg-white/85 px-3 py-1 ring-1 ring-[#F3D6E5]">
            <span className="font-semibold text-[#140A11]">{nextSession.startLabel}</span>
          </span>
          <span className="rounded-full bg-white/85 px-3 py-1 ring-1 ring-[#F3D6E5]">
            Format : <span className="font-semibold text-[#140A11]">{selectedMode}</span>
          </span>
          <span className="rounded-full bg-white/85 px-3 py-1 ring-1 ring-[#F3D6E5]">
            Ville : <span className="font-semibold text-[#140A11]">{nextSession.city}</span>
          </span>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#5E3B4D]">
            <span>
              <span className="font-semibold text-[#140A11]">{seatsLeft}</span> places restantes (sur {totalSeats})
            </span>
            {showLastSeats ? (
              <span className="inline-flex items-center rounded-full bg-[#FFF2F8] px-2 py-0.5 text-[10px] font-semibold text-[#E11D74] ring-1 ring-[#F0C2D9]">
                Dernières places
              </span>
            ) : (
              <span className="text-[10px] text-[#7A5468]">Réservations : {filled}/{totalSeats}</span>
            )}
          </div>

          <div className="mt-2 relative h-2 w-full overflow-hidden rounded-full bg-white ring-1 ring-[#F0C2D9]/70">
            <div
              className={[
                "h-full rounded-full bg-linear-to-r",
                isHighDemand
                  ? "from-[#E11D74] via-[#F472B6] to-[#E11D74]"
                  : "from-[#FBCFE8] via-[#F0C2D9] to-[#FBCFE8]",
              ].join(" ")}
              style={{ width: `${progress}%` }}
              aria-hidden="true"
            />
          </div>

          <p className="mt-2 text-[10px] text-[#7A5468]">{progress}% complet</p>
        </div>

        <div className="mt-4 rounded-3xl bg-white/90 p-4 ring-1 ring-[#F3D6E5]">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">
            Démarrage dans
          </p>
          <p className="mt-1 text-center text-[12px] text-[#5E3B4D]">
            <span className="font-semibold text-[#140A11]">{nextSession.startLabel}</span> ·{" "}
            <span className="font-semibold text-[#140A11]">{nextSession.startTimeLabel}</span> (heure locale{" "}
            {nextSession.city})
          </p>

          {countdown.done ? (
            <p className="mt-2 text-center text-[12px] text-[#5E3B4D]">
              La session a démarré. Écrivez au salon pour confirmer la disponibilité.
            </p>
          ) : (
            <div className="mt-3 grid grid-cols-4 gap-2 text-center">
              {[
                { label: "J", value: pad2(countdown.days) },
                { label: "H", value: pad2(countdown.hours) },
                { label: "MIN", value: pad2(countdown.minutes) },
                { label: "SEC", value: pad2(countdown.seconds) },
              ].map((b) => (
                <div key={b.label} className="rounded-2xl bg-[#FFF7FB] px-2 py-2 ring-1 ring-[#F0C2D9]/70">
                  <div className="text-[15px] font-semibold text-[#140A11]">{b.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <a
            href={calendarUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#5E3B4D] ring-1 ring-[#F3D6E5] hover:bg-[#FFF2F8] hover:text-[#E11D74]"
          >
            <CalendarIcon className="h-4 w-4" />
            Ajouter la date au calendrier
          </a>
        </div>

        <div className="mt-4 space-y-2">
          <Link
            href="https://www.instagram.com/rr.coiffure/"
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-linear-to-r from-[#E11D74] via-[#F472B6] to-[#E11D74] px-4 py-3 text-[13px] font-semibold text-white shadow-[0_16px_44px_rgba(225,29,116,0.35)] hover:opacity-95"
          >
            Réserver ma place ({selectedMode})
          </Link>

          <a
            href="#programme"
            className="flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-[13px] font-semibold text-[#E11D74] ring-1 ring-[#F0C2D9] hover:bg-[#FFF2F8]"
          >
            Voir le programme · 9 modules / 40 h
          </a>

          <p className="pt-1 text-center text-[11px] text-[#7A5468]">Acompte possible · Paiement en 2–3 fois</p>
        </div>
      </div>
    </div>
  )
}

function SideNav({ activeId }: { activeId: string | null }) {
  const safeActiveId = activeId ?? "intro"

  return (
    <nav aria-label="Navigation de la formation (bureau)">
      <div className="rounded-3xl bg-white/90 p-3 shadow-[0_16px_40px_rgba(17,24,39,0.10)] ring-1 ring-[#F3D6E5] backdrop-blur-sm">
        <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A5468]">
          Parcours 40 h – Licence
        </p>
        <ul className="space-y-1.5 text-sm text-[#5E3B4D]">
          {sideNavItems.map((item) => {
            const isActive = safeActiveId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={[
                    "flex items-center gap-2 rounded-full px-3 py-2 text-xs transition-all duration-200 ring-1",
                    isActive
                      ? "bg-[#141018] text-white shadow-[0_12px_30px_rgba(17,24,39,0.18)] ring-[#141018]/30"
                      : "bg-white/85 ring-[#F3D6E5] hover:bg-[#FFF2F8] hover:text-[#E11D74]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full transition-opacity",
                      isActive ? "bg-white opacity-100" : "bg-[#E11D74] opacity-50",
                    ].join(" ")}
                  />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#intro"
          className="mt-3 flex items-center justify-center rounded-full bg-white/90 px-3 py-2 text-[11px] font-semibold text-[#5E3B4D] ring-1 ring-[#F3D6E5] hover:bg-[#FFF2F8] hover:text-[#E11D74]"
        >
          Retour en haut
        </a>
      </div>
    </nav>
  )
}

/* ---------------------------------- PAGE --------------------------------- */

export default function FormationsContent() {
  const sectionIds = useMemo(() => sideNavItems.map((i) => i.id), [])
  const activeId = useActiveSection(sectionIds)

  const [scroll, setScroll] = useState(0)
  const [selectedMode, setSelectedMode] = useState<"Présentiel" | "À distance">("Présentiel")

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight
        const current = window.scrollY
        const next = total <= 0 ? 0 : Math.min(100, Math.max(0, (current / total) * 100))
        setScroll(next)
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF8FC] text-[#140A11] scroll-smooth">
      {/* Fond premium discret */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(225,29,116,0.05),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(17,24,39,0.03),transparent_50%)]" />
      </div>

      {/* Progress scroll */}
      <div className="fixed inset-x-0 top-0 z-40 h-1.5 bg-transparent" aria-hidden="true">
        <div
          className="h-full rounded-full bg-linear-to-r from-[#E11D74] via-[#F472B6] to-[#E11D74] shadow-[0_0_14px_rgba(225,29,116,0.35)] transition-[width]"
          style={{ width: `${scroll}%` }}
        />
      </div>

      <SiteHeader />

      <main id="main-content" className="flex-1 py-10 sm:py-16" aria-label="Contenu principal de la formation RR COIFFURE">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 grid gap-8 lg:gap-12 lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[380px_minmax(0,1fr)]">
            <aside className="hidden lg:block" aria-label="Colonne latérale">
              <ReserveCard selectedMode={selectedMode} onSelectMode={setSelectedMode} />
              <div className="sticky top-24 mt-6">
                <SideNav activeId={activeId} />
              </div>
            </aside>

            {/* CONTENU */}
            <div className="max-w-none space-y-12 sm:space-y-14">
              {/* HERO */}
              <motion.section
                id="intro"
                aria-labelledby="formation-intro"
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="overflow-hidden rounded-4xl bg-white/95 p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F3D6E5] sm:p-8">
                  <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                    {/* Texte */}
                    <div className="order-1">
                      <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-[#FFF2F8] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E11D74] ring-1 ring-[#F0C2D9]">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E11D74]" />
                        <span>Parcours 40 h · Licence RR COIFFURE</span>
                      </div>

                      <h1
                        id="formation-intro"
                        className="mt-4 text-3xl font-semibold tracking-tight text-[#140A11] sm:text-[2.6rem]"
                      >
                        Devenez coiffeur·se licencié·e en 40 h
                      </h1>

                      <p className="mt-3 max-w-prose text-sm leading-relaxed text-[#5E3B4D] sm:text-[15px]">
                        {training.desc}
                      </p>

                      {/* ✅ Cards premium (auto-fit + min width => plus jamais écrasées) */}
                      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
                        <StatCardHorizontal
                          title="Durée"
                          value="40 h intensives"
                          desc="40 h intensives sur 6 jours."
                          icon={
                            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                              <path
                                fill="currentColor"
                                d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 11H7a1 1 0 0 1 0-2h5V7a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1Z"
                              />
                            </svg>
                          }
                        />
                        <StatCardHorizontal
                          title="Niveau"
                          value="Débutant à avancé"
                          desc="Pour débutants motivés et pros en salon."
                          icon={
                            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                              <path
                                fill="currentColor"
                                d="M12 2 2 7l10 5 10-5-10-5Zm0 7.2L4.6 7 12 3.8 19.4 7 12 9.2ZM4 11.5l8 4 8-4V14l-8 4-8-4v-2.5Z"
                              />
                            </svg>
                          }
                        />
                        <StatCardHorizontal
                          title="Diplôme"
                          value="Licence RR COIFFURE"
                          desc="Délivrée après validation des compétences."
                          icon={
                            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                              <path
                                fill="currentColor"
                                d="M7 2h10a2 2 0 0 1 2 2v17l-7-3-7 3V4a2 2 0 0 1 2-2Zm3 6h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2Zm0 4h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2Z"
                              />
                            </svg>
                          }
                        />
                      </div>

                    </div>

                    {/* Visuel + carte prix (hero droite) */}
                    <div className="order-3 space-y-4 lg:order-2">
                      <div className="relative h-64 w-full overflow-hidden rounded-4xl bg-[#FFF2F8] shadow-[0_26px_65px_rgba(17,24,39,0.14)] ring-1 ring-[#F3D6E5] sm:h-80">
                        <Image
                          src={training.image}
                          alt="Ambiance salon RR COIFFURE pour la formation professionnelle"
                          fill
                          priority
                          className="object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-white">
                          <span className="rounded-full bg-black/35 px-3 py-1">{training.duration}</span>
                          <span className="rounded-full bg-black/35 px-3 py-1 font-semibold">{training.price}</span>
                        </div>
                      </div>

                      <div className="rounded-4xl bg-white/95 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.10)] ring-1 ring-[#F3D6E5]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">Parcours complet</p>
                        <p className="mt-2 text-4xl font-semibold tracking-tight text-[#140A11]">{training.price}</p>
                        <p className="mt-2 text-[13px] leading-relaxed text-[#5E3B4D]">
                          Les dates et modalités exactes (acomptes, paiements) sont confirmées directement avec le salon RR COIFFURE.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[#5E3B4D]">
                          <span className="rounded-full bg-[#FFF7FB] px-3 py-1 ring-1 ring-[#F0C2D9]">
                            Prochaine : <span className="font-semibold text-[#140A11]">{nextSession.startLabel}</span>
                          </span>
                          <span className="rounded-full bg-[#FFF7FB] px-3 py-1 ring-1 ring-[#F0C2D9]">
                            Places :{" "}
                            <span className="font-semibold text-[#140A11]">
                              {nextSession.seatsLeft}/{nextSession.totalSeats}
                            </span>
                          </span>
                        </div>

                        <Link
                          href="https://www.instagram.com/rr.coiffure/"
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-[#E11D74] via-[#F472B6] to-[#E11D74] px-4 py-3 text-[13px] font-semibold text-white shadow-[0_16px_44px_rgba(225,29,116,0.35)] hover:opacity-95"
                        >
                          Réserver une place
                        </Link>

                        <p className="mt-3 text-center text-[11px] text-[#7A5468]">Acompte possible · Paiement en 2–3 fois</p>
                      </div>

                      {/* Reserve card mobile */}
                      <div className="block lg:hidden">
                        <ReserveCard selectedMode={selectedMode} onSelectMode={setSelectedMode} />
                      </div>
                    </div>

                    {/* ✅ Panels premium */}
                    <div className="order-2 mt-6 grid gap-4 sm:grid-cols-2 lg:order-3 lg:col-span-2">
                      <BulletPanelPremium
                        variant="ideal"
                        title="Idéal si"
                        items={[
                          "Vous êtes en reconversion ou autodidacte et voulez des bases pro.",
                          "Vous voulez sécuriser vos diagnostics et vos gestes.",
                          "Vous cherchez un cadre concret type salon (pas juste de la théorie).",
                        ]}
                      />
                      <BulletPanelPremium
                        variant="not"
                        title="Moins adapté si"
                        items={[
                          "Vous cherchez uniquement des cours théoriques sans pratique.",
                          "Vous ne pouvez pas vous engager sur la totalité des 40 h.",
                          "Vous ne souhaitez pas être évalué·e pour valider la licence.",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* PARCOURS */}
              <motion.section
                id="parcours"
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="rounded-4xl bg-white/95 p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F3D6E5] sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">
                    Votre parcours en 3 étapes
                  </p>
                  <div className="mt-5 grid gap-4 text-[13px] text-[#5E3B4D] sm:grid-cols-3">
                    {[
                      { t: "1. Avant la formation", d: "Échange avec le salon, diagnostic de votre niveau et choix du format." },
                      { t: "2. Pendant les 40 h", d: "Modules progressifs, corrections sur vos gestes et cas concrets." },
                      { t: "3. Après le parcours", d: "Licence RR COIFFURE, prestations plus sûres, base solide pour avancer." },
                    ].map((b) => (
                      <div key={b.t} className="rounded-3xl bg-[#FFF7FB] p-4 ring-1 ring-[#F0C2D9]">
                        <p className="text-sm font-semibold text-[#140A11]">{b.t}</p>
                        <p className="mt-1 text-[13px] leading-relaxed text-[#5E3B4D]">{b.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* MODES */}
              <motion.section
                id="modes"
                aria-labelledby="modes-title"
                className="scroll-mt-32 rounded-4xl bg-white/95 p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F3D6E5] sm:p-8"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 id="modes-title" className="text-3xl font-semibold tracking-tight text-[#140A11] md:text-4xl">
                      Deux modes de formation, un même diplôme
                    </h2>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#5E3B4D] sm:text-[15px]">
                      Présentiel ou vidéo à distance : vous choisissez le format qui s’adapte à votre emploi du temps.
                    </p>
                  </div>
                  <p className="text-[12px] text-[#7A5468] sm:text-[13px]">
                    Même exigence. Même licence. Deux façons de progresser.
                  </p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {modes.map((mode, index) => (
                    <motion.article
                      key={mode.type}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
                      className={[
                        "group relative overflow-hidden rounded-4xl p-5 ring-1 transition-all duration-200",
                        mode.highlight
                          ? "bg-[#FFF7FB] ring-[#F0C2D9] shadow-[0_18px_50px_rgba(225,29,116,0.14)] hover:-translate-y-1"
                          : "bg-white/90 ring-[#F3D6E5] shadow-[0_16px_40px_rgba(17,24,39,0.08)] hover:-translate-y-0.5",
                      ].join(" ")}
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-200 group-hover:opacity-25 bg-[radial-gradient(circle_at_30%_20%,rgba(225,29,116,0.18),transparent_55%)]" />
                      <div className="relative space-y-2">
                        {mode.highlight && (
                          <span className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E11D74] ring-1 ring-[#F0C2D9]">
                            Format le plus complet
                          </span>
                        )}

                        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">
                          {mode.type}
                        </span>
                        <h3 className="text-[15px] font-semibold text-[#140A11]">{mode.title}</h3>
                        <p className="text-[13px] text-[#5E3B4D]">{mode.place}</p>

                        <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-[#5E3B4D]">
                          {mode.advantages.map((advantage) => (
                            <li key={advantage} className="flex gap-2">
                              <CheckIcon />
                              <span>{advantage}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="mt-3 text-[12px] text-[#7A5468]">{mode.priceNote}</p>
                        <p className="text-[12px] font-semibold text-[#140A11]">{mode.licenceNote}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.section>

              {/* PROGRAMME */}
              <motion.section
                id="programme"
                aria-labelledby="programme-title"
                className="scroll-mt-32 rounded-4xl bg-white/95 p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F3D6E5] sm:p-8"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 id="programme-title" className="text-2xl font-semibold tracking-tight text-[#140A11] md:text-3xl">
                      Programme détaillé · 40 h
                    </h2>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#5E3B4D] sm:text-[15px]">
                      9 modules progressifs pour comprendre ce que vous faites sur le cheveu et sécuriser chaque prestation.
                    </p>
                  </div>
                  <p className="text-[12px] text-[#7A5468] sm:text-[13px]">Environ 6 jours de formation guidée.</p>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    { day: "Jour 1", list: [modules[0], modules[2]] },
                    { day: "Jour 2", list: [modules[1]] },
                    { day: "Jour 3", list: [modules[3]] },
                    { day: "Jour 4", list: [modules[4]] },
                    { day: "Jour 5", list: [modules[5]] },
                    { day: "Jour 6", list: [modules[6], modules[7], modules[8]] },
                  ].map((d) => (
                    <div key={d.day} className="rounded-3xl bg-[#FFF7FB] p-4 ring-1 ring-[#F0C2D9]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">{d.day}</p>
                      <div className="mt-3 space-y-2">
                        {d.list.map((m) => (
                          <div key={m.title} className="rounded-2xl bg-white/85 p-3 ring-1 ring-[#F3D6E5]">
                            <p className="text-[13px] font-semibold text-[#140A11]">
                              {m.title} <span className="font-normal text-[#E11D74]">· {m.hours}</span>
                            </p>
                            <p className="mt-1 text-[12px] leading-relaxed text-[#5E3B4D]">{m.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 max-w-prose text-[13px] leading-relaxed text-[#5E3B4D]">
                  Formation <span className="font-semibold">diplômante</span> : la licence RR COIFFURE est délivrée après validation des compétences.
                </p>
              </motion.section>

              {/* FORMATRICE */}
              <motion.section
                id="formatrice"
                className="scroll-mt-32 rounded-4xl bg-white/95 p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F3D6E5] sm:p-8"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">La formatrice</p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#140A11]">Une formatrice de salon, pas une école théorique</h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#5E3B4D]">
                      RR COIFFURE forme chaque jour de vraies clientes en salon. La formation reprend les gestes, protocoles et exigences utilisés au quotidien.
                    </p>
                    <p className="mt-2 text-[12px] text-[#7A5468]">
                      Vous apprenez avec une professionnelle qui sait ce qui fonctionne réellement dans la durée.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="relative h-44 w-full overflow-hidden rounded-4xl bg-[#FFF7FB] shadow-[0_16px_40px_rgba(17,24,39,0.10)] ring-1 ring-[#F0C2D9]">
                      <div className="absolute inset-0 flex items-center justify-center text-[12px] text-[#7A5468]">
                        Portrait de la formatrice RR COIFFURE
                      </div>
                    </div>
                    <div className="rounded-3xl bg-white/95 p-4 text-[13px] text-[#5E3B4D] ring-1 ring-[#F3D6E5]">
                      <p className="italic">« Après la formation, j’ai enfin osé poser mes prix et arrêter de douter sur chaque diagnostic. »</p>
                      <p className="mt-2 text-[12px] font-semibold text-[#140A11]">— Aïcha, coiffeuse en reconversion</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* APRÈS */}
              <motion.section
                id="apres-formation"
                aria-labelledby="apres-formation-title"
                className="scroll-mt-32 rounded-4xl bg-white/95 p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F3D6E5] sm:p-8"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <h2 id="apres-formation-title" className="text-3xl font-semibold tracking-tight text-[#140A11] md:text-4xl">
                  Après 40 h, vous saurez…
                </h2>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">Concrètement</p>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    { t: "Travailler en sécurité", d: "Poser un diagnostic fiable, choisir une technique adaptée et éviter les erreurs." },
                    { t: "Proposer des prestations complètes", d: "Construire un rendez-vous fluide, du premier contact aux conseils finaux." },
                    { t: "Valoriser votre activité", d: "Poser vos prix, mettre en avant vos compétences et rassurer vos clientes." },
                  ].map((c) => (
                    <div key={c.t} className="rounded-4xl bg-[#FFF7FB] p-5 ring-1 ring-[#F0C2D9] shadow-[0_16px_40px_rgba(17,24,39,0.08)]">
                      <p className="text-[15px] font-semibold text-[#140A11]">{c.t}</p>
                      <p className="mt-2 text-[13px] leading-relaxed text-[#5E3B4D]">{c.d}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-[12px] text-[#7A5468]">
                  Plusieurs coiffeur·ses ont déjà suivi ce parcours pour structurer leurs bases et gagner en confiance.
                </p>
              </motion.section>

              {/* AVANTAGES */}
              <motion.section
                id="avantages"
                className="scroll-mt-32 rounded-4xl bg-white/95 p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F3D6E5] sm:p-8"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold tracking-tight text-[#140A11] md:text-3xl">
                  Avec ces 40 h, vous repartez avec…
                </h2>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[#5E3B4D]">
                  {["Licence nominative", "Protocoles salon", "Checklists diagnostic", "Suivi & corrections"].map((t) => (
                    <span key={t} className="rounded-full bg-[#FFF7FB] px-3 py-1 ring-1 ring-[#F0C2D9]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 text-[13px] text-[#5E3B4D] sm:grid-cols-2">
                  <div className="space-y-2">
                    {[
                      "Une licence RR COIFFURE à votre nom.",
                      "Des protocoles clairs (diagnostic, couleur, mèches, soins, boucles).",
                      "Des repères concrets pour adapter vos gestes aux différents types de cheveux.",
                    ].map((t) => (
                      <p key={t} className="flex gap-2">
                        <CheckIcon />
                        <span>{t}</span>
                      </p>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {[
                      "Une base pour poser vos prix avec confiance.",
                      "Un langage pro pour rassurer vos clientes et expliquer vos choix techniques.",
                      "Une vision plus claire de votre activité sur 6 à 12 mois.",
                    ].map((t) => (
                      <p key={t} className="flex gap-2">
                        <CheckIcon />
                        <span>{t}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* INFOS */}
              <motion.section
                id="infos-pratiques"
                aria-labelledby="infos-pratiques-title"
                className="scroll-mt-32 rounded-4xl bg-white/95 p-6 shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F3D6E5] sm:p-8"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <h2 id="infos-pratiques-title" className="text-3xl font-semibold tracking-tight text-[#140A11] md:text-4xl">
                  Informations pratiques
                </h2>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#5E3B4D] sm:text-[15px]">
                  Les détails (dates, horaires, paiements) sont finalisés directement avec le salon.
                </p>

                <div className="mt-6 grid gap-4 text-[13px] text-[#5E3B4D] sm:grid-cols-3">
                  {[
                    {
                      t: "Lieu & format",
                      lines: ["Salon RR COIFFURE – Lausanne.", "Ou formation vidéo à distance.", "Groupes limités pour un accompagnement réel."],
                    },
                    {
                      t: "Dates & horaires",
                      lines: [
                        `Prochaine session : ${nextSession.startLabel}.`,
                        "Parcours sur 6 jours consécutifs ou étalés.",
                        "Horaires pensés pour la pratique.",
                      ],
                    },
                    {
                      t: "Inscription",
                      lines: ["Message privé sur Instagram.", "Ou passage au salon.", "Acompte & paiement en plusieurs fois possibles."],
                    },
                  ].map((b) => (
                    <div key={b.t} className="rounded-4xl bg-[#FFF7FB] p-5 ring-1 ring-[#F0C2D9]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A5468]">{b.t}</p>
                      <ul className="mt-3 space-y-2">
                        {b.lines.map((l) => (
                          <li key={l} className="leading-relaxed">
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-4xl bg-linear-to-r from-[#E11D74] via-[#F472B6] to-[#E11D74] p-5 text-white shadow-[0_26px_70px_rgba(225,29,116,0.35)] sm:flex sm:items-center sm:justify-between">
                  <div className="mb-3 flex items-start gap-3 sm:mb-0">
                    <div className="mt-0.5 rounded-full bg-white/15 p-2">
                      <InstagramIcon />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold">Une question avant de réserver ?</p>
                      <p className="mt-1 max-w-md text-[12px] leading-relaxed text-white/90">
                        Écrivez au salon RR COIFFURE sur Instagram pour vérifier les prochaines dates, les places et les options de paiement.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="https://www.instagram.com/rr.coiffure/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold text-[#E11D74] shadow-[0_14px_36px_rgba(17,24,39,0.25)] hover:bg-[#FFF2F8]"
                  >
                    Poser une question sur Instagram
                  </Link>
                </div>
              </motion.section>

              {/* FAQ */}
              <motion.section
                id="faq"
                aria-labelledby="faq-title"
                className="scroll-mt-32 space-y-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div>
                  <h2 id="faq-title" className="text-3xl font-semibold tracking-tight text-[#140A11] md:text-4xl">
                    Questions fréquentes
                  </h2>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#5E3B4D] sm:text-[15px]">
                    Si vous hésitez encore, ces réponses vous aideront à y voir plus clair.
                  </p>
                </div>

                <div className="space-y-3">
                  {faqs.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-4xl bg-white/95 px-5 py-4 text-[13px] text-[#5E3B4D] shadow-[0_18px_50px_rgba(17,24,39,0.08)] ring-1 ring-[#F3D6E5] transition-all hover:-translate-y-0.5"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                        <span className="text-[15px] font-semibold text-[#140A11]">{item.q}</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF2F8] text-lg text-[#E11D74] ring-1 ring-[#F0C2D9] transition-transform duration-150 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 max-w-prose leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </motion.section>

              {/* CTA FINAL */}
              <motion.section
                className="pb-4 text-center"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-[#141018] via-[#2A1621] to-[#141018] px-6 py-8 text-white shadow-[0_30px_90px_rgba(17,24,39,0.30)] sm:px-10">
                  <div className="pointer-events-none absolute inset-0 opacity-35 blur-2xl bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.75),transparent_60%)]" />
                  <div className="relative space-y-3">
                    <p className="text-[15px] font-semibold tracking-wide">Prête à valider votre licence RR COIFFURE ?</p>
                    <p className="mx-auto max-w-2xl text-[13px] leading-relaxed text-white/90">
                      Un premier échange avec le salon permet de vérifier si ce parcours correspond à votre niveau et à votre agenda.
                    </p>
                    <p className="text-[12px] text-white/85">
                      Prochaine session : <span className="font-semibold text-white">{nextSession.startLabel}</span> · Places :{" "}
                      <span className="font-semibold text-white">
                        {nextSession.seatsLeft}/{nextSession.totalSeats}
                      </span>
                    </p>

                    <Link
                      href="https://www.instagram.com/rr.coiffure/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#E11D74] via-[#F472B6] to-[#E11D74] px-7 py-3 text-[13px] font-semibold text-white shadow-[0_16px_44px_rgba(225,29,116,0.35)] hover:opacity-95"
                    >
                      Demander une place ({selectedMode})
                    </Link>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>

          {/* BARRE CTA MOBILE */}
          <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#F3D6E5] bg-white/92 px-4 py-2 text-[#140A11] shadow-[0_-18px_45px_rgba(17,24,39,0.16)] backdrop-blur-md sm:hidden">
            <div className="mb-2 flex items-center justify-between gap-2 text-[11px] text-[#5E3B4D]">
              <span className="truncate">Session : {nextSession.startLabel}</span>
              <span className="rounded-full bg-[#FFF7FB] px-2 py-0.5 ring-1 ring-[#F0C2D9]">
                Places{" "}
                <span className="font-semibold text-[#140A11]">
                  {nextSession.seatsLeft}/{nextSession.totalSeats}
                </span>
              </span>
              <span className="font-semibold text-[#E11D74]">{training.price}</span>
            </div>

            <div className="mb-2 grid grid-cols-2 gap-2">
              <ModePill label="Présentiel" active={selectedMode === "Présentiel"} onClick={() => setSelectedMode("Présentiel")} />
              <ModePill label="À distance" active={selectedMode === "À distance"} onClick={() => setSelectedMode("À distance")} />
            </div>

            <Link
              href="https://www.instagram.com/rr.coiffure/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full bg-linear-to-r from-[#E11D74] via-[#F472B6] to-[#E11D74] px-4 py-3 text-[13px] font-semibold text-white shadow-[0_16px_44px_rgba(225,29,116,0.35)]"
            >
              Demander une place ({selectedMode})
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
