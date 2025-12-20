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
      <section className="sticky top-16 z-30 border-b border-[#F9A8D4]/60 bg-[#FDF2F8]/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
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
                      "rounded-full px-4 py-2 text-[11px] font-semibold transition-all",
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

            <Button
              asChild
              size="sm"
              className="rounded-full bg-[#EC4899] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#EC4899]/30 transition-all hover:-translate-y-0.5 hover:bg-[#F472B6]"
            >
              <Link href="https://www.snailscreation.com/book-online">Réserver en ligne</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-[#FDF2F8]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('/textures/noise.png')]" />
        </div>

        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a0526e]">
              Nos prestations
            </p>
            <p className="text-xs text-[#a0526e]">Cliquez pour voir le détail</p>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  aria-label={`Voir le service ${service.title}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-[#F9A8D4]/40 bg-white/75 backdrop-blur-sm shadow-[0_18px_40px_rgba(236,72,153,0.12)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(236,72,153,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]/40"
                >
                  <article className="flex flex-1 flex-col">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-3xl bg-[#FDF2F8]">
                      <Image
                        src={service.imageSrc}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.07]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b1019]/35 via-transparent to-transparent" />

                      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-[11px] text-white">
                        <span className="rounded-full border border-[#F9A8D4]/50 bg-[#FDE7F3]/90 px-3 py-1 text-[#7b4256] backdrop-blur-md">
                          {service.tag}
                        </span>
                        <span className="rounded-full bg-[#EC4899]/85 px-3 py-1 font-semibold text-white backdrop-blur-md">
                          {service.priceFrom}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                      <h3 className="text-base font-semibold text-[#2b1019]">{service.title}</h3>
                      <p className="text-sm text-[#7b4256]">{service.excerpt}</p>

                      <div className="mt-auto flex items-center justify-between pt-2 text-xs">
                        <span className="text-[#a0526e]">
                          Durée : <span className="font-medium text-[#2b1019]">{service.duration}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-full border border-[#F9A8D4]/60 bg-[#FDE7F3] px-3 py-1.5 text-[11px] font-semibold text-[#EC4899] shadow-sm transition-all">
                          En savoir plus
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-sm text-[#7b4256]">Aucune prestation trouvée pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
