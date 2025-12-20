"use client"

import { type MouseEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BadgeCheck,
  Wand2,
  ShieldCheck,
  Crown,
  Star,
  Heart,
  Sparkles,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const ABOUT_HIGHLIGHTS = [
  { title: "Diagnostic personnalisé", desc: "Vos besoins, dès l’arrivée.", icon: Star, primary: true },
  { title: "Expertise couleur", desc: "Balayages précis, naturel.", icon: Crown, primary: true },
  { title: "Note Google 4.9/5", desc: "Avis vérifiés.", icon: Star, primary: true },
  { title: "Produits respectueux", desc: "Formules douces.", icon: ShieldCheck, primary: false },
  { title: "Soin profond", desc: "Hydratation & éclat.", icon: Heart, primary: false },
  { title: "Formations certifiantes", desc: "Formations reconnues.", icon: BadgeCheck, primary: false },
]

export default function AboutSection() {
  const scrollToHash = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return
    event.preventDefault()

    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    const headerOffset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset

    if (window.location.hash !== href) history.pushState(null, "", href)
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <section
      id="apropos"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-[#FDF2F8] pt-16 pb-10 sm:pt-24 sm:pb-14"
    >
      {/* Fond doux éditorial */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,189,217,0.25),transparent_55%),radial-gradient(circle_at_90%_90%,rgba(236,126,184,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Wrapper centré */}
        <div className="mx-auto max-w-3xl">
          {/* Signature */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="relative h-14 w-14">
              <div className="pointer-events-none absolute -inset-[7px] rounded-full ring-1 ring-[#F9A8D4]/45 shadow-[0_12px_28px_rgba(236,72,153,0.20)]" />
              <Image
                src="/images/galerie/rr-logo.jpg"
                alt="Logo RR Coiffure"
                width={56}
                height={56}
                className="relative rounded-full border border-[#F9A8D4]/60 bg-white object-cover"
              />
            </div>

            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a0526e]">
                Salon premium
              </p>
              <p className="text-sm font-semibold text-[#2b1019]">RR COIFFURE — Genève</p>
            </div>
          </div>

          {/* Headline */}
          <header className="mt-7 space-y-3 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#a0526e]">
              À propos
            </p>

            <h2
              id="about-title"
              className="font-display text-3xl font-extrabold leading-tight tracking-tight text-[#2b1019] sm:text-4xl"
            >
              L’expertise couleur au service de votre{" "}
              <span className="text-[#EC4899]">élégance</span>
            </h2>

            <p className="mx-auto max-w-[42rem] text-sm leading-relaxed text-[#7b4256] sm:text-base md:text-lg">
              Colorations sur mesure, coupes actuelles et soins profonds. Une expérience pensée pour un rendu lumineux,
              durable, et facile à porter au quotidien.
            </p>

            <p className="mx-auto max-w-[42rem] text-[12px] leading-relaxed text-[#7b4256] sm:text-[13px]">
              <span className="font-semibold text-[#2b1019]">Chaque cheveu a une histoire.</span>{" "}
              La vôtre mérite une expertise sur mesure.
            </p>

            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">
              Transparence • Conseil • Suivi
            </p>
          </header>

          {/* Highlights — séparation centrale + gauche alignée vers la ligne */}
          <div className="relative mt-9 md:grid md:grid-cols-2 md:gap-x-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#F9A8D4]/60 md:block"
            />

            <dl className="space-y-4 md:justify-self-end md:pr-10 md:max-w-[520px]">
              {ABOUT_HIGHLIGHTS.slice(0, 3).map(({ title, desc, icon: Icon, primary }) => (
                <div key={title} className="flex items-start gap-3">
                  <div
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1",
                      primary
                        ? "bg-white/85 text-[#EC4899] ring-[#EC4899]/25"
                        : "bg-white/70 text-[#EC4899] ring-[#F9A8D4]/45",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-[#2b1019]">{title}</dt>
                    <dd className="text-sm leading-relaxed text-[#7b4256]">{desc}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <dl className="mt-6 space-y-4 border-t border-[#F9A8D4]/35 pt-5 md:mt-0 md:border-t-0 md:pl-10 md:pt-0 md:max-w-[520px]">
              {ABOUT_HIGHLIGHTS.slice(3).map(({ title, desc, icon: Icon, primary }) => (
                <div key={title} className="flex items-start gap-3">
                  <div
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1",
                      primary
                        ? "bg-white/85 text-[#EC4899] ring-[#EC4899]/25"
                        : "bg-white/70 text-[#EC4899] ring-[#F9A8D4]/45",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-[#2b1019]">{title}</dt>
                    <dd className="text-sm leading-relaxed text-[#7b4256]">{desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-[#EC4899] px-8 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] sm:w-auto"
              >
                <Link href="https://www.snailscreation.com/book-online" target="_blank" rel="noopener noreferrer">
                  Prendre rendez-vous
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full border-[#EC4899] bg-white px-8 text-sm font-semibold text-[#EC4899] shadow-sm transition-colors hover:border-[#F472B6] hover:bg-[#FDE7F3] sm:w-auto"
              >
                <Link href="#services" onClick={(event) => scrollToHash(event, "#services")}>
                  Découvrir nos services
                </Link>
              </Button>

              <Link
                href="/tarifs"
                className="text-xs font-semibold text-[#7b4256] underline underline-offset-4 transition-colors hover:text-[#2b1019]"
              >
                Voir les tarifs
              </Link>
            </div>

            {/* Réassurance */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#9d5c75]">
              <span className="inline-flex items-center gap-2">
                <span>✓</span>
                Diagnostic offert
              </span>
              <span className="inline-flex items-center gap-2">
                <span>✓</span>
                Sans engagement
              </span>
              <span className="inline-flex items-center gap-2">
                <span>✓</span>
                Réponse rapide
              </span>
            </div>
          </div>
        </div>

        {/* ENGAGEMENTS */}
        <div className="mt-16 space-y-4 sm:mt-24">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a0526e]">
            Nos engagements
          </p>

          <div className="grid gap-7 sm:grid-cols-3 sm:gap-10">
            {[
              {
                title: "Notre approche",
                icon: Wand2,
                text: "Écoute attentive et expertise pour guider chaque technique, avec transparence et conseils, pour des choix sûrs.",
              },
              {
                title: "Notre priorité",
                icon: ShieldCheck,
                text: "Préserver la santé du cheveu tout en révélant une brillance et une tenue durables, adaptées à votre quotidien.",
              },
              {
                title: "Notre expertise",
                icon: Crown,
                text: "Plus de dix ans d’expérience en techniques modernes, colorations sur mesure, pour un rendu naturel et précis.",
              },
            ].map(({ title, icon: Icon, text }) => (
              <div
                key={title}
                className="group relative h-full overflow-hidden rounded-2xl border border-[#F9A8D4]/20 bg-white/60 p-6 backdrop-blur shadow-[0_6px_18px_rgba(236,72,153,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(236,72,153,0.10)] sm:p-7"
              >
                {/* Ligne décorative fine */}
                <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-[#EC4899]/35 via-[#F9A8D4]/15 to-transparent" />

                <div className="mx-auto w-full max-w-[18rem] text-center">
                  <div className="flex items-center justify-center gap-2.5">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-[#EC4899] ring-1 ring-[#F9A8D4]/35 shadow-sm">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-[#2b1019]">{title}</h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#7b4256] md:text-[13px] line-clamp-3">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-[#7b4256] sm:mt-8 sm:text-sm">
            Première visite ? <span className="font-semibold text-[#2b1019]">On s’adapte à vous.</span>
          </p>

          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/45 bg-white/60 px-4 py-2 text-[11px] font-semibold text-[#7b4256] shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#EC4899]" aria-hidden="true" />
              Une finition nette, un résultat naturel.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
