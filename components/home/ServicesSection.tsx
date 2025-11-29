import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Coupes & Coiffage",
    desc: "Coupes modernes et brushings professionnels adaptés à votre style",
    priceFrom: "À partir de 25 CHF",
    imageSrc: "/modern-haircut-salon.jpg",
    href: "/services#coupes",
    tag: "Style & volume",
  },
  {
    title: "Coloration",
    desc: "Colorations sur mesure, gloss et techniques de décoloration",
    priceFrom: "À partir de 35 CHF",
    imageSrc: "/hair-coloring-salon.png",
    href: "/services#coloration",
    tag: "Couleurs sur mesure",
  },
  {
    title: "Mèches & Balayage",
    desc: "Balayages naturels et mèches pour sublimer votre chevelure",
    priceFrom: "À partir de 80 CHF",
    imageSrc: "/balayage-hair-salon.png",
    href: "/services#balayage",
    tag: "Effet soleil",
  },
  {
    title: "Soins & Spa",
    desc: "Soins profonds et traitements botox capillaire",
    priceFrom: "À partir de 25 CHF",
    imageSrc: "/hair-spa-treatment.jpg",
    href: "/services#soins",
    tag: "Soin profond",
  },
  {
    title: "Tresses & Extensions",
    desc: "Tresses collées, box braids et pose d'extensions",
    priceFrom: "À partir de 60 CHF",
    imageSrc: "/braids-hair-salon.jpg",
    href: "/services#tresses",
    tag: "Longue tenue",
  },
  {
    title: "Coiffure Enfants",
    desc: "Coupes adaptées aux enfants dans une ambiance bienveillante",
    priceFrom: "À partir de 20 CHF",
    imageSrc: "/kids-haircut-salon.jpg",
    href: "/services#enfants",
    tag: "Enfants",
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-white py-20"
      aria-labelledby="services-title"
    >
      {/* halo léger */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
        <div className="absolute left-[-4rem] top-10 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-[-4rem] bottom-0 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff7fb] px-3 py-1 text-xs font-medium text-[#ec4899] ring-1 ring-pink-100/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ec4899]" />
            <span>Prestations principales</span>
          </div>
          <h2
            id="services-title"
            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Nos{" "}
            <span className="bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              services
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Découvrez notre gamme complète de prestations pour sublimer votre beauté, du diagnostic aux finitions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-pink-100/80 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#fdf2f8]">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                {/* Tag + prix dans l’image */}
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-[11px] text-white">
                  <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                    {service.tag}
                  </span>
                  <span className="rounded-full bg-black/40 px-3 py-1 font-medium backdrop-blur">
                    {service.priceFrom}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5">
                <h3 className="text-base font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600">{service.desc}</p>

                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    Durée estimée :{" "}
                    <span className="font-medium text-slate-600">45–120 min</span>
                  </span>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 font-semibold text-[#ec4899] underline underline-offset-4 transition-colors hover:text-[#be185d]"
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
