"use client"

import { type MouseEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, Wand2, ShieldCheck, Crown, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const ABOUT_HIGHLIGHTS = [
  { title: "Diagnostic personnalisé", desc: "Vos besoins, dès l’arrivée.", icon: Star },
  { title: "Expertise couleur", desc: "Balayages précis, naturel.", icon: Crown },
  { title: "Note Google 4.9/5", desc: "Avis vérifiés.", icon: Star },
  { title: "Produits respectueux", desc: "Formules douces.", icon: ShieldCheck },
  { title: "Soin profond", desc: "Hydratation & éclat.", icon: Heart },
  { title: "Formations certifiantes", desc: "Formations reconnues.", icon: BadgeCheck },
]

const ABOUT_HIGHLIGHTS_PRIMARY = ABOUT_HIGHLIGHTS.slice(0, 3)
const ABOUT_HIGHLIGHTS_SECONDARY = ABOUT_HIGHLIGHTS.slice(3)

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
      className="relative overflow-hidden py-16 sm:py-24 bg-[#FDF2F8]"
    >
      {/* Fond doux éditorial (même logique que HERO) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,189,217,0.25),transparent_55%),radial-gradient(circle_at_90%_90%,rgba(236,126,184,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 items-start lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          {/* VISUEL (card clean comme le HERO) */}
          <aside className="order-2 lg:order-1">
            <div className="relative w-full overflow-hidden rounded-3xl border border-[#F9A8D4]/50 bg-[#FDF2F8] shadow-[0_20px_60px_rgba(236,72,153,0.18)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/6] min-h-[260px] sm:min-h-[320px]">
                <Image
                  src="/images/galerie/rr-coiffure-service.jpg"
                  alt="Coiffeuse en prestation — RR Coiffure"
                  fill
                  className="object-cover object-center sm:object-[50%_30%]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </aside>

          {/* TEXTE (SANS le grand cadre) */}
          <div className="order-1 lg:order-2 flex h-full max-w-xl flex-col gap-8">
            {/* Signature salon */}
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left">
              <div className="relative h-14 w-14">
                <div className="pointer-events-none absolute -inset-[6px] rounded-full ring-1 ring-[#F9A8D4]/40 shadow-[0_10px_24px_rgba(236,72,153,0.18)]" />
                <Image
                  src="/images/galerie/rr-logo.jpg"
                  alt="Logo RR Coiffure"
                  width={56}
                  height={56}
                  className="relative rounded-full border border-[#F9A8D4]/60 bg-white object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a0526e]">Salon premium</p>
                <p aria-hidden="true" className="hidden text-sm font-semibold text-transparent sm:block select-none">
                  RR COIFFURE — Genève
                </p>
              </div>
            </div>

            {/* Titre */}
            <header className="space-y-3 text-center sm:text-left">
              <h2
                id="about-title"
                className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2b1019] leading-tight"
              >
                À propos de <span className="text-[#EC4899]">RR Coiffure</span>
              </h2>
            </header>

            {/* Texte (aéré, pas de cadre) */}
            <div className="space-y-4 md:max-w-[34rem]">
              <div className="space-y-4 text-center text-base text-[#7b4256] leading-relaxed sm:text-left md:text-lg">
                <p>
                  RR COIFFURE est un salon premium à Genève, expert en colorations sur mesure, coupes actuelles et soins
                  profonds.
                </p>
                <p>
                  Un rendu lumineux et durable, conçu pour votre quotidien. Chaque prestation révèle votre élégance.
                </p>
                <p>
                  Des conseils experts pour prolonger la tenue. Un suivi précis, avant et après votre rendez-vous.
                </p>
              </div>

              <div className="hidden gap-5 md:grid md:grid-cols-2">
                <dl className="space-y-4">
                  {ABOUT_HIGHLIGHTS_PRIMARY.map(({ title, desc, icon: Icon }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full text-[#EC4899]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-[#2b1019]">{title}</dt>
                        <dd className="text-sm leading-relaxed text-[#7b4256]">{desc}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <dl className="space-y-4 border-t border-[#F9A8D4]/40 pt-4 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                  {ABOUT_HIGHLIGHTS_SECONDARY.map(({ title, desc, icon: Icon }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full text-[#EC4899]">
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
            </div>

            {/* CTA (desktop) */}
            <div className="mt-auto hidden md:block">
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#EC4899] px-7 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6]"
                >
                  <Link href="https://www.snailscreation.com/book-online" target="_blank" rel="noreferrer">
                    Prendre rendez-vous
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#EC4899] bg-white px-7 text-sm font-semibold text-[#EC4899] shadow-sm hover:border-[#F472B6] hover:bg-[#FDE7F3]"
                >
                  <Link href="#services" onClick={(event) => scrollToHash(event, "#services")}>
                    Découvrir nos services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

          <div className="mt-12 space-y-4 sm:mt-14">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a0526e]">
              Nos engagements
            </p>

          <div className="grid gap-7 sm:gap-10 sm:grid-cols-3">
            <div className="group h-full rounded-2xl border border-[#F9A8D4]/20 bg-white/60 p-6 sm:p-7 backdrop-blur shadow-[0_6px_18px_rgba(236,72,153,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(236,72,153,0.10)]">
              <div className="flex h-full flex-col items-center gap-5">
                <div className="mx-auto w-full max-w-[17rem] text-left">
                  <div className="flex items-center justify-center gap-2.5">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[#EC4899] ring-1 ring-[#F9A8D4]/35">
                      <Wand2 className="h-[18px] w-[18px]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-[#2b1019]">Notre approche</h3>
                  </div>
                  <p className="mt-5 text-center text-sm leading-relaxed text-[#7b4256] md:text-[13px]">
                    Écoute attentive et expertise pour guider chaque technique, avec transparence et conseils, pour des choix sûrs.
                  </p>
                </div>
              </div>
            </div>

            <div className="group h-full rounded-2xl border border-[#F9A8D4]/20 bg-white/60 p-6 sm:p-7 backdrop-blur shadow-[0_6px_18px_rgba(236,72,153,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(236,72,153,0.10)]">
              <div className="flex h-full flex-col items-center gap-5">
                <div className="mx-auto w-full max-w-[17rem] text-left">
                  <div className="flex items-center justify-center gap-2.5">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[#EC4899] ring-1 ring-[#F9A8D4]/35">
                      <ShieldCheck className="h-[18px] w-[18px]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-[#2b1019]">Notre priorité</h3>
                  </div>
                  <p className="mt-5 text-center text-sm leading-relaxed text-[#7b4256] md:text-[13px]">
                    Préserver la santé du cheveu tout en révélant une brillance et une tenue durables, adaptées à votre quotidien.
                  </p>
                </div>
              </div>
            </div>

            <div className="group h-full rounded-2xl border border-[#F9A8D4]/20 bg-white/60 p-6 sm:p-7 backdrop-blur shadow-[0_6px_18px_rgba(236,72,153,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(236,72,153,0.10)]">
              <div className="flex h-full flex-col items-center gap-5">
                <div className="mx-auto w-full max-w-[17rem] text-left">
                  <div className="flex items-center justify-center gap-2.5">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[#EC4899] ring-1 ring-[#F9A8D4]/35">
                      <Crown className="h-[18px] w-[18px]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-[#2b1019]">Notre expertise</h3>
                  </div>
                  <p className="mt-5 text-center text-sm leading-relaxed text-[#7b4256] md:text-[13px]">
                    Plus de dix ans d’expérience en techniques modernes, colorations sur mesure, pour un rendu naturel et précis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-[#7b4256] sm:mt-8 sm:text-sm whitespace-nowrap hidden md:block">
            Première visite ? On s’adapte à vous.
          </p>
          <div className="md:hidden mt-6 space-y-4">
            <div className="flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/50 bg-white/70 px-3 py-1.5 text-sm font-semibold text-[#7b4256] shadow-[0_4px_8px_rgba(236,72,153,0.10)]">
                <span className="text-[#EC4899]">★</span> 4.9/5 Google
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-[#EC4899] px-7 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6]"
              >
                <Link href="https://www.snailscreation.com/book-online" target="_blank" rel="noreferrer">
                  Prendre rendez-vous
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full border-[#EC4899] bg-white px-7 text-sm font-semibold text-[#EC4899] shadow-sm hover:border-[#F472B6] hover:bg-[#FDE7F3]"
              >
                <Link href="#services" onClick={(event) => scrollToHash(event, "#services")}>
                  Découvrir nos services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
