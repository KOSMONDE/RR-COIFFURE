"use client"

import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"
import { useActiveSection } from "@/hooks/useActiveSection"

const training = {
  title: "Parcours Coiffeur Professionnel – Licence 40 h",
  duration: "40 h sur 6 jours",
  level: "Débutant à avancé",
  price: "1 490 CHF",
  image:
    "/formations/u6737299833_luxurious_hair_salon_aesthetic_soft_pink_gradient_fdc04115-72a2-4501-9a4e-bd6134462c93_1.png",
  desc: "Une formation diplômante de 40 h pour obtenir une licence professionnelle RR COIFFURE. Le programme couvre la théorie, les techniques modernes de salon et les bases de la gestion pour exercer en toute confiance.",
  badge: "Formation diplômante",
}

const modules = [
  {
    title: "Anatomie et physiologie capillaire",
    hours: "3 h",
    desc: "Structure du cheveu, cuir chevelu, kératine, couches internes. Bases indispensables avant les pratiques.",
  },
  {
    title: "Coiffure et mise en forme",
    hours: "5 h",
    desc: "Brushing, modelage, travail du volume, usage des outils chauffants et finitions professionnelles.",
  },
  {
    title: "Hygiénisation, soins et sécurité",
    hours: "3 h",
    desc: "Protocoles d’hygiène, postes de travail, protection du client et bonnes pratiques en salon.",
  },
  {
    title: "Colorimétrie et techniques de mèches",
    hours: "6 h",
    desc: "Bases de colorimétrie, diagnostics, balayages, mèches, contouring et patines.",
  },
  {
    title: "Chimie et traitements (4 techniques)",
    hours: "8 h",
    desc: "Coloration, décoloration, défrisage, lissages. Réactions chimiques et pratiques encadrées.",
  },
  {
    title: "Allongement et définition des boucles",
    hours: "6 h",
    desc: "Techniques adaptées aux cheveux texturés : définition, réduction des frisottis et allongement.",
  },
  {
    title: "Accueil et service client",
    hours: "3 h",
    desc: "Posture professionnelle, écoute active, diagnostic personnalisé et fidélisation.",
  },
  {
    title: "Marketing et notions de gestion",
    hours: "4 h",
    desc: "Bases de communication, image de marque, prix, fidélisation, réseaux sociaux et gestion.",
  },
  {
    title: "(Bonus) Module Tresseuse",
    hours: "2 h",
    desc: "Initiation aux tresses modernes : séparations, box braids et finitions.",
  },
]

const modes = [
  {
    type: "Présentiel",
    highlight: true,
    title: "Formation au salon RR COIFFURE",
    place: "Au salon – Lausanne",
    advantages: [
      "Pratique directe sur modèles",
      "Corrections en temps réel",
      "Immersion dans l’ambiance du salon",
    ],
    priceNote: "Tarif indicatif : 1 490 CHF le parcours complet.",
    licenceNote:
      "Licence professionnelle RR COIFFURE délivrée après validation des compétences en fin de formation.",
  },
  {
    type: "À distance",
    highlight: false,
    title: "Formation vidéo en ligne",
    place: "Suivi depuis chez vous",
    advantages: [
      "Accès aux vidéos de cours",
      "Possibilité de revoir les modules en illimité pendant la durée d’accès",
      "Idéal pour les personnes éloignées ou en reconversion",
    ],
    priceNote:
      "Tarif adapté pour la version vidéo (à définir avec le salon).",
    licenceNote:
      "Licence professionnelle RR COIFFURE délivrée après validation des évaluations prévues en fin de parcours.",
  },
]

const faqs = [
  {
    q: "À qui s’adresse ce parcours de 40 h ?",
    a: "Aux personnes débutantes ou déjà en salon qui souhaitent structurer leurs connaissances, sécuriser leurs pratiques et obtenir une licence professionnelle RR COIFFURE.",
  },
  {
    q: "Faut-il déjà savoir coiffer pour s’inscrire ?",
    a: "Non, le parcours part des bases et monte en complexité. L’important est d’être motivé, sérieux et disponible sur la durée de la formation.",
  },
  {
    q: "La licence est-elle vraiment délivrée en vidéo à distance ?",
    a: "Oui, sous réserve de suivre l’ensemble du programme, de rendre les évaluations demandées et de valider les compétences évaluées à la fin du parcours.",
  },
  {
    q: "Comment connaître les prochaines dates et les modalités de paiement ?",
    a: "Les dates et les modalités (acompte, paiement en plusieurs fois, etc.) sont partagées directement par le salon. Le plus simple : écrire sur Instagram ou passer au salon.",
  },
]

