// app/services/[slug]/page.tsx

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import SiteFooter from "@/components/home/SiteFooter"
import SiteHeader from "@/components/home/SiteHeader"
import { getServiceBySlug, services } from "@/data/services"

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Galerie", href: "/galerie" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/contact" },
]

type ServicePageProps = {
  params: Promise<{
    slug: string | string[]
  }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug
  const service = normalizedSlug ? getServiceBySlug(normalizedSlug) : undefined

  if (!service) {
    notFound()
  }

  const highlights = service.highlights?.length
    ? service.highlights
    : [
        { title: "Diagnostic personnalisé", desc: "Analyse de vos besoins et de votre style." },
        { title: "Conseils sur mesure", desc: "Routine adaptée pour prolonger la tenue." },
      ]

  const processSteps = service.process?.length
    ? service.process
    : [
        { title: "Diagnostic", desc: "Échange sur vos envies et vos habitudes." },
        { title: "Réalisation", desc: "Prestation sur mesure, respect de la fibre." },
        { title: "Conseils", desc: "Recommandations simples pour l'entretien." },
      ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader items={navItems} />

      <main className="flex-1 bg-white">
        {/* Hero service */}
        <section className="relative overflow-hidden border-b border-pink-100/60 bg-linear-to-br from-[#fff1f8] via-white to-[#f3e8ff]">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-pink-200/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-purple-200/40 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
            {/* Texte */}
            <div className="flex-1 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[#ec4899] ring-1 ring-pink-100/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ec4899]" />
                <span>Service RR Coiffure</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {service.title}
              </h1>

              <p className="max-w-xl text-sm text-slate-600 sm:text-base">
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm ring-1 ring-pink-100/80">
                  <span className="text-xs text-slate-400">À partir de</span>
                  <span className="font-semibold text-slate-900">
                    {service.priceFrom}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/90 px-4 py-2 text-xs font-medium text-white">
                  Durée estimée :{" "}
                  <span className="text-pink-100">{service.duration}</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500">
                <Link
                  href="/#reservation"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ec4899] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#be185d]"
                >
                  Prendre rendez-vous
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#ec4899] underline underline-offset-4 hover:text-[#be185d]"
                >
                  Voir tous les services
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 w-full flex-1 overflow-hidden rounded-3xl border border-pink-100/80 bg-[#fdf2f8] shadow-lg sm:h-80">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-black/50 px-4 py-2 text-xs text-white backdrop-blur">
                <p className="font-medium">{service.tag}</p>
                <p className="text-[11px] text-pink-100">{service.duration}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu détaillé simple */}
        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            {/* Colonne texte */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#2b1019]">
                À qui s&apos;adresse ce service ?
              </h2>
              <p className="text-sm leading-relaxed text-[#7b4256]">
                Ce service est idéal si vous souhaitez un résultat professionnel dans un cadre
                confortable, avec des conseils personnalisés sur l&apos;entretien et le styling
                au quotidien. Nous prenons le temps d&apos;échanger avec vous pour comprendre
                vos attentes, votre routine et votre style.
              </p>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#2b1019]">Points clés</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#F9A8D4]/50 bg-[#FDF2F8] px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-[#2b1019]">{item.title}</p>
                      <p className="text-xs leading-relaxed text-[#7b4256]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#2b1019]">
                  Le déroulé d&apos;un rendez-vous
                </h3>
                <ol className="space-y-3 text-sm text-[#7b4256]">
                  {processSteps.map((step, index) => (
                    <li key={`${step.title}-${index}`} className="flex gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#F9A8D4]/60 bg-white text-[11px] font-semibold text-[#EC4899] shadow-sm">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#2b1019]">{step.title}</p>
                        <p className="text-xs leading-relaxed text-[#7b4256]">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Colonne encadré tarif / infos */}
            <aside className="space-y-4 rounded-2xl border border-[#F9A8D4]/50 bg-white/80 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-[#2b1019]">
                Informations pratiques
              </h3>
              <dl className="space-y-3 text-sm text-[#7b4256]">
                <div className="flex justify-between">
                  <dt className="text-[#a0526e]">Tarif à partir de</dt>
                  <dd className="font-medium text-[#2b1019]">{service.priceFrom}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#a0526e]">Durée estimée</dt>
                  <dd className="font-medium text-[#2b1019]">{service.duration}</dd>
                </div>
                <div>
                  <dt className="text-[#a0526e]">Remarque</dt>
                  <dd>
                    Le tarif final peut varier selon la longueur, l&apos;épaisseur et le travail
                    demandé. Un devis clair est toujours proposé avant de commencer.
                  </dd>
                </div>
              </dl>
              <div className="pt-2">
                <Link
                  href="/#reservation"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#ec4899] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#be185d]"
                >
                  Demander un rendez-vous
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}
