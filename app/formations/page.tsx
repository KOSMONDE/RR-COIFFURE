"use client"

import { useEffect, useState } from "react"
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
  image:
    "/formations/u6737299833_luxurious_hair_salon_aesthetic_soft_pink_gradient_fdc04115-72a2-4501-9a4e-bd6134462c93_1.png",
  desc: "Un parcours intensif de 40 h pour passer du niveau débutant ou autodidacte à un niveau professionnel, avec licence RR COIFFURE à la clé. Vous apprenez les bases techniques, les gestes de salon qui comptent vraiment et la manière de sécuriser vos prestations sur clientes réelles.",
  badge: "Licence professionnelle RR COIFFURE",
}

const modules = [
  {
    title: "Anatomie et physiologie capillaire",
    hours: "3 h",
    desc: "Comprendre la structure du cheveu et du cuir chevelu pour éviter les erreurs techniques et choisir les bons soins dès le diagnostic.",
  },
  {
    title: "Coiffure et mise en forme",
    hours: "5 h",
    desc: "Maîtriser brushing, volume, finitions et outils chauffants pour des résultats salon reproductibles et qui tiennent dans le temps.",
  },
  {
    title: "Hygiénisation, soins et sécurité",
    hours: "3 h",
    desc: "Installer des protocoles d’hygiène clairs, rassurer la cliente et travailler proprement, comme dans un salon professionnel.",
  },
  {
    title: "Colorimétrie et techniques de mèches",
    hours: "6 h",
    desc: "Savoir lire une couleur, poser un diagnostic fiable et réaliser mèches, balayages, contouring et patines sans improviser.",
  },
  {
    title: "Chimie et traitements (4 techniques)",
    hours: "8 h",
    desc: "Comprendre ce qui se passe dans la fibre lors d’une coloration, décoloration, d’un défrisage ou lissage pour limiter les ratés et les cheveux cassés.",
  },
  {
    title: "Allongement et définition des boucles",
    hours: "6 h",
    desc: "Travailler les cheveux texturés pour définir la boucle, réduire les frisottis et proposer de vraies prestations adaptées.",
  },
  {
    title: "Accueil et service client",
    hours: "3 h",
    desc: "Structurer un rendez-vous de A à Z : accueil, écoute, diagnostic, prestation, conseils et fidélisation.",
  },
  {
    title: "Marketing et notions de gestion",
    hours: "4 h",
    desc: "Poser vos prix, présenter vos prestations, utiliser les réseaux sociaux et gérer votre activité sans vous disperser.",
  },
  {
    title: "(Bonus) Module Tresseuse",
    hours: "2 h",
    desc: "Découvrir les bases des tresses modernes (séparations, box braids, finitions) pour enrichir votre carte de services.",
  },
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
    licenceNote:
      "Licence professionnelle RR COIFFURE délivrée après validation des compétences en fin de formation.",
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
    priceNote:
      "Tarif adapté pour la version vidéo (à définir directement avec le salon).",
    licenceNote:
      "Licence professionnelle RR COIFFURE délivrée après validation des évaluations prévues en fin de parcours.",
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
    <svg
      aria-hidden="true"
      className="mt-[3px] h-3.5 w-3.5 flex-shrink-0 text-[#EC4899]"
      viewBox="0 0 16 16"
    >
      <path
        d="M6.2 11.3 3.2 8.3l1.1-1.1 1.9 1.9 4.5-4.5 1.1 1.1-5.6 5.6z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 flex-shrink-0"
    >
      <path
        fill="currentColor"
        d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.71 4.71 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm4.9-7.9a1.1 1.1 0 1 0-1.1-1.1 1.09 1.09 0 0 0 1.1 1.1ZM19 4.3A4.27 4.27 0 0 0 16.7 3 15.42 15.42 0 0 0 12 2.8a15.42 15.42 0 0 0-4.7.2A4.27 4.27 0 0 0 5 4.3a4.27 4.27 0 0 0-1.3 2.3A15.42 15.42 0 0 0 3.5 11v2a15.42 15.42 0 0 0 .2 4.7A4.27 4.27 0 0 0 5 20.3a4.27 4.27 0 0 0 2.3 1.3 15.42 15.42 0 0 0 4.7.2 15.42 15.42 0 0 0 4.7-.2A4.27 4.27 0 0 0 19 20.3a4.27 4.27 0 0 0 1.3-2.3 15.42 15.42 0 0 0 .2-4.7v-2a15.42 15.42 0 0 0-.2-4.7A4.27 4.27 0 0 0 19 4.3Zm-.1 9.8a13.86 13.86 0 0 1-.2 4.2 2.6 2.6 0 0 1-1.5 1.5 13.86 13.86 0 0 1-4.2.2 13.86 13.86 0 0 1-4.2-.2 2.6 2.6 0 0 1-1.5-1.5 13.86 13.86 0 0 1-.2-4.2v-2a13.86 13.86 0 0 1 .2-4.2 2.6 2.6 0 0 1 1.5-1.5 13.86 13.86 0 0 1 4.2-.2 13.86 13.86 0 0 1 4.2.2 2.6 2.6 0 0 1 1.5 1.5 13.86 13.86 0 0 1 .2 4.2Z"
      />
    </svg>
  )
}

