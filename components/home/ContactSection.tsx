"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#FDF2F8] pt-16 pb-10 sm:pt-24 sm:pb-14"
    >
      {/* Fond */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,189,217,0.25),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(236,126,184,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* COLONNE GAUCHE */}
          <div className="flex flex-col gap-6">
            <div className="space-y-3 text-center lg:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#EC4899]">
                Prendre rendez-vous
              </p>

              <h2 className="font-display text-[26px] font-extrabold text-[#2b1019] sm:text-[32px]">
                Parlez-nous de votre <span className="text-[#EC4899]">style</span>
              </h2>

              <p className="mx-auto max-w-lg text-[14px] leading-relaxed text-[#7b4256] lg:mx-0">
                Dites-nous votre style et vos envies, puis laissez vos coordonnées.
                Nous confirmons le service et le créneau.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                className="w-full rounded-full bg-[#EC4899] px-6 py-2.5 text-xs font-semibold text-white sm:w-auto"
              >
                <Link href="https://www.instagram.com/rr.coiffure/" target="_blank">
                  Réserver en ligne
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full px-6 py-2.5 text-xs font-semibold sm:w-auto"
              >
                <Link href="tel:+41762920712">Appeler le salon</Link>
              </Button>

              <Link
                href="/tarifs"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#F9A8D4]/60 bg-white/80 px-6 py-2.5 text-xs font-semibold text-[#7b4256] sm:w-auto"
              >
                Voir les tarifs
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* INFOS */}
            <div className="grid gap-5 rounded-2xl border border-[#F9A8D4]/50 bg-[#FDE7F3]/60 p-4 text-center text-sm sm:grid-cols-2">
              <Info icon={<MapPin />} title="Adresse">
                1201 Genève
                <span className="block text-[11px] text-[#7b4256]">Zone Genève et alentours</span>
              </Info>

              <Info icon={<Phone />} title="Téléphone">
                <Link href="tel:+41762920712">+41 76 292 07 12</Link>
                <span className="block text-[11px] text-[#7b4256]">Réponse immédiate</span>
              </Info>

              <Info icon={<Mail />} title="E-mail">
                <Link href="mailto:contact@rr-coiffure.com">contact@rr-coiffure.com</Link>
                <span className="block text-[11px] text-[#7b4256]">Pour un devis détaillé</span>
              </Info>

              <Info icon={<Clock />} title="Horaires">
                Sur rendez-vous
                <span className="block text-[11px] text-[#7b4256]">Du lundi au samedi</span>
              </Info>
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="flex">
            <div className="relative w-full rounded-[22px] border border-[#F9A8D4]/60 bg-white/95 p-5 shadow-[0_18px_60px_rgba(236,72,153,0.16)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EC4899]">
                Formulaire de contact
              </p>

              <p className="mb-4 mt-1 text-[13px] text-[#7b4256]">
                Quelques informations suffisent pour fixer votre rendez-vous.
              </p>

              <form className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Nom complet *">
                    <input
                      required
                      className="w-full rounded-xl border border-[#F9A8D4]/70 px-3 py-2 text-sm focus:ring-2 focus:ring-[#F472B6]"
                      placeholder="Votre nom et prénom"
                    />
                  </Field>

                  <Field label="E-mail *">
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-[#F9A8D4]/70 px-3 py-2 text-sm focus:ring-2 focus:ring-[#F472B6]"
                      placeholder="vous@example.com"
                    />
                  </Field>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Téléphone">
                    <input
                      type="tel"
                      className="w-full rounded-xl border border-[#F9A8D4]/70 px-3 py-2 text-sm focus:ring-2 focus:ring-[#F472B6]"
                      placeholder="+41..."
                    />
                  </Field>

                  <Field label="Type de prestation">
                    <select className="w-full rounded-xl border border-[#F9A8D4]/70 px-3 py-2 text-sm focus:ring-2 focus:ring-[#F472B6]">
                      <option>Sélectionnez</option>
                      <option>Coupe</option>
                      <option>Coloration / mèches</option>
                      <option>Coiffage</option>
                      <option>Transformation complète</option>
                    </select>
                  </Field>
                </div>

                <Field label="Message *">
                  <textarea
                    required
                    className="w-full min-h-[120px] resize-none rounded-2xl border border-[#EC4899]/60 px-4 py-3 text-sm focus:ring-2 focus:ring-[#F472B6]"
                    placeholder="Service souhaité + date/heure idéale + détails utiles."
                  />
                </Field>

                {/* RGPD — FIX DÉFINITIF */}
                <div className="flex items-start gap-2">
                  <input
                    id="rgpd"
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0"
                  />
                  <label
                    htmlFor="rgpd"
                    className="min-w-0 text-[11px] leading-snug text-[#7b4256] whitespace-normal wrap-break-word"
                  >
                    J’accepte l’usage de mes infos pour répondre à ma demande.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-[#EC4899] px-6 py-3 text-sm font-semibold text-white"
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

/* Helpers */

function Info({ icon, title, children }: any) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-center gap-2 text-[#EC4899]">
        {icon}
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2b1019]">
          {title}
        </p>
      </div>
      <div className="text-[#2b1019]">{children}</div>
    </div>
  )
}

function Field({ label, children }: any) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] text-[#2b1019]">{label}</label>
      {children}
    </div>
  )
}
