"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
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
      className="relative overflow-hidden py-16 sm:py-20"
    >
      {/* Halos RR COIFFURE */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-0 top-4 h-32 w-32 -translate-x-1/2 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-1/3 rounded-full bg-[#EC4899]/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* COLONNE GAUCHE */}
          <div className="flex flex-col gap-5 lg:pl-4">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div
                ref={badgeRef}
                className="inline-flex translate-y-3 items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-[11px] font-medium text-[#2b1019] opacity-0 shadow-sm ring-1 ring-[#F9A8D4]/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899] shadow-[0_0_8px_rgba(224,91,149,0.7)]" />
                Contact RR COIFFURE · Genève
              </div>
            </div>

            {/* TITRE */}
            <div className="mt-4 space-y-3 text-center lg:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#EC4899]">
                Prendre rendez-vous
              </p>

              <h2
                id="contact-title"
                className="text-[26px] sm:text-[32px] font-extrabold leading-tight tracking-tight text-[#2b1019]"
              >
                Parlez-nous de votre{" "}
                <span className="bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
                  style
                </span>
              </h2>

              <p className="mx-auto max-w-md text-[14px] leading-relaxed text-[#7b4256]">
                Un message rapide, vos coordonnées, et nous revenons vers vous
                pour fixer le créneau idéal.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <Link href="tel:+41211234567">Appeler le salon</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#F9A8D4] bg-white px-6 py-2.5 text-xs font-semibold text-[#EC4899] shadow-sm hover:bg-[#FDE7F3] hover:border-[#EC4899]"
              >
                <Link
                  href="https://www.snailscreation.com/book-online"
                  target="_blank"
                >
                  Réserver en ligne
                </Link>
              </Button>
            </div>

            <p className="mt-1 text-center text-[11px] text-[#7b4256]">
              Réponse moyenne :{" "}
              <span className="font-medium text-[#2b1019]">&lt; 2 heures</span>
            </p>

            {/* INFOS */}
            <div className="grid gap-4 rounded-2xl border border-[#F9A8D4]/70 bg-white/90 p-4 text-sm sm:grid-cols-2 shadow-[0_12px_32px_rgba(176,51,116,0.12)]">
              {/* Adresse */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#EC4899]">
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
                <div className="flex items-center gap-2 text-[#EC4899]">
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
                <div className="flex items-center gap-2 text-[#EC4899]">
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
                <div className="flex items-center gap-2 text-[#EC4899]">
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
          </div>

          {/* FORMULAIRE */}
          <div className="flex h-full">
            <div className="relative w-full rounded-[22px] border border-[#F9A8D4]/80 bg-white/95 p-4 sm:p-5 shadow-[0_18px_60px_rgba(176,51,116,0.16)]">
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
                      <option value="" disabled> Sélectionnez </option>
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
                    placeholder="Décrivez votre demande en quelques phrases."
                    required
                    className="min-h-[110px] resize-none rounded-2xl border border-[#EC4899]/60 bg-white px-4 py-3 text-[14px] text-[#2b1019] placeholder:text-[#d199b5] shadow-inner outline-none focus:ring-2 focus:ring-[#F472B6]"
                  />
                </div>

                {/* RGPD */}
                <div className="flex items-start gap-2">
                  <input
                    id="rgpd"
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-[#F9A8D4] text-[#EC4899] focus:ring-[#F472B6]"
                    required
                  />
                  <label
                    htmlFor="rgpd"
                    className="text-[11px] leading-snug text-[#7b4256]"
                  >
                    J’accepte que mes informations soient utilisées uniquement
                    pour répondre à ma demande de contact.
                  </label>
                </div>

                {/* Bouton */}
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] px-6 py-3 text-sm font-semibold text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Envoyer ma demande
                </Button>

                <p className="text-center text-[11px] text-[#7b4256]">
                  Réponse en général en moins de 2 heures.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