export default function FormationsContent() {
  const sectionIds = sideNavItems.map((i) => i.id)
  const activeId = useActiveSection(sectionIds)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    function onScroll() {
      const total = document.body.scrollHeight - window.innerHeight
      const current = window.scrollY
      if (total <= 0) {
        setScroll(0)
      } else {
        setScroll(Math.min(100, Math.max(0, (current / total) * 100)))
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF8FC] text-[#2b1019] scroll-smooth">
      {/* Fond discret */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.06),transparent_55%)]" />
      </div>

      {/* Barre de progression de scroll */}
      <div className="fixed inset-x-0 top-0 z-40 h-1.5 bg-transparent" aria-hidden="true">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#EC4899] shadow-[0_0_12px_rgba(236,72,153,0.45)] transition-[width]"
          style={{ width: `${scroll}%` }}
        />
      </div>

      <SiteHeader />

      <main
        id="main-content"
        className="flex-1 py-10 sm:py-16"
        aria-label="Contenu principal de la formation RR COIFFURE"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* NAV MOBILE */}
          <nav
            aria-label="Navigation de la formation (mobile)"
            className="mb-5 block lg:hidden"
          >
            <div className="overflow-x-auto">
              <div className="inline-flex min-w-full gap-2 rounded-full bg-[#FDF2F8]/90 px-2 py-1 text-xs text-[#7b4256] shadow-md ring-1 ring-[#F9A8D4]/60 backdrop-blur-sm">
                {sideNavItems.map((item) => {
                  const isActive = activeId === item.id
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={[
                        "whitespace-nowrap rounded-full px-3 py-1.5 transition-all duration-200",
                        isActive
                          ? "bg-[#EC4899] text-white shadow-[0_10px_24px_rgba(190,24,93,0.35)]"
                          : "text-[#7b4256] hover:bg-[#FDE7F3]",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </nav>

          {/* GRID 2 COLONNES */}
          <div className="mt-2 grid gap-8 lg:grid-cols-[250px_minmax(0,2fr)] lg:gap-12">
            {/* COLONNE GAUCHE : menu latéral */}
            <aside className="hidden lg:block" aria-label="Sommaire de la formation">
              <div className="sticky top-28 space-y-6">
                <nav aria-label="Navigation de la formation (bureau)">
                  <div className="rounded-3xl bg-[#FDF2F8]/80 p-3 shadow-[0_16px_40px_rgba(190,24,93,0.18)] ring-1 ring-[#F9A8D4]/80 backdrop-blur-sm">
                    <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b05a7b]">
                      Parcours 40 h – Licence
                    </p>
                    <ul className="space-y-1.5 text-sm text-[#7b4256]">
                      {sideNavItems.map((item) => {
                        const isActive = activeId === item.id
                        return (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              aria-current={isActive ? "true" : undefined}
                              className={[
                                "flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition-all duration-200",
                                isActive
                                  ? "bg-[#EC4899] text-white shadow-[0_12px_30px_rgba(190,24,93,0.5)]"
                                  : "hover:bg-[#FDE7F3] hover:text-[#EC4899]",
                              ].join(" ")}
                            >
                              <span
                                className={[
                                  "h-1.5 w-1.5 rounded-full transition-opacity",
                                  isActive
                                    ? "bg-white opacity-100"
                                    : "bg-[#EC4899] opacity-50",
                                ].join(" ")}
                              />
                              <span className="font-medium">{item.label}</span>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </nav>
              </div>
            </aside>

            {/* CONTENU PRINCIPAL */}
            <div className="max-w-none space-y-12 sm:space-y-14">
              {/* HERO */}
              <motion.section
                id="intro"
                aria-labelledby="formation-intro"
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="overflow-hidden rounded-4xl bg-white/95 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-[#F9E0EC] sm:p-8">
                  <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                    {/* Texte hero */}
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3FA] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EC4899] ring-1 ring-[#F9C3DF]">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
                        <span>Parcours 40 h · Licence RR COIFFURE</span>
                      </div>

                      <h1
                        id="formation-intro"
                        className="mt-4 text-3xl font-semibold tracking-tight text-[#1F1020] sm:text-[2.4rem]"
                      >
                        Devenez coiffeur·se licencié·e RR COIFFURE en 40 heures
                      </h1>

                      <p className="mt-3 max-w-prose text-sm leading-relaxed text-[#7b4256] sm:text-[15px]">
                        {training.desc}
                      </p>

                      <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-[#FFF7FB] px-4 py-3 text-left">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B05A7B]">
                            Durée
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[#2b1019]">
                            {training.shortDuration}
                          </p>
                          <p className="mt-1 text-[12px] text-[#a0526e]">
                            {training.duration}.
                          </p>
                        </div>
                        <div className="rounded-2xl bg-[#FFF7FB] px-4 py-3 text-left">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B05A7B]">
                            Niveau
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[#2b1019]">
                            {training.level}
                          </p>
                          <p className="mt-1 text-[12px] text-[#a0526e]">
                            Pour débutants motivés et pros en salon.
                          </p>
                        </div>
                        <div className="rounded-2xl bg-[#FFF7FB] px-4 py-3 text-left">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B05A7B]">
                            Diplôme
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[#2b1019]">
                            Licence RR COIFFURE
                          </p>
                          <p className="mt-1 text-[12px] text-[#a0526e]">
                            Délivrée après validation des compétences.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Visuel + prix */}
                    <div className="space-y-4">
                      <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-[#FDE7F3] shadow-[0_22px_55px_rgba(15,23,42,0.18)] sm:h-80">
                        <Image
                          src={training.image}
                          alt="Ambiance salon RR COIFFURE pour la formation professionnelle"
                          fill
                          priority
                          className="object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-white">
                          <span className="rounded-full bg-black/35 px-3 py-1">
                            {training.duration}
                          </span>
                          <span className="rounded-full bg-black/35 px-3 py-1 font-semibold">
                            {training.price}
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-[#FFF7FB] p-4 text-sm text-[#7b4256] ring-1 ring-[#F9C3DF]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                          Parcours complet
                        </p>
                        <p className="mt-1 text-lg font-semibold text-[#2b1019]">
                          {training.price}
                        </p>
                        <p className="mt-1 text-[12px] leading-relaxed text-[#a0526e]">
                          Les dates et modalités exactes (acomptes, paiements)
                          sont confirmées directement avec le salon RR COIFFURE.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* PARCOURS EN 3 ÉTAPES */}
              <motion.section
                id="parcours"
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="rounded-3xl bg-white/95 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] ring-1 ring-[#F9E0EC] sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EC4899]">
                    Votre parcours en 3 étapes
                  </p>
                  <div className="mt-4 grid gap-4 text-[13px] text-[#7b4256] sm:grid-cols-3">
                    <div>
                      <p className="text-sm font-semibold text-[#2b1019]">
                        1. Avant la formation
                      </p>
                      <p className="mt-1">
                        Échange avec le salon, diagnostic de votre niveau et
                        choix du format (présentiel ou vidéo).
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2b1019]">
                        2. Pendant les 40 h
                      </p>
                      <p className="mt-1">
                        Modules progressifs, corrections sur vos gestes et
                        cas concrets inspirés du salon.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2b1019]">
                        3. Après le parcours
                      </p>
                      <p className="mt-1">
                        Licence RR COIFFURE, prestations plus sûres et base
                        solide pour structurer votre activité.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* MODES DE FORMATION */}
              <motion.section
                id="modes"
                aria-labelledby="modes-title"
                className="scroll-mt-32 rounded-4xl bg-[#FDF2F8]/95 p-6 shadow-[0_20px_55px_rgba(190,24,93,0.16)] ring-1 ring-[#F9A8D4]/80 sm:p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2
                      id="modes-title"
                      className="text-3xl font-extrabold tracking-tight text-[#2b1019] md:text-4xl"
                    >
                      Deux modes de formation, un même diplôme
                    </h2>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#7b4256] sm:text-[15px]">
                      Présentiel ou vidéo à distance&nbsp;: vous choisissez le
                      format qui s’adapte à votre emploi du temps. La qualité du
                      contenu et l’exigence de la licence restent identiques.
                    </p>
                  </div>
                  <p className="text-[12px] text-[#a0526e] sm:text-[13px]">
                    Vous commencez là où vous êtes aujourd’hui, avec un format
                    compatible avec votre vie actuelle.
                  </p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {modes.map((mode, index) => (
                    <motion.article
                      key={mode.type}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      className={[
                        "group relative overflow-hidden rounded-3xl border px-4 py-4 transition-all duration-200 sm:px-5 sm:py-5",
                        mode.highlight
                          ? "border-[#EC4899]/80 bg-white/95 shadow-[0_22px_55px_rgba(190,24,93,0.26)] hover:-translate-y-1"
                          : "border-[#F9A8D4]/80 bg-[#FDE7F3]/90 shadow-[0_16px_42px_rgba(190,24,93,0.18)] hover:-translate-y-0.5",
                      ].join(" ")}
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FDE7F3] via-[#F9A8D4] to-[#F472B6] opacity-0 blur-2xl transition-opacity duration-200 group-hover:opacity-25" />
                      <div className="relative space-y-2 text-[#7b4256]">
                        {mode.highlight && (
                          <span className="mb-2 inline-flex items-center rounded-full bg-[#FDF2F8] px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#EC4899] ring-1 ring-[#F9A8D4]">
                            Format le plus complet
                          </span>
                        )}

                        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                          {mode.type}
                        </span>
                        <h3 className="mt-1 text-sm font-semibold text-[#2b1019] sm:text-[15px]">
                          {mode.title}
                        </h3>
                        <p className="mt-1 text-xs text-[#a0526e] sm:text-[13px]">
                          {mode.place}
                        </p>

                        <ul className="mt-3 space-y-1.5 text-xs leading-relaxed sm:text-[13px]">
                          {mode.advantages.map((advantage) => (
                            <li key={advantage} className="flex gap-2">
                              <CheckIcon />
                              <span>{advantage}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="mt-3 text-[11px] leading-relaxed text-[#a0526e]">
                          {mode.priceNote}
                        </p>
                        <p className="mt-1 text-[11px] font-semibold text-[#2b1019]">
                          {mode.licenceNote}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.section>

              {/* PROGRAMME 40H – TIMELINE */}
              <motion.section
                id="programme"
                aria-labelledby="programme-title"
                className="scroll-mt-32 rounded-4xl bg-white/95 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-[#F9E0EC] sm:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2
                      id="programme-title"
                      className="text-2xl font-semibold tracking-tight text-[#1F1020] md:text-3xl"
                    >
                      Programme détaillé · 40 h
                    </h2>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#7b4256] sm:text-[15px]">
                      9 modules progressifs pour comprendre ce que vous faites
                      sur le cheveu et sécuriser chaque prestation.
                    </p>
                  </div>
                  <p className="text-[12px] text-[#a0526e] sm:text-[13px]">
                    Environ 6 jours de formation guidée.
                  </p>
                </div>

                <div className="mt-6 space-y-5">
                  {/* Jour 1 */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Jour 1
                    </p>
                    <div className="mt-2 space-y-2 border-l border-[#F3C4DD] pl-4">
                      {[modules[0], modules[2]].map((m) => (
                        <div key={m.title}>
                          <p className="text-sm font-semibold text-[#2b1019]">
                            {m.title}{" "}
                            <span className="font-normal text-[#EC4899]">
                              · {m.hours}
                            </span>
                          </p>
                          <p className="text-[12px] leading-relaxed text-[#7b4256]">
                            {m.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Jour 2 */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Jour 2
                    </p>
                    <div className="mt-2 space-y-2 border-l border-[#F3C4DD] pl-4">
                      {[modules[1]].map((m) => (
                        <div key={m.title}>
                          <p className="text-sm font-semibold text-[#2b1019]">
                            {m.title}{" "}
                            <span className="font-normal text-[#EC4899]">
                              · {m.hours}
                            </span>
                          </p>
                          <p className="text-[12px] leading-relaxed text-[#7b4256]">
                            {m.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Jour 3 */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Jour 3
                    </p>
                    <div className="mt-2 space-y-2 border-l border-[#F3C4DD] pl-4">
                      {[modules[3]].map((m) => (
                        <div key={m.title}>
                          <p className="text-sm font-semibold text-[#2b1019]">
                            {m.title}{" "}
                            <span className="font-normal text-[#EC4899]">
                              · {m.hours}
                            </span>
                          </p>
                          <p className="text-[12px] leading-relaxed text-[#7b4256]">
                            {m.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Jour 4 */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Jour 4
                    </p>
                    <div className="mt-2 space-y-2 border-l border-[#F3C4DD] pl-4">
                      {[modules[4]].map((m) => (
                        <div key={m.title}>
                          <p className="text-sm font-semibold text-[#2b1019]">
                            {m.title}{" "}
                            <span className="font-normal text-[#EC4899]">
                              · {m.hours}
                            </span>
                          </p>
                          <p className="text-[12px] leading-relaxed text-[#7b4256]">
                            {m.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Jour 5 */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Jour 5
                    </p>
                    <div className="mt-2 space-y-2 border-l border-[#F3C4DD] pl-4">
                      {[modules[5]].map((m) => (
                        <div key={m.title}>
                          <p className="text-sm font-semibold text-[#2b1019]">
                            {m.title}{" "}
                            <span className="font-normal text-[#EC4899]">
                              · {m.hours}
                            </span>
                          </p>
                          <p className="text-[12px] leading-relaxed text-[#7b4256]">
                            {m.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Jour 6 */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Jour 6
                    </p>
                    <div className="mt-2 space-y-2 border-l border-[#F3C4DD] pl-4">
                      {[modules[6], modules[7], modules[8]].map((m) => (
                        <div key={m.title}>
                          <p className="text-sm font-semibold text-[#2b1019]">
                            {m.title}{" "}
                            <span className="font-normal text-[#EC4899]">
                              · {m.hours}
                            </span>
                          </p>
                          <p className="text-[12px] leading-relaxed text-[#7b4256]">
                            {m.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-6 max-w-prose text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                  Cette formation est{" "}
                  <span className="font-semibold">diplômante</span>. La licence
                  professionnelle RR COIFFURE est délivrée à l’issue des 40 h,
                  après validation de votre niveau via les évaluations prévues,
                  en présentiel comme en vidéo.
                </p>
              </motion.section>

              {/* LA FORMATRICE + TÉMOIGNAGE */}
              <motion.section
                id="formatrice"
                className="scroll-mt-32 rounded-4xl bg-white/95 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-[#F9E0EC] sm:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EC4899]">
                      La formatrice
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#1F1020]">
                      Une formatrice de salon, pas une école théorique
                    </h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#7b4256]">
                      RR COIFFURE forme chaque jour de vraies clientes en salon.
                      La formation reprend les gestes, protocoles et exigences
                      utilisés au quotidien, loin des cas d’école trop
                      théoriques.
                    </p>
                    <p className="mt-2 text-[12px] text-[#a0526e]">
                      Vous apprenez avec une professionnelle qui sait ce qui
                      fonctionne réellement dans la durée, sur différents types
                      de cheveux et de profils de clientes.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="relative h-40 w-full overflow-hidden rounded-3xl bg-[#FDE7F3] shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                      {/* Remplacez ce bloc par une vraie image portrait si disponible */}
                      <div className="absolute inset-0 flex items-center justify-center text-[12px] text-[#a0526e]">
                        Portrait de la formatrice RR COIFFURE
                      </div>
                    </div>
                    <div className="rounded-2xl bg-[#FFF7FB] p-3 text-[12px] text-[#7b4256] ring-1 ring-[#F9C3DF]">
                      <p className="italic">
                        « Après la formation, j’ai enfin osé poser mes prix et
                        arrêter de douter sur chaque diagnostic. Mes clientes le
                        ressentent immédiatement. »
                      </p>
                      <p className="mt-1 text-[11px] font-semibold text-[#2b1019]">
                        — Aïcha, coiffeuse en reconversion
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* APRÈS 40H */}
              <motion.section
                id="apres-formation"
                aria-labelledby="apres-formation-title"
                className="scroll-mt-32 rounded-4xl bg-[#FDF2F8]/95 p-6 shadow-[0_18px_45px_rgba(190,24,93,0.16)] ring-1 ring-[#F9A8D4]/80 sm:p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2
                  id="apres-formation-title"
                  className="text-3xl font-extrabold tracking-tight text-[#2b1019] md:text-4xl"
                >
                  Après 40 h, vous saurez…
                </h2>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                  Concrètement, après ce parcours
                </p>
                <div className="mt-4 grid gap-4 text-sm text-[#7b4256] sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/95 px-4 py-4 shadow-[0_16px_40px_rgba(190,24,93,0.16)] ring-1 ring-[#F9A8D4]/70 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(190,24,93,0.26)]">
                    <p className="text-sm font-semibold text-[#2b1019]">
                      Travailler en sécurité
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                      Poser un diagnostic fiable, choisir une technique adaptée
                      et éviter les erreurs qui abîment la fibre ou créent des
                      insatisfactions chez la cliente.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/95 px-4 py-4 shadow-[0_16px_40px_rgba(190,24,93,0.16)] ring-1 ring-[#F9A8D4]/70 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(190,24,93,0.26)]">
                    <p className="text-sm font-semibold text-[#2b1019]">
                      Proposer des prestations complètes
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                      Construire un rendez-vous fluide, du premier contact aux
                      conseils de fin de prestation, pour donner envie aux
                      clientes de revenir.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/95 px-4 py-4 shadow-[0_16px_40px_rgba(190,24,93,0.16)] ring-1 ring-[#F9A8D4]/70 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(190,24,93,0.26)]">
                    <p className="text-sm font-semibold text-[#2b1019]">
                      Valoriser votre activité
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                      Poser vos prix, mettre en avant vos compétences et
                      utiliser votre licence RR COIFFURE comme gage de sérieux
                      auprès de vos clientes et partenaires.
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-[#a0526e]">
                  Plusieurs coiffeur·ses ont déjà suivi ce parcours pour
                  structurer leurs bases, gagner en confiance et sécuriser leurs
                  prestations au quotidien.
                </p>
              </motion.section>

              {/* CE QUE VOUS OBTENEZ */}
              <motion.section
                id="avantages"
                className="scroll-mt-32 rounded-4xl bg-white/95 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-[#F9E0EC] sm:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold tracking-tight text-[#1F1020] md:text-3xl">
                  Concrètement, avec ces 40 h, vous repartez avec…
                </h2>
                <div className="mt-4 grid gap-4 text-[13px] text-[#7b4256] sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="flex gap-2">
                      <CheckIcon />
                      <span>Une licence RR COIFFURE à votre nom.</span>
                    </p>
                    <p className="flex gap-2">
                      <CheckIcon />
                      <span>
                        Des protocoles clairs pour les prestations essentielles
                        (diagnostic, couleur, mèches, soins, boucles).
                      </span>
                    </p>
                    <p className="flex gap-2">
                      <CheckIcon />
                      <span>
                        Des repères concrets pour adapter vos gestes aux
                        différents types de cheveux.
                      </span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex gap-2">
                      <CheckIcon />
                      <span>
                        Une base pour poser vos prix avec confiance, sans vous
                        sous-évaluer.
                      </span>
                    </p>
                    <p className="flex gap-2">
                      <CheckIcon />
                      <span>
                        Un langage professionnel pour rassurer vos clientes et
                        expliquer vos choix techniques.
                      </span>
                    </p>
                    <p className="flex gap-2">
                      <CheckIcon />
                      <span>
                        Une vision plus claire de votre activité sur 6 à 12
                        mois.
                      </span>
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* INFOS PRATIQUES */}
              <motion.section
                id="infos-pratiques"
                aria-labelledby="infos-pratiques-title"
                className="scroll-mt-32 rounded-4xl bg-[#FDE7F3]/95 p-6 shadow-[0_20px_55px_rgba(190,24,93,0.16)] ring-1 ring-[#F9A8D4]/80 sm:p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2
                      id="infos-pratiques-title"
                      className="text-3xl font-extrabold tracking-tight text-[#2b1019] md:text-4xl"
                    >
                      Informations pratiques
                    </h2>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#7b4256] sm:text-[15px]">
                      Les détails (dates, horaires, paiements) sont finalisés
                      directement avec le salon pour s’adapter à votre
                      situation.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 text-xs text-[#7b4256] sm:grid-cols-3 sm:text-[13px]">
                  <div className="rounded-2xl bg-white/95 px-4 py-4 shadow-[0_16px_40px_rgba(190,24,93,0.16)] ring-1 ring-[#F9A8D4]/70 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Lieu & format
                    </p>
                    <ul className="mt-2 space-y-1.5 leading-relaxed">
                      <li>Salon RR COIFFURE – Lausanne.</li>
                      <li>Ou formation vidéo à distance, depuis chez vous.</li>
                      <li>Groupes limités pour un accompagnement réel.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-white/95 px-4 py-4 shadow-[0_16px_40px_rgba(190,24,93,0.16)] ring-1 ring-[#F9A8D4]/70 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Dates & horaires
                    </p>
                    <ul className="mt-2 space-y-1.5 leading-relaxed">
                      <li>Dates communiquées directement par le salon.</li>
                      <li>Parcours sur 6 jours consécutifs ou étalés.</li>
                      <li>Horaires pensés pour la pratique en salon.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-white/95 px-4 py-4 shadow-[0_16px_40px_rgba(190,24,93,0.16)] ring-1 ring-[#F9A8D4]/70 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Inscription
                    </p>
                    <ul className="mt-2 space-y-1.5 leading-relaxed">
                      <li>Message privé sur Instagram au salon RR COIFFURE.</li>
                      <li>Ou passage au salon pour échanger en direct.</li>
                      <li>
                        Acompte et paiement en plusieurs fois possibles selon
                        les cas.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* BANDEAU INSTAGRAM */}
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#EC4899] p-4 text-xs text-white shadow-[0_24px_65px_rgba(190,24,93,0.45)] sm:flex sm:items-center sm:justify-between sm:text-[13px]">
                  <div className="mb-3 flex items-start gap-3 sm:mb-0">
                    <div className="mt-0.5 rounded-full bg-white/15 p-2">
                      <InstagramIcon />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold sm:text-sm">
                        Une question avant de réserver votre place ?
                      </p>
                      <p className="mt-1 max-w-md text-[11px] leading-relaxed text-white/90 sm:text-[12px]">
                        Écrivez au salon RR COIFFURE sur Instagram pour vérifier
                        les prochaines dates, les places disponibles et les
                        options de paiement. Un message suffit pour commencer la
                        discussion.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="https://www.instagram.com/rr.coiffure/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[12px] font-semibold tracking-wide text-[#EC4899] shadow-[0_14px_36px_rgba(15,23,42,0.32)] transition-colors hover:bg-[#FDF2F8] sm:text-[13px]"
                  >
                    Poser une question sur Instagram
                  </Link>
                </div>
              </motion.section>

              {/* FAQ */}
              <motion.section
                id="faq"
                aria-labelledby="faq-title"
                className="scroll-mt-32 space-y-5 text-left"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="text-center sm:text-left">
                  <h2
                    id="faq-title"
                    className="text-3xl font-extrabold tracking-tight text-[#2b1019] md:text-4xl"
                  >
                    Questions fréquentes
                  </h2>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#7b4256] sm:text-[15px]">
                    Si vous hésitez encore, ces réponses vous aideront à y voir
                    plus clair. Et si un point reste flou, le plus simple est
                    toujours d’écrire directement au salon.
                  </p>
                </div>

                <div className="space-y-3">
                  {faqs.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-3xl bg-white/95 px-4 py-3.5 text-xs text-[#7b4256] shadow-[0_18px_45px_rgba(190,24,93,0.16)] ring-1 ring-[#F9A8D4]/80 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 sm:text-[13px]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
                        <span className="text-sm font-semibold leading-snug text-[#2b1019] sm:text-[15px]">
                          {item.q}
                        </span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE7F3] text-lg text-[#EC4899] ring-1 ring-[#F9A8D4] transition-transform duration-150 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-2 max-w-prose text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </motion.section>

              {/* CTA FINAL */}
              <motion.section
                className="pb-4 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="relative inline-flex max-w-2xl flex-col items-center gap-3 overflow-hidden rounded-4xl bg-gradient-to-r from-[#F9A8D4] via-[#EC4899] to-[#F472B6] px-6 py-7 text-white shadow-[0_28px_80px_rgba(190,24,93,0.6)] sm:px-10 sm:py-8">
                  <div className="pointer-events-none absolute inset-0 opacity-50 blur-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),transparent_55%)]" />
                  </div>
                  <div className="relative space-y-3">
                    <p className="text-sm font-semibold tracking-wide sm:text-[15px]">
                      Prête à valider votre licence RR COIFFURE ?
                    </p>
                    <p className="max-w-xl text-[12px] leading-relaxed text-white/92 sm:text-[13px]">
                      Un premier échange avec le salon permet de vérifier si ce
                      parcours de 40 h correspond à votre niveau, à votre
                      projet et à votre agenda. Vous obtenez les prochaines
                      dates, les tarifs exacts et les modalités de paiement.
                    </p>
                    <Link
                      href="https://www.instagram.com/rr.coiffure/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold tracking-wide text-[#EC4899] shadow-[0_18px_48px_rgba(15,23,42,0.4)] transition-colors hover:bg-[#FDF2F8]"
                    >
                      Demander une place pour la formation 40 h
                    </Link>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>

          {/* BARRE CTA MOBILE */}
          <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#F9A8D4]/80 bg-[#FDF2F8]/98 px-4 py-2 text-[#2b1019] shadow-[0_-18px_40px_rgba(190,24,93,0.35)] backdrop-blur-md sm:hidden">
            <div className="mb-1 flex items-center justify-between text-[11px] text-[#7b4256]">
              <span>Licence professionnelle incluse</span>
              <span>{training.duration}</span>
              <span className="font-semibold text-[#EC4899]">
                {training.price}
              </span>
            </div>
            <Link
              href="https://www.instagram.com/rr.coiffure/"
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center justify-center rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#EC4899] px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-[0_12px_32px_rgba(190,24,93,0.55)]"
            >
              Demander une place pour la formation 40 h
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
