import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"

export const metadata = {
  title: "Formations — RR COIFFURE",
  description:
    "Parcours professionnel 40 h RR COIFFURE, formation diplômante avec licence professionnelle, disponible en présentiel au salon et en vidéo à distance.",
}

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

export default function FormationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-[#ffe6f5]/50">
      <SiteHeader />

      <main id="main-content" className="flex-1 py-10 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
          {/* Mini navigation de page */}
          <nav
            aria-label="Navigation de la formation"
            className="sticky top-14 z-10 mb-4 rounded-full border border-pink-100 bg-white/80 px-3 py-2 text-xs text-slate-600 shadow-sm backdrop-blur sm:text-sm"
          >
            <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <li>
                <a
                  href="#intro"
                  className="rounded-full bg-[#fdf2f8] px-3 py-1 font-medium text-[#ec4899]"
                >
                  Présentation
                </a>
              </li>
              <li>
                <a
                  href="#modes"
                  className="rounded-full px-3 py-1 hover:bg-[#fff1f8]"
                >
                  Modes de formation
                </a>
              </li>
              <li>
                <a
                  href="#programme"
                  className="rounded-full px-3 py-1 hover:bg-[#fff1f8]"
                >
                  Programme 40 h
                </a>
              </li>
              <li>
                <a
                  href="#infos-pratiques"
                  className="rounded-full px-3 py-1 hover:bg-[#fff1f8]"
                >
                  Infos pratiques
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="rounded-full px-3 py-1 hover:bg-[#fff1f8]"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Hero + carte résumé */}
          <section id="intro" aria-labelledby="formation-intro">
            <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
              {/* Texte gauche */}
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center rounded-full bg-[#ffe4f4] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#ec4899]">
                  Formation diplômante RR COIFFURE
                </span>

                <h1
                  id="formation-intro"
                  className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl"
                >
                  Parcours Professionnel 40 h
                </h1>

                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  {training.desc}
                </p>

                <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                  Une seule formation, deux formats&nbsp;:{" "}
                  <span className="font-semibold text-slate-900">
                    au salon à Lausanne
                  </span>{" "}
                  ou{" "}
                  <span className="font-semibold text-slate-900">
                    en vidéos à distance
                  </span>
                  , avec le même contenu et la même licence professionnelle.
                </p>

                {/* Infos synthétiques */}
                <div className="mt-6 grid gap-3 text-xs text-slate-700 sm:text-sm sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/90 p-3 shadow-sm">
                    <p className="font-semibold text-slate-900">Durée</p>
                    <p className="text-slate-600">{training.duration}</p>
                  </div>
                  <div className="rounded-2xl bg-white/90 p-3 shadow-sm">
                    <p className="font-semibold text-slate-900">Niveau</p>
                    <p className="text-slate-600">{training.level}</p>
                  </div>
                  <div className="rounded-2xl bg-white/90 p-3 shadow-sm">
                    <p className="font-semibold text-slate-900">
                      Licence incluse
                    </p>
                    <p className="text-slate-600">
                      Diplôme RR COIFFURE après validation
                    </p>
                  </div>
                </div>

                {/* À qui s’adresse la formation */}
                <div className="mt-6 rounded-3xl bg-white/80 p-4 text-left shadow-sm">
                  <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                    À qui s’adresse ce parcours ?
                  </h2>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-600 sm:text-sm">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ec4899]" />
                      <span>
                        Personnes qui souhaitent démarrer une activité de
                        coiffeur·se avec une base solide.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ec4899]" />
                      <span>
                        Coiffeur·ses déjà en pratique qui veulent sécuriser
                        leurs techniques et obtenir une licence reconnue par le
                        salon RR COIFFURE.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ec4899]" />
                      <span>
                        Personnes en reconversion attirées par le métier, qui
                        souhaitent une formation courte mais complète.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
                  <Link
                    href="https://www.instagram.com/rr.coiffure/"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] px-7 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-[#ec4899] hover:to-[#f472b6]"
                  >
                    Demander une place
                  </Link>

                  <a
                    href="#programme"
                    className="inline-flex items-center justify-center rounded-full border border-[#f472b6]/50 bg-white/80 px-6 py-2 text-sm font-semibold text-[#ec4899] shadow-sm hover:bg-white"
                  >
                    Voir le programme détaillé
                  </a>
                </div>

                <p className="mt-3 text-[11px] text-slate-500">
                  Places limitées pour garantir un suivi personnalisé. Priorité
                  donnée aux personnes motivées et disponibles sur toute la
                  durée du parcours.
                </p>
              </div>

              {/* Visuel + résumé rapide droite */}
              <div className="space-y-4">
                <div className="relative h-60 w-full overflow-hidden rounded-3xl bg-[#fdf2f8] shadow-[0_18px_40px_rgba(236,72,153,0.25)] sm:h-72">
                  <Image
                    src={training.image}
                    alt={training.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-1 text-xs font-semibold text-[#ec4899] backdrop-blur">
                    {training.badge}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-black/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                    Licence professionnelle RR COIFFURE
                  </span>
                </div>

                <div className="rounded-3xl bg-white/90 p-4 text-sm text-slate-700 shadow-[0_12px_30px_rgba(148,163,184,0.22)]">
                  <div className="flex items-baseline justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#ec4899]">
                        Parcours complet
                      </p>
                      <p className="mt-1 text-base font-bold text-slate-900">
                        {training.price}
                      </p>
                    </div>
                    <p className="text-xs text-slate-500">
                      Modalités de paiement et dates communiquées directement
                      par le salon.
                    </p>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ec4899]" />
                      <span>40 h de formation structurée sur 6 jours.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ec4899]" />
                      <span>9 modules orientés pratique salon.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ec4899]" />
                      <span>Licence RR COIFFURE délivrée après validation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Modes de formation */}
          <section
            id="modes"
            aria-labelledby="modes-title"
            className="rounded-3xl bg-white/80 p-6 shadow-[0_10px_30px_rgba(148,163,184,0.18)] sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2
                  id="modes-title"
                  className="text-2xl font-bold text-slate-900 sm:text-3xl"
                >
                  Deux modes de formation
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  Choisissez le format qui correspond le mieux à votre
                  organisation. Le contenu du programme reste identique.
                </p>
              </div>
              <p className="text-xs text-slate-500 sm:text-sm">
                Présentiel et vidéo{" "}
                <span className="font-semibold">sur le même programme</span>.
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {modes.map((mode, index) => (
                <article
                  key={index}
                  className="group rounded-2xl border border-pink-100 bg-[#fff7fb] p-4 transition hover:-translate-y-1 hover:border-[#ec4899]/60 hover:shadow-[0_16px_35px_rgba(236,72,153,0.18)]"
                >
                  <span className="text-xs font-semibold uppercase text-[#ec4899]">
                    {mode.type}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                    {mode.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    {mode.place}
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-slate-700 sm:text-sm">
                    {mode.advantages.map((adv, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ec4899]" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3 text-xs text-slate-500">
                    {mode.priceNote}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-700">
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
            className="rounded-3xl bg-white/80 p-6 shadow-[0_10px_30px_rgba(148,163,184,0.18)] sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2
                  id="programme-title"
                  className="text-2xl font-bold text-slate-900 sm:text-3xl"
                >
                  Programme détaillé (40 h)
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  9 modules complémentaires, construits pour un apprentissage
                  logique et efficace, orienté vers la pratique réelle en salon.
                </p>
              </div>
              <div className="text-right text-xs text-slate-500 sm:text-sm">
                <p>
                  <span className="font-semibold">40 h</span> de formation
                </p>
                <p>Environ 6 h 40 par jour sur 6 jours.</p>
              </div>
            </div>

            <ol className="mt-6 grid gap-3 text-sm text-slate-700 sm:text-base md:grid-cols-2">
              {modules.map((m, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-[#fff1f8]/70 px-4 py-3"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ec4899] to-[#a855f7] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {m.title} —{" "}
                      <span className="text-[#ec4899]">{m.hours}</span>
                    </p>
                    <p className="text-xs text-slate-600 sm:text-sm">
                      {m.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-xs text-slate-500 sm:text-sm">
              Cette formation est{" "}
              <span className="font-semibold">diplômante</span>. La licence
              professionnelle RR COIFFURE est délivrée à l’issue des 40 h, sous
              réserve de validation des compétences évaluées en fin de parcours
              (présentiel ou vidéo).
            </p>
          </section>

          {/* Infos pratiques */}
          <section
            id="infos-pratiques"
            aria-labelledby="infos-pratiques-title"
            className="rounded-3xl bg-white/80 p-6 shadow-[0_10px_30px_rgba(148,163,184,0.18)] sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2
                  id="infos-pratiques-title"
                  className="text-2xl font-bold text-slate-900 sm:text-3xl"
                >
                  Informations pratiques
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  Les détails (dates, horaires, paiements) sont confirmés
                  directement avec le salon.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 text-xs text-slate-600 sm:grid-cols-3 sm:text-sm">
              <div className="rounded-2xl bg-[#fff7fb] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#ec4899]">
                  Lieu & format
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>Salon RR COIFFURE – Lausanne.</li>
                  <li>Ou formation vidéo à distance.</li>
                  <li>Groupes limités pour un meilleur suivi.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#fff7fb] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#ec4899]">
                  Dates & horaires
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>Dates communiquées par le salon.</li>
                  <li>En général sur 6 jours consécutifs ou étalés.</li>
                  <li>Horaires adaptés à la pratique en salon.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#fff7fb] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#ec4899]">
                  Inscription
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>Contact direct via Instagram.</li>
                  <li>Ou passage au salon pour en discuter.</li>
                  <li>Acompte et modalités de paiement à définir.</li>
                </ul>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
              <p>
                Un entretien rapide peut être proposé pour vérifier que la
                formation correspond bien à votre projet.
              </p>
              <Link
                href="https://www.instagram.com/rr.coiffure/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] px-6 py-2 text-xs font-semibold text-white shadow-md hover:from-[#ec4899] hover:to-[#f472b6] sm:text-sm"
              >
                Poser une question sur Instagram
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            aria-labelledby="faq-title"
            className="space-y-5 text-left"
          >
            <div className="text-center sm:text-left">
              <h2
                id="faq-title"
                className="text-2xl font-bold text-slate-900 sm:text-3xl"
              >
                Questions fréquentes
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Si vous avez un doute, il est souvent plus simple d’écrire
                directement au salon. Voici déjà quelques réponses.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {faqs.map((item, index) => (
                <article
                  key={index}
                  className="rounded-2xl bg-white/90 p-4 text-xs text-slate-600 shadow-sm sm:text-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {item.q}
                  </h3>
                  <p className="mt-1.5">{item.a}</p>
                </article>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <section className="pb-4 text-center">
            <div className="inline-flex flex-col items-center gap-3 rounded-3xl bg-gradient-to-r from-[#f9a8d4] to-[#e879f9] px-6 py-6 text-white shadow-[0_16px_40px_rgba(236,72,153,0.35)] sm:px-10 sm:py-8">
              <p className="text-sm font-semibold sm:text-base">
                Prête à valider votre licence professionnelle RR COIFFURE ?
              </p>
              <p className="max-w-xl text-xs text-white/90 sm:text-sm">
                Contactez le salon pour connaître les prochaines dates, les
                modalités d’inscription et les disponibilités en présentiel ou
                en vidéo. Un premier échange permet de vérifier que la formation
                correspond à votre projet.
              </p>
              <Link
                href="https://www.instagram.com/rr.coiffure/"
                target="_blank"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#ec4899] shadow-md hover:bg-[#fdf2f8]"
              >
                Écrire au salon sur Instagram
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
