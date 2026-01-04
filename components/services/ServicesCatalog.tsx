"use client"

import Image from "next/image"
import Link from "next/link"
import type { Service } from "@/data/services"

type ServicesCatalogProps = {
  services: Service[]
}

export default function ServicesCatalog({ services }: ServicesCatalogProps) {
  return (
    <>
      {/* Liste */}
      <section className="relative bg-[#FDF2F8] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#F9A8D4]/18 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#EC4899]/12 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {services.length > 0 ? (
            <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  aria-label={`Voir le service ${service.title}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-[#F9A8D4]/40 bg-white/75 backdrop-blur-sm shadow-[0_18px_40px_rgba(236,72,153,0.12)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(236,72,153,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF2F8]"
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
                      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-[11px]">
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
                      <h3 className="text-base font-semibold text-[#2b1019] transition-colors group-hover:text-[#EC4899]">
                        {service.title}
                      </h3>

                      <p className="text-[12px] text-[#7b4256] whitespace-nowrap sm:text-sm sm:whitespace-nowrap">
                        {service.excerptMobile ?? service.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-2 text-xs">
                        <span className="text-[#a0526e]">
                          Durée : <span className="font-medium text-[#2b1019]">{service.duration}</span>
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
          ) : (
            <div className="py-16 text-center">
              <p className="text-sm text-[#7b4256]">Aucune prestation trouvée pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
