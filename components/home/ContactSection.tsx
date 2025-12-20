"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const badgeRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  // Animation simple du badge quand la section entre dans le viewport
  useEffect(() => {
    const sectionEl = sectionRef.current
    const badgeEl = badgeRef.current
    if (!sectionEl || !badgeEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            badgeEl.classList.remove("fade-up")
            void badgeEl.offsetWidth
            badgeEl.classList.add("fade-up")
          } else {
            badgeEl.classList.remove("fade-up")
            badgeEl.style.opacity = "0"
            badgeEl.style.transform = "translateY(6px)"
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(sectionEl)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden py-16 sm:py-24 bg-[#FDF2F8]"
    >
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,189,217,0.25),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(236,126,184,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* COLONNE GAUCHE */}
          <div className="flex flex-col gap-5">
            {/* TITRE */}
            <div className="space-y-3 text-center lg:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#EC4899]">
                Prendre rendez-vous
              </p>

              <h2
                id="contact-title"
                className="font-display text-[26px] sm:text-[32px] font-extrabold leading-tight tracking-tight text-[#2b1019]"
              >
                Parlez-nous de votre{" "}
                <span className="text-[#EC4899]">style</span>
              </h2>

              <p className="mx-auto max-w-lg text-[14px] leading-relaxed text-[#7b4256]">
                <span className="block sm:hidden">
                  Dites-nous votre style et vos envies, puis laissez vos
                  coordonnées. Nous confirmons le service et le créneau.
                </span>
                <span className="hidden sm:block">
                  Dites-nous le style que vous aimez, vos envies, votre routine
                  et l’effet recherché, puis laissez vos coordonnées. Partagez
                  vos inspirations, vos habitudes et ce que vous souhaitez
                  éviter. Nous revenons vers vous pour confirmer le service et
                  le créneau idéal, avec une réponse claire.
                </span>
              </p>
            </div>

            <div className="mt-4 space-y-4">
              {/* CTA */}
              <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:flex-row sm:justify-start sm:gap-4 lg:gap-5">
                <Button
                  asChild
                  className="rounded-full bg-[#EC4899] px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] sm:px-6 sm:py-2.5 sm:text-xs"
                >
                  <Link
                    href="https://www.snailscreation.com/book-online"
                    target="_blank"
                  >
                    Réserver en ligne
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-[#EC4899] bg-white px-4 py-2 text-[11px] font-semibold text-[#EC4899] shadow-sm hover:bg-[#FDE7F3] hover:border-[#F472B6] sm:px-6 sm:py-2.5 sm:text-xs"
                >
                  <Link href="tel:+41211234567">Appeler le salon</Link>
                </Button>

                <Link
                  href="/tarifs"
                  className="hidden items-center justify-center gap-1.5 rounded-full border border-[#F9A8D4]/60 bg-white/80 px-4 py-2 text-[11px] font-semibold text-[#7b4256] shadow-sm transition-colors hover:border-[#EC4899]/60 hover:text-[#EC4899] hover:bg-[#FDE7F3] sm:inline-flex sm:px-5 sm:py-2.5 sm:text-xs"
                >
                  Voir les tarifs
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

            </div>

            {/* INFOS */}
            <div className="grid gap-5 rounded-2xl border border-[#F9A8D4]/50 bg-[#FDE7F3]/60 p-4 text-center text-sm sm:grid-cols-2 shadow-[0_12px_32px_rgba(236,72,153,0.12)]">
              {/* Adresse */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-center gap-2 text-[#EC4899]">
                  <MapPin className="h-4 w-4" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2b1019]">
                    Adresse
                  </p>
                </div>
                <p className="text-[#2b1019]">1201 Genève</p>
                <p className="text-[11px] text-[#7b4256]">
                  Zone Genève et alentours
                </p>
              </div>

              {/* Téléphone */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-center gap-2 text-[#EC4899]">
                  <Phone className="h-4 w-4" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2b1019]">
                    Téléphone
                  </p>
                </div>
                <p>
                  <Link
                    href="tel:+41211234567"
                    className="font-medium text-[#2b1019] hover:text-[#EC4899]"
                  >
                    +41 21 123 45 67
                  </Link>
                </p>
                <p className="text-[11px] text-[#7b4256]">
                  Pour une réponse immédiate
                </p>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-center gap-2 text-[#EC4899]">
                  <Mail className="h-4 w-4" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2b1019]">
                    E-mail
                  </p>
                </div>
                <p>
                  <Link
                    href="mailto:contact@rr-coiffure.com"
                    className="font-medium text-[#2b1019] hover:text-[#EC4899]"
                  >
                    contact@rr-coiffure.com
                  </Link>
                </p>
                <p className="text-[11px] text-[#7b4256]">
                  Pour un devis détaillé
                </p>
              </div>

              {/* Horaires */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-center gap-2 text-[#EC4899]">
                  <Clock className="h-4 w-4" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2b1019]">
                    Horaires
                  </p>
                </div>
                <p className="text-[#2b1019]">Sur rendez-vous</p>
                <p className="text-[11px] text-[#7b4256]">
                  Du lundi au samedi
                </p>
              </div>
            </div>

            <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-[#7b4256]">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-[#EC4899]">★</span>
                <span className="font-semibold text-[#2b1019]">4.9/5</span>
                avis clients
              </span>
              <span className="h-1 w-1 rounded-full bg-[#F9A8D4]" aria-hidden="true" />
              <span className="font-medium">Diagnostic offert</span>
              <span className="h-1 w-1 rounded-full bg-[#F9A8D4]" aria-hidden="true" />
              <span className="font-medium">
                Réponse <span className="font-semibold text-[#2b1019]">&lt; 2h</span>
              </span>
            </p>
          </div>

          {/* FORMULAIRE */}
          <div className="flex h-full">
            <div className="relative w-full rounded-[22px] border border-[#F9A8D4]/60 bg-white/95 p-4 sm:p-5 shadow-[0_18px_60px_rgba(236,72,153,0.16)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EC4899]">
                Formulaire de contact
              </p>

              <p className="mb-3 mt-1 text-[13px] text-[#7b4256]">
                Quelques informations suffisent pour fixer votre rendez-vous.
              </p>

              <form className="space-y-3">
                {/* Nom / Email */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] text-[#2b1019]">Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Votre nom et prénom"
                      className="rounded-xl border border-[#F9A8D4]/70 bg-white px-3 py-2 text-sm text-[#2b1019] placeholder:text-[#d199b5] focus:outline-none focus:ring-2 focus:ring-[#F472B6]"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] text-[#2b1019]">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="vous@example.com"
                      className="rounded-xl border border-[#F9A8D4]/70 bg-white px-3 py-2 text-sm text-[#2b1019] placeholder:text-[#d199b5] focus:outline-none focus:ring-2 focus:ring-[#F472B6]"
                      required
                    />
                  </div>
                </div>

                {/* Téléphone / Service */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] text-[#2b1019]">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+41..."
                      className="rounded-xl border border-[#F9A8D4]/70 bg-white px-3 py-2 text-sm text-[#2b1019] placeholder:text-[#d199b5] focus:outline-none focus:ring-2 focus:ring-[#F472B6]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] text-[#2b1019]">Type de prestation</label>
                    <select
                      name="service"
                      defaultValue=""
                      className="rounded-xl border border-[#F9A8D4]/70 bg-white px-3 py-2 text-sm text-[#2b1019] focus:outline-none focus:ring-2 focus:ring-[#F472B6]"
                    >
                      <option value="" disabled>
                        Sélectionnez
                      </option>
                      <option value="coupe">Coupe</option>
                      <option value="coloration">Coloration / mèches</option>
                      <option value="coiffage">Coiffage / brushing</option>
                      <option value="transformation">Transformation complète</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] text-[#2b1019]">Message *</label>
                  <textarea
                    name="message"
                    autoComplete="on"
                    placeholder="Service souhaité + date/heure idéale + détails utiles."
                    required
                    className="min-h-[110px] resize-none rounded-2xl border border-[#EC4899]/60 bg-white px-4 py-3 text-[14px] text-[#2b1019] placeholder:text-[#d199b5] shadow-inner outline-none focus:ring-2 focus:ring-[#F472B6]"
                  />
                </div>

                {/* RGPD */}
                <div className="flex items-center gap-2">
                  <input
                    id="rgpd"
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#F9A8D4] text-[#EC4899] focus:ring-[#F472B6]"
                    required
                  />
                  <label
                    htmlFor="rgpd"
                    className="text-[11px] leading-snug text-[#7b4256]"
                  >
                    J’accepte l’usage de mes infos pour répondre à ma demande.
                  </label>
                </div>

                {/* Bouton */}
                <Button
                  type="submit"
                  className="w-full rounded-full bg-[#EC4899] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6]"
                >
                  Envoyer ma demande
                </Button>

                <p className="text-center text-[11px] text-[#7b4256]">
                  Vos données restent confidentielles.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
