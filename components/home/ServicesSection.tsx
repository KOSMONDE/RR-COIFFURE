import Image from "next/image"
import Link from "next/link"
import { services } from "../../data/services"

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative py-16 sm:py-24 bg-[#FDF2F8]"
    >
      {/* Fond premium */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,189,217,0.25),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(236,126,184,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* En-tête section */}
        <div className="mx-auto mb-10 max-w-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-medium text-[#b05a7b] border border-[#F9A8D4]/60 uppercase tracking-[0.22em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
            <span>Prestations principales</span>
          </div>

          <h2
            id="services-title"
            className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#2b1019]"
          >
            Nos{" "}
            <span className="bg-gradient-to-r from-[#F472B6] to-[#EC4899] bg-clip-text text-transparent">
              services
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#7b4256] leading-relaxed">
            <span className="sm:hidden">
              Coupe, soin profond, transformation douce.
            </span>
            <span className="hidden sm:inline">
              Découvrez les prestations proposées par RR Coiffure : de la coupe au soin profond,
              pour une transformation en douceur et sur mesure.
            </span>
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              href="https://www.snailscreation.com/book-online"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#EC4899] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40"
            >
              Réserver en ligne
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 rounded-full border border-[#EC4899] bg-white px-5 py-2 text-sm font-semibold text-[#EC4899] shadow-sm hover:border-[#F472B6] hover:bg-[#FDE7F3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40"
            >
              Voir tous les tarifs
            </Link>
          </div>
        </div>

        {/* Grille services — SANS CADRE GLOBAL */}
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              aria-label={`Voir le service ${service.title}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#F9A8D4]/40 bg-white/75 backdrop-blur-sm shadow-[0_14px_32px_rgba(236,72,153,0.10)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(236,72,153,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40"
            >
              <article className="flex flex-1 flex-col">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-3xl bg-[#FDF2F8]">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.07]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1019]/35 via-transparent to-transparent" />

                  {/* Tag + prix */}
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-xs text-white">
                    <span className="rounded-full border border-[#F9A8D4]/50 bg-[#FDE7F3]/90 px-3 py-1 text-[#7b4256] backdrop-blur-md">
                      {service.tag}
                    </span>
                    <span className="rounded-full bg-[#EC4899]/85 px-3 py-1 font-semibold text-white backdrop-blur-md">
                      {service.priceFrom}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                  <h3 className="text-lg font-semibold text-[#2b1019] transition-colors group-hover:text-[#EC4899]">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#7b4256] leading-relaxed line-clamp-2">
                    {service.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-2 text-xs">
                    <span className="text-[#a0526e]">
                      Durée :{" "}
                      <span className="font-medium text-[#2b1019]">
                        {service.duration}
                      </span>
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3] px-3 py-1.5 text-[11px] font-semibold text-[#EC4899] shadow-sm transition-colors group-hover:border-[#EC4899]/70 group-hover:bg-[#FDE7F3]/80">
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
