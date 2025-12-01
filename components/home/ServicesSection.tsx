import Image from "next/image"
import Link from "next/link"
import { services } from "../../data/services"

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative py-16 sm:py-20"
    >
      {/* Halos doux */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
        <div className="absolute left-[-3rem] top-0 h-40 w-40 rounded-full bg-[#F9A8D4]/40 blur-3xl" />
        <div className="absolute right-[-3rem] bottom-0 h-40 w-40 rounded-full bg-[#EC4899]/35 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* En-tête section */}
        <div className="mx-auto mb-10 max-w-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-medium text-[#b05a7b] border border-[#F9A8D4]/60 uppercase tracking-[0.22em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
            <span>Prestations principales</span>
          </div>

          <h2
            id="services-title"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2b1019]"
          >
            Nos{" "}
            <span className="bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
              services
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#7b4256]">
            Découvrez les prestations proposées par RR Coiffure : de la coupe au soin profond,
            pour une transformation en douceur et sur mesure.
          </p>
        </div>

        {/* Grille services — SANS CADRE GLOBAL */}
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-[0_10px_28px_rgba(176,51,116,0.12)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(176,51,116,0.18)]"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-3xl bg-[#FDF2F8]">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.07]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Tag + prix */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-[11px] text-white">
                  <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur-md">
                    {service.tag}
                  </span>
                  <span className="rounded-full bg-black/50 px-3 py-1 font-medium backdrop-blur-md">
                    {service.priceFrom}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                <h3 className="text-base font-semibold text-[#2b1019]">
                  {service.title}
                </h3>

                <p className="text-sm text-[#7b4256]">
                  {service.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-2 text-xs">
                  <span className="text-[#a0526e]">
                    Durée :{" "}
                    <span className="font-medium text-[#3a1020]">
                      {service.duration}
                    </span>
                  </span>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    En savoir plus
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
