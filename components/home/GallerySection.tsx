import Image from "next/image"
import Link from "next/link"

const galleryItems = [
  {
    src: "/images/galerie/1.jpeg",
    alt: "Balayage caramel sur cheveux longs",
    label: "Balayage caramel",
  },
  {
    src: "/images/galerie/2.webp",
    alt: "Tresses et braids stylisées",
    label: "Braids & tresses",
  },
  {
    src: "/images/galerie/3.webp",
    alt: "Coloration intense et brillante",
    label: "Coloration intense",
  },
  {
    src: "/images/galerie/4.jpeg",
    alt: "Soin spa capillaire en salon",
    label: "Soin & spa",
  },
  {
    src: "/images/galerie/5.jpeg",
    alt: "Coiffure pour enfants",
    label: "Coiffure enfants",
  },
  {
    src: "/images/galerie/6.jpeg",
    alt: "Coupe moderne et stylée",
    label: "Coupe moderne",
  },
]

export default function GallerySection() {
  return (
    <section
      id="galerie"
      aria-labelledby="gallery-title"
      className="relative py-24 bg-gradient-to-b from-white to-[#ffe7f2]/40"
    >
      {/* Halos premium */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-20 top-10 h-48 w-48 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-20 bottom-10 h-48 w-48 rounded-full bg-purple-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Titre section */}
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] font-medium text-[#b05a7b] border border-[#F9A8D4]/60 uppercase tracking-[0.22em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899]" />
            Galerie
          </div>

          <h2
            id="gallery-title"
            className="text-3xl font-extrabold tracking-tight text-[#2b1019] md:text-4xl"
          >
            Un aperçu de nos{" "}
            <span className="bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
              réalisations
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#7b4256]">
            Balayages, colorations, tresses et soins réalisés au salon RR Coiffure.
          </p>
        </div>

        {/* Grille premium (sans cadre global) */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {galleryItems.map((item, index) => (
            <figure
              key={index}
              className="group relative overflow-hidden rounded-[1.7rem] shadow-[0_16px_45px_rgba(176,51,116,0.18)] ring-1 ring-white/70 bg-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(176,51,116,0.26)]"
            >
              {/* Image + ratio */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
              </div>

              {/* Overlay premium */}
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/55 via-black/20 to-transparent px-4 pb-3 pt-6 text-[12px] text-white">
                <span className="truncate font-medium">{item.label}</span>
                <span className="hidden rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] md:block">
                  RR COIFFURE
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA Instagram */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <Link
            href="https://www.instagram.com/rr.coiffure/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Voir plus sur Instagram
            <span aria-hidden="true">↗</span>
          </Link>

          <p className="text-center text-[11px] text-[#7b4256]">
            Photos réelles réalisées au salon RR Coiffure.
          </p>
        </div>
      </div>
    </section>
  )
}
