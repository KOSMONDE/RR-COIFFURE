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
      className="relative bg-gradient-to-b from-white to-[#ffe7f2]/40 py-20"
    >
      {/* halos décoratifs */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-10 top-0 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        {/* Header section */}
        <div className="mx-auto mb-10 max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff7fb] px-3 py-1 text-xs font-medium text-[#ec4899] ring-1 ring-pink-100/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ec4899]" />
            <span>Galerie</span>
          </div>
          <h2
            id="gallery-title"
            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Un aperçu de nos{" "}
            <span className="bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              réalisations
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Balayages, colorations, tresses, soins et coupes pour tous les styles.
          </p>
        </div>

        {/* Grille d’images */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5">
          {galleryItems.map((item, index) => (
            <figure
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-[#fdf2f8] shadow-sm ring-1 ring-white/70 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                />
              </div>

              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/55 via-black/20 to-transparent px-3 pb-2 pt-5 text-[11px] text-white">
                <span className="truncate font-medium">{item.label}</span>
                <span className="hidden rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] md:inline-block">
                  RR COIFFURE
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* BOUTON INSTAGRAM */}
        <div className="mt-10 flex justify-center">
          <Link
            href="https://www.instagram.com/rr.coiffure/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Voir plus sur Instagram
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Nouvelles photos ajoutées chaque semaine.
        </p>
      </div>
    </section>
  )
}