const sideNavItems = [
  { id: "intro", label: "Présentation" },
  { id: "modes", label: "Modes de formation" },
  { id: "programme", label: "Programme 40 h" },
  { id: "apres-formation", label: "Après 40 h" },
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

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-[#ffe6f5]/65 scroll-smooth">
      {/* Halos globaux */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute left-[-4rem] top-10 h-52 w-52 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute right-[-3rem] bottom-10 h-52 w-52 rounded-full bg-[#EC4899]/35 blur-3xl" />
      </div>

      <SiteHeader />

      <main id="main-content" className="flex-1 py-10 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* MINI NAV MOBILE */}
          <nav
            aria-label="Navigation de la formation (mobile)"
            className="mb-5 block lg:hidden"
          >
            <div className="overflow-x-auto">
              <div className="inline-flex min-w-full gap-2 rounded-full bg-white/90 px-2 py-1 text-xs text-[#7b4256] shadow-md">
                {sideNavItems.map((item) => {
                  const isActive = activeId === item.id
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={[
                        "whitespace-nowrap rounded-full px-3 py-1.5 transition-colors",
                        isActive
                          ? "bg-[#fdf2f8] font-semibold text-[#EC4899]"
                          : "text-[#7b4256] hover:bg-[#fff1f8]",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </nav>

          {/* GRID AVEC MENU LATERAL (DESKTOP) */}
          <div className="mt-2 grid gap-8 lg:grid-cols-[210px_minmax(0,1fr)]">
            {/* MENU LATERAL GAUCHE */}
            <aside className="hidden lg:block">
              <nav
                aria-label="Navigation de la formation"
                className="sticky top-28"
              >
                <div className="rounded-3xl bg-white/90 p-3 shadow-lg ring-1 ring-pink-100/80">
                  <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">
                    Parcours 40 h
                  </p>
                  <ul className="space-y-1.5 text-sm text-[#7b4256]">
                    {sideNavItems.map((item) => {
                      const isActive = activeId === item.id
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={[
                              "flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors",
                              isActive
                                ? "bg-[#fdf2f8] font-semibold text-[#EC4899]"
                                : "hover:bg-[#fff1f8] hover:text-[#EC4899]",
                            ].join(" ")}
                          >
                            <span
                              className={[
                                "h-1.5 w-1.5 rounded-full transition-opacity",
                                isActive
                                  ? "bg-[#EC4899] opacity-100"
                                  : "bg-[#EC4899] opacity-40",
                              ].join(" ")}
                            />
                            <span>{item.label}</span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </nav>
            </aside>

            {/* CONTENU PRINCIPAL DROITE */}
            <div className="space-y-12 sm:space-y-14">
              {/* Hero + carte résumé */}
              <section
                id="intro"
                aria-labelledby="formation-intro"
                className="scroll-mt-32"
              >
                <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                  {/* Texte gauche */}
                  <div className="text-center lg:text-left">
                    <span className="inline-flex items-center rounded-full bg-[#FFE4F4] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#EC4899]">
                      Formation diplômante RR COIFFURE
                    </span>

                    <h1
                      id="formation-intro"
                      className="mt-4 text-4xl font-extrabold tracking-tight text-[#2b1019] sm:text-[2.8rem] sm:leading-[1.05]"
                    >
                      Parcours professionnel 40 h
                    </h1>

                    <p className="mt-3 max-w-prose text-sm leading-relaxed text-[#7b4256] sm:text-[15px]">
                      {training.desc}
                    </p>

                    <p className="mt-2 max-w-prose text-xs leading-relaxed text-[#a0526e] sm:text-[13px]">
                      Une seule formation, deux formats&nbsp;:{" "}
                      <span className="font-semibold text-[#2b1019]">
                        au salon à Lausanne
                      </span>{" "}
                      ou{" "}
                      <span className="font-semibold text-[#2b1019]">
                        en vidéos à distance
                      </span>
                      , avec le même contenu et la même licence professionnelle.
                    </p>

                    {/* Infos synthétiques premium (sans icônes) */}
                    <div className="mt-6 grid gap-3 text-xs text-[#7b4256] sm:grid-cols-3 sm:text-[13px]">
                      <div className="flex h-full flex-col justify-between rounded-2xl border border-pink-100 bg-white/95 px-4 py-3.5 shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
                        <div className="space-y-1">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a0526e]">
                            Durée
                          </p>
                          <p className="text-sm font-medium text-[#2b1019]">
                            {training.duration}
                          </p>
                        </div>
                        <p className="mt-2 text-[11px] text-[#a0526e]">
                          Réparties sur 6 jours pour ancrer les gestes.
                        </p>
                      </div>

                      <div className="flex h-full flex-col justify-between rounded-2xl border border-pink-100 bg-white/95 px-4 py-3.5 shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
                        <div className="space-y-1">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a0526e]">
                            Niveau
                          </p>
                          <p className="text-sm font-medium text-[#2b1019]">
                            {training.level}
                          </p>
                        </div>
                        <p className="mt-2 text-[11px] text-[#a0526e]">
                          Le programme part des bases et monte en niveau.
                        </p>
                      </div>

                      <div className="flex h-full flex-col justify-between rounded-2xl border border-pink-100 bg-white/95 px-4 py-3.5 shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
                        <div className="space-y-1">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a0526e]">
                            Licence incluse
                          </p>
                          <p className="text-sm font-medium text-[#2b1019]">
                            Diplôme RR COIFFURE
                          </p>
                        </div>
                        <p className="mt-2 text-[11px] text-[#a0526e]">
                          Délivrée après validation des compétences finales.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Visuel + résumé rapide droite */}
                  <div className="space-y-4">
                    <div className="relative h-60 w-full overflow-hidden rounded-3xl bg-[#FDF2F8] shadow-[0_22px_50px_rgba(236,72,153,0.32)] sm:h-72">
                      <Image
                        src={training.image}
                        alt={training.title}
                        fill
                        priority
                        className="object-cover"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/92 px-4 py-1 text-[11px] font-semibold tracking-wide text-[#EC4899] backdrop-blur">
                        {training.badge}
                      </span>
                      <span className="absolute bottom-4 right-4 rounded-full bg-black/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                        Licence professionnelle RR COIFFURE
                      </span>
                    </div>

                    <div className="rounded-3xl bg-white/95 p-4 text-sm text-[#7b4256] shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                            Parcours complet
                          </p>
                          <p className="mt-1 text-lg font-semibold text-[#2b1019]">
                            {training.price}
                          </p>
                        </div>
                        <p className="max-w-[190px] text-[11px] leading-relaxed text-[#a0526e]">
                          Les dates, facilités de paiement et options sont
                          confirmées directement avec le salon.
                        </p>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-xs sm:text-[13px]">
                        <li className="flex gap-2">
                          <CheckIcon />
                          <span>
                            40 h structurées sur 6 jours, pensées pour la
                            pratique salon.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <CheckIcon />
                          <span>9 modules progressifs, de la base au geste.</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckIcon />
                          <span>
                            Licence RR COIFFURE délivrée après validation.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <CheckIcon />
                          <span>Suivi humain et corrections personnalisées.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* À qui s’adresse + garanties */}
                <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                  <div className="rounded-3xl bg-white/92 px-5 py-5 text-left shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                    <h2 className="text-[15px] font-semibold text-[#2b1019] sm:text-base">
                      À qui s’adresse ce parcours ?
                    </h2>
                    <ul className="mt-3 space-y-2.5 text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                      <li className="flex gap-2">
                        <CheckIcon />
                        <span>
                          Personnes qui souhaitent démarrer une activité de
                          coiffeur ou coiffeuse avec une base technique solide.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckIcon />
                        <span>
                          Professionnels déjà en pratique qui veulent sécuriser
                          leurs techniques et obtenir une licence reconnue par
                          RR COIFFURE.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckIcon />
                        <span>
                          Personnes en reconversion attirées par le métier et
                          qui cherchent une formation courte mais complète.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-3xl bg-white/96 px-5 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EC4899]">
                      Garanties du parcours
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                      Des engagements clairs pour une formation premium, en
                      présentiel comme en vidéo.
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-3 text-center text-[11px] text-[#7b4256] sm:text-[13px]">
                      <div className="flex flex-col items-center gap-1">
                        <span className="h-1.5 w-8 rounded-full bg-[#EC4899]/60" />
                        <span className="font-medium text-[#2b1019]">
                          Licence incluse
                        </span>
                        <span className="text-[11px] text-[#a0526e]">
                          Remise après validation du parcours complet.
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="h-1.5 w-8 rounded-full bg-[#EC4899]/40" />
                        <span className="font-medium text-[#2b1019]">
                          9 modules
                        </span>
                        <span className="text-[11px] text-[#a0526e]">
                          Programme construit pour la pratique réelle.
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="h-1.5 w-8 rounded-full bg-[#EC4899]/30" />
                        <span className="font-medium text-[#2b1019]">
                          Suivi dédié
                        </span>
                        <span className="text-[11px] text-[#a0526e]">
                          Corrections personnalisées et accompagnement.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Modes de formation */}
              <section
                id="modes"
                aria-labelledby="modes-title"
                className="scroll-mt-32 rounded-3xl border border-pink-100/80 bg-white/96 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)] sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2
                      id="modes-title"
                      className="text-2xl font-bold tracking-tight text-[#2b1019] sm:text-[1.75rem]"
                    >
                      Deux modes de formation
                    </h2>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#7b4256] sm:text-[15px]">
                      Choisissez le format qui correspond le mieux à votre
                      organisation. Le contenu du programme reste identique.
                    </p>
                  </div>
                  <p className="text-[12px] text-[#a0526e] sm:text-[13px]">
                    Présentiel et vidéo{" "}
                    <span className="font-semibold">
                      sur le même programme
                    </span>
                    .
                  </p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {modes.map((mode, index) => (
                    <article
                      key={index}
                      className={[
                        "group rounded-2xl border px-4 py-4.5 transition-all duration-200",
                        mode.highlight
                          ? "border-[#EC4899]/70 bg-white shadow-[0_18px_40px_rgba(236,72,153,0.22)] hover:-translate-y-1"
                          : "border-pink-100 bg-[#FFF7FB]/95 shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:-translate-y-0.5",
                      ].join(" ")}
                    >
                      {mode.highlight && (
                        <span className="mb-2 inline-flex items-center rounded-full bg-[#FEF2F8] px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                          Format recommandé
                        </span>
                      )}

                      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                        {mode.type}
                      </span>
                      <h3 className="mt-1 text-sm font-semibold text-[#2b1019] sm:text-[15px]">
                        {mode.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#7b4256] sm:text-[13px]">
                        {mode.place}
                      </p>

                      <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                        {mode.advantages.map((adv, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckIcon />
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="mt-3 text-[11px] leading-relaxed text-[#a0526e]">
                        {mode.priceNote}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold text-[#3a1020]">
                        {mode.licenceNote}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Programme détaillé */}
              <section
                id="programme"
                aria-labelledby="programme-title"
                className="scroll-mt-32 rounded-3xl border border-pink-100/80 bg-white/96 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)] sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2
                      id="programme-title"
                      className="text-2xl font-bold tracking-tight text-[#2b1019] sm:text-[1.75rem]"
                    >
                      Programme détaillé (40 h)
                    </h2>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#7b4256] sm:text-[15px]">
                      9 modules complémentaires, construits pour un apprentissage
                      logique et efficace, orienté vers la pratique réelle en
                      salon.
                    </p>
                  </div>
                  <div className="text-right text-[12px] text-[#a0526e] sm:text-[13px]">
                    <p>
                      <span className="font-semibold">40 h</span> de formation
                    </p>
                    <p>Environ 6 h 40 par jour sur 6 jours.</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <ol className="relative space-y-4 border-l border-pink-100 pl-4">
                    {modules.slice(0, Math.ceil(modules.length / 2)).map(
                      (m, index) => (
                        <li key={index} className="relative pl-1.5">
                          <span className="absolute -left-[9px] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-[#EC4899] to-[#A855F7]" />
                          <p className="text-sm font-semibold text-[#2b1019]">
                            {m.title}{" "}
                            <span className="font-normal text-[#EC4899]">
                              · {m.hours}
                            </span>
                          </p>
                          <p className="text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                            {m.desc}
                          </p>
                        </li>
                      ),
                    )}
                  </ol>

                  <ol className="relative space-y-4 border-l border-pink-100 pl-4">
                    {modules.slice(Math.ceil(modules.length / 2)).map(
                      (m, index) => (
                        <li key={index} className="relative pl-1.5">
                          <span className="absolute -left-[9px] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-[#EC4899] to-[#A855F7]" />
                          <p className="text-sm font-semibold text-[#2b1019]">
                            {m.title}{" "}
                            <span className="font-normal text-[#EC4899]">
                              · {m.hours}
                            </span>
                          </p>
                          <p className="text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                            {m.desc}
                          </p>
                        </li>
                      ),
                    )}
                  </ol>
                </div>

                <p className="mt-6 max-w-prose text-xs leading-relaxed text-[#7b4256] sm:text-[13px]">
                  Cette formation est{" "}
                  <span className="font-semibold">diplômante</span>. La licence
                  professionnelle RR COIFFURE est délivrée à l’issue des 40 h,
                  sous réserve de validation des compétences évaluées en fin de
                  parcours, en présentiel comme en vidéo.
                </p>
              </section>

              {/* Après 40 h */}
              <section
                id="apres-formation"
                aria-labelledby="apres-formation-title"
                className="scroll-mt-32 rounded-3xl bg-white/96 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.10)] sm:p-8"
              >
                <h2
                  id="apres-formation-title"
                  className="text-2xl font-bold tracking-tight text-[#2b1019] sm:text-[1.75rem]"
                >
                  Après 40 h, vous saurez…
                </h2>
                <div className="mt-4 grid gap-4 text-sm text-[#7b4256] sm:grid-cols-3">
                  <div className="rounded-2xl bg-[#FFF7FB] px-4 py-4.5">
                    <p className="text-sm font-semibold text-[#2b1019]">
                      Travailler en sécurité
                    </p>
                    <p className="mt-1 text-xs leading-relaxed sm:text-[13px]">
                      Diagnostiquer un cheveu, choisir les bonnes techniques et
                      éviter les erreurs fréquentes qui abîment la fibre.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#FFF7FB] px-4 py-4.5">
                    <p className="text-sm font-semibold text-[#2b1019]">
                      Proposer des prestations complètes
                    </p>
                    <p className="mt-1 text-xs leading-relaxed sm:text-[13px]">
                      Construire un rendez-vous fluide : accueil, diagnostic,
                      prestation, conseils, fidélisation.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#FFF7FB] px-4 py-4.5">
                    <p className="text-sm font-semibold text-[#2b1019]">
                      Valoriser votre activité
                    </p>
                    <p className="mt-1 text-xs leading-relaxed sm:text-[13px]">
                      Poser vos prix, communiquer, présenter votre travail et
                      utiliser votre licence RR COIFFURE comme gage de sérieux.
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-[#a0526e]">
                  Plusieurs coiffeur·ses ont déjà suivi ce parcours pour
                  structurer leurs bases et sécuriser leur pratique en salon.
                </p>
              </section>

              {/* Infos pratiques */}
              <section
                id="infos-pratiques"
                aria-labelledby="infos-pratiques-title"
                className="scroll-mt-32 rounded-3xl border border-pink-100/80 bg-white/96 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)] sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2
                      id="infos-pratiques-title"
                      className="text-2xl font-bold tracking-tight text-[#2b1019] sm:text-[1.75rem]"
                    >
                      Informations pratiques
                    </h2>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#7b4256] sm:text-[15px]">
                      Les détails (dates, horaires, paiements) sont confirmés
                      directement avec le salon.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 text-xs text-[#7b4256] sm:grid-cols-3 sm:text-[13px]">
                  <div className="rounded-2xl bg-[#FFF7FB] px-4 py-4.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Lieu & format
                    </p>
                    <ul className="mt-2 space-y-1.5 leading-relaxed">
                      <li>Salon RR COIFFURE – Lausanne.</li>
                      <li>Ou formation vidéo à distance.</li>
                      <li>Groupes limités pour un meilleur suivi.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-[#FFF7FB] px-4 py-4.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Dates & horaires
                    </p>
                    <ul className="mt-2 space-y-1.5 leading-relaxed">
                      <li>Dates communiquées par le salon.</li>
                      <li>Sur 6 jours consécutifs ou étalés.</li>
                      <li>Horaires adaptés à la pratique en salon.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-[#FFF7FB] px-4 py-4.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EC4899]">
                      Inscription
                    </p>
                    <ul className="mt-2 space-y-1.5 leading-relaxed">
                      <li>Contact direct via Instagram.</li>
                      <li>Ou passage au salon pour en discuter.</li>
                      <li>Acompte et modalités de paiement à définir.</li>
                    </ul>
                  </div>
                </div>

                {/* Bandeau contact Instagram */}
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#ec4899] p-4 text-xs text-white shadow-[0_18px_45px_rgba(236,72,153,0.55)] sm:flex sm:items-center sm:justify-between sm:text-[13px]">
                  <div className="mb-3 flex items-start gap-3 sm:mb-0">
                    <div className="mt-0.5 rounded-full bg-white/12 p-2">
                      <InstagramIcon />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold sm:text-sm">
                        Une question avant de vous inscrire ?
                      </p>
                      <p className="mt-1 max-w-md text-[11px] leading-relaxed text-white/90 sm:text-[12px]">
                        Envoyez un message privé au salon RR COIFFURE sur
                        Instagram pour connaître les prochaines dates, les
                        disponibilités et les modalités de paiement adaptées à
                        votre situation.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="https://www.instagram.com/rr.coiffure/"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[12px] font-semibold tracking-wide text-[#EC4899] shadow-[0_10px_28px_rgba(15,23,42,0.25)] transition-colors hover:bg-[#FDF2F8] sm:text-[13px]"
                  >
                    Poser une question sur Instagram
                  </Link>
                </div>
              </section>

              {/* FAQ */}
              <section
                id="faq"
                aria-labelledby="faq-title"
                className="scroll-mt-32 space-y-5 text-left"
              >
                <div className="text-center sm:text-left">
                  <h2
                    id="faq-title"
                    className="text-2xl font-bold tracking-tight text-[#2b1019] sm:text-[1.75rem]"
                  >
                    Questions fréquentes
                  </h2>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#7b4256] sm:text-[15px]">
                    Si vous avez un doute, il est souvent plus simple d’écrire
                    directement au salon. Voici déjà quelques réponses.
                  </p>
                </div>

                <div className="space-y-3">
                  {faqs.map((item, index) => (
                    <details
                      key={index}
                      className="group rounded-2xl bg-white/96 px-4 py-3.5 text-xs text-[#7b4256] shadow-[0_12px_30px_rgba(15,23,42,0.10)] sm:text-[13px]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
                        <span className="text-sm font-semibold leading-snug text-[#2b1019] sm:text-[15px]">
                          {item.q}
                        </span>
                        <span className="text-lg text-[#EC4899] transition-transform duration-150 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-2 max-w-prose text-xs leading-relaxed sm:text-[13px]">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA final */}
              <section className="pb-4 text-center">
                <div className="inline-flex max-w-2xl flex-col items-center gap-3 rounded-3xl bg-gradient-to-r from-[#F9A8D4] via-[#EC4899] to-[#E879F9] px-6 py-7 text-white shadow-[0_22px_55px_rgba(236,72,153,0.55)] sm:px-10 sm:py-8">
                  <p className="text-sm font-semibold tracking-wide sm:text-[15px]">
                    Prête à valider votre licence professionnelle RR COIFFURE ?
                  </p>
                  <p className="max-w-xl text-[12px] leading-relaxed text-white/92 sm:text-[13px]">
                    Contactez le salon pour connaître les prochaines dates, les
                    modalités d’inscription et les disponibilités en présentiel
                    ou en vidéo. Un premier échange permet de vérifier que la
                    formation correspond à votre projet.
                  </p>
                  <Link
                    href="https://www.instagram.com/rr.coiffure/"
                    target="_blank"
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold tracking-wide text-[#EC4899] shadow-[0_12px_32px_rgba(15,23,42,0.35)] transition-colors hover:bg-[#FDF2F8]"
                  >
                    Demander une place pour la formation 40 h
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* Barre CTA fixe mobile */}
          <div className="fixed inset-x-0 bottom-0 z-30 border-t border-pink-100 bg-white/98 px-4 py-2 shadow-[0_-12px_28px_rgba(15,23,42,0.20)] sm:hidden">
            <div className="mb-1 flex items-center justify-between text-[11px] text-[#7b4256]">
              <span>Licence incluse</span>
              <span>{training.duration}</span>
              <span className="font-semibold text-[#EC4899]">
                {training.price}
              </span>
            </div>
            <Link
              href="https://www.instagram.com/rr.coiffure/"
              target="_blank"
              className="mt-1 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#ec4899] px-4 py-2 text-sm font-semibold tracking-wide text-white"
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
