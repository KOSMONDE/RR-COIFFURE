import Image from "next/image"
import Link from "next/link"
import { services } from "../../data/services"

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-[#FDF2F8] pt-16 pb-10 sm:pt-24 sm:pb-14"
    >
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,189,217,0.25),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(236,126,184,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* En-tête section */}
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#b05a7b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
            <span>Prestations principales</span>
          </div>

          <h2
            id="services-title"
            className="font-display text-3xl font-extrabold tracking-tight text-[#2b1019] md:text-4xl"
          >
            Nos{" "}
            <span className="bg-gradient-to-r from-[#F472B6] to-[#EC4899] bg-clip-text text-transparent">
              services
            </span>
          </h2>

          <p className="text-sm leading-relaxed text-[#7b4256] sm:text-base">
            <span className="sm:hidden">Coupe, soin profond, transformation douce.</span>
            <span className="hidden sm:inline sm:whitespace-nowrap">
              Nos prestations : coupe, soin profond, transformation sur mesure.
            </span>
          </p>

          {/* CTA (plus aéré, plus premium) */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="https://www.instagram.com/rr.coiffure/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#EC4899] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/25 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF2F8] active:translate-y-0 sm:w-auto"
            >
              Réserver en ligne
            </Link>

            <Link
              href="/tarifs"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#EC4899]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#EC4899] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#F472B6] hover:bg-[#FDE7F3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF2F8] active:translate-y-0 sm:w-auto"
            >
              Voir tous les tarifs
            </Link>
          </div>
        </div>

        {/* Grille services */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              aria-label={`Voir le service : ${service.title}`}
              className="group block rounded-3xl border border-[#F9A8D4]/35 bg-white/70 shadow-[0_12px_30px_rgba(236,72,153,0.10)] backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_18px_44px_rgba(236,72,153,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF2F8]"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-3xl">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-[#FDF2F8]">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1019]/38 via-transparent to-transparent" />

                  {/* Badges (plus clean) */}
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 text-xs">
                    <span className="inline-flex items-center rounded-full border border-white/55 bg-white/70 px-3 py-1 font-semibold text-[#7b4256] backdrop-blur-md">
                      {service.tag}
                    </span>

                    <span className="inline-flex items-center rounded-full bg-[#EC4899]/90 px-3 py-1 font-semibold text-white shadow-sm backdrop-blur-md">
                      {service.priceFrom}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                  <h3 className="text-lg font-semibold text-[#2b1019] transition-colors group-hover:text-[#EC4899]">
                    {service.title}
                  </h3>

                  <p className="text-[12px] text-[#7b4256] whitespace-nowrap sm:text-sm sm:whitespace-nowrap">
                    {service.excerptMobile ?? service.excerpt}
                  </p>

                  {/* Footer carte (aligné, stable) */}
                  <div className="mt-auto flex items-center justify-between pt-3 text-xs">
                    <span className="text-[#a0526e]">
                      Durée : <span className="font-medium text-[#2b1019]">{service.duration}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full border border-[#F9A8D4]/55 bg-[#FDE7F3]/85 px-3 py-1.5 text-[11px] font-semibold text-[#EC4899] shadow-sm transition-all group-hover:border-[#EC4899]/60 group-hover:bg-[#FDE7F3]">
                      En savoir plus
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
