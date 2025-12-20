"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Service } from "@/data/services"
import { cn } from "@/lib/utils"

type ServicesCatalogProps = {
  services: Service[]
}

export default function ServicesCatalog({ services }: ServicesCatalogProps) {
  const [activeFilter, setActiveFilter] = useState("Tous")

  const filterCategories = useMemo(() => {
    const tags = Array.from(new Set(services.map((service) => service.tag)))
    return ["Tous", ...tags]
  }, [services])

  const filteredServices = useMemo(() => {
    if (activeFilter === "Tous") return services
    return services.filter((service) => service.tag === activeFilter)
  }, [activeFilter, services])

  return (
    <>
      {/* Barre filtres sticky */}
      <section className="sticky top-16 z-30 border-b border-[#F9A8D4]/60 bg-[#FDF2F8]/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 md:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            {/* Filtres (scrollable sur mobile) */}
            <div className="-mx-2 flex items-center gap-2 overflow-x-auto px-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {filterCategories.map((category) => {
                const isActive = activeFilter === category
                return (
                  <Button
                    key={category}
                    type="button"
                    size="sm"
                    variant={isActive ? "default" : "outline"}
                    onClick={() => setActiveFilter(category)}
                    aria-pressed={isActive}
                    className={cn(
                      "shrink-0 rounded-full px-4 py-2 text-[11px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF2F8]",
                      isActive
                        ? "bg-[#EC4899] text-white shadow-lg shadow-[#EC4899]/30 hover:bg-[#F472B6]"
                        : "border-[#F9A8D4]/60 bg-white text-[#7b4256] hover:bg-[#FDE7F3] hover:text-[#2b1019]"
                    )}
                  >
                    {category}
                  </Button>
                )
              })}
            </div>

            {/* CTA */}
            <Button
              asChild
              size="sm"
              className="w-full rounded-full bg-[#EC4899] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF2F8] active:translate-y-0 sm:w-auto"
            >
              <Link href="https://www.snailscreation.com/book-online" target="_blank" rel="noopener noreferrer">
                Réserver en ligne
              </Link>
            </Button>
          </div>

          {/* Micro-infos */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#a0526e]">
            <span className="font-semibold uppercase tracking-[0.22em]">Nos prestations</span>
            <span className="text-xs">Cliquez pour voir le détail</span>
          </div>
        </div>
      </section>

      {/* Liste */}
      <section className="relative bg-[#FDF2F8] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#F9A8D4]/18 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#EC4899]/12 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
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

                      <p className="text-sm leading-relaxed text-[#7b4256] line-clamp-2">{service.excerpt}</p>

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
              <div className="mt-5">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveFilter("Tous")}
                  className="rounded-full border-[#F9A8D4]/60 bg-white px-5 text-xs font-semibold text-[#7b4256] hover:bg-[#FDE7F3]"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
