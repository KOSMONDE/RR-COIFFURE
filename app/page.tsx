import { Topbar } from "@/components/topbar"
import { Navbar } from "@/components/navbar"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Scissors, Palette, Sparkles, Users } from "lucide-react"

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Galerie", href: "/galerie" },
  { label: "Rendez-vous", href: "/rdv" },
  { label: "Avis", href: "/avis" },
  { label: "Contact", href: "/contact" },
]

const services = [
  {
    title: "Coupes & Coiffage",
    desc: "Coupes modernes et brushings professionnels adaptés à votre style",
    priceFrom: "À partir de 25 CHF",
    imageSrc: "/modern-haircut-salon.jpg",
    href: "/services#coupes",
  },
  {
    title: "Coloration",
    desc: "Colorations sur mesure, gloss et techniques de décoloration",
    priceFrom: "À partir de 35 CHF",
    imageSrc: "/hair-coloring-salon.png",
    href: "/services#coloration",
  },
  {
    title: "Mèches & Balayage",
    desc: "Balayages naturels et mèches pour sublimer votre chevelure",
    priceFrom: "À partir de 80 CHF",
    imageSrc: "/balayage-hair-salon.png",
    href: "/services#balayage",
  },
  {
    title: "Soins & Spa",
    desc: "Soins profonds et traitements botox capillaire",
    priceFrom: "À partir de 25 CHF",
    imageSrc: "/hair-spa-treatment.jpg",
    href: "/services#soins",
  },
  {
    title: "Tresses & Extensions",
    desc: "Tresses collées, box braids et pose d'extensions",
    priceFrom: "À partir de 60 CHF",
    imageSrc: "/braids-hair-salon.jpg",
    href: "/services#tresses",
  },
  {
    title: "Coiffure Enfants",
    desc: "Coupes adaptées aux enfants dans une ambiance bienveillante",
    priceFrom: "À partir de 20 CHF",
    imageSrc: "/kids-haircut-salon.jpg",
    href: "/services#enfants",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Topbar
        address="Rue de la Gare 12, 1003 Lausanne"
        phone="+41 21 123 45 67"
        hours="Lun-Sam 9h-19h"
        ctaUrl="https://www.snailscreation.com/book-online"
      />
      <Navbar items={navItems} />

      <section className="relative bg-gradient-to-br from-[#ffd6e6] via-[#ff9fc2]/30 to-[#ffd6e6] py-20 md:py-32 overflow-hidden">
        {/* Decorative woman silhouette */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-10">
          <svg viewBox="0 0 200 400" className="h-full w-full" fill="currentColor">
            <path d="M100 50 Q120 80 110 120 Q105 150 100 180 Q95 210 90 240 L110 240 Q105 210 100 180 Q95 150 90 120 Q80 80 100 50 M100 50 Q90 60 85 75 Q80 90 85 105 Q90 120 100 130" />
          </svg>
        </div>

        {/* Decorative floral elements */}
        <div className="absolute right-8 top-8 opacity-20">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#d4af37" strokeWidth="1.5">
            <circle cx="40" cy="40" r="8" />
            <path d="M40 32 Q35 28 32 32 Q28 35 32 40 M40 32 Q45 28 48 32 Q52 35 48 40 M40 48 Q35 52 32 48 Q28 45 32 40 M40 48 Q45 52 48 48 Q52 45 48 40" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/rr-coiffure-logo.jpg"
                alt="RR coiffure"
                width={200}
                height={200}
                className="rounded-3xl shadow-2xl"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              Salon de <span className="text-[#e05b95]">Coiffure</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 text-pretty mb-8">
              Votre beauté, notre passion. Spécialistes en coupes, colorations, balayages, tresses et extensions à
              Lausanne.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-2xl shadow-lg bg-gradient-to-r from-[#ff9fc2] to-[#e05b95] hover:from-[#e05b95] hover:to-[#ff9fc2]"
              >
                <Link href="https://www.snailscreation.com/book-online">Prendre rendez-vous</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl bg-white/80 backdrop-blur border-[#ff9fc2] text-[#e05b95] hover:bg-[#ffd6e6] hover:border-[#e05b95]"
              >
                <Link href="/tarifs">Voir les tarifs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-[#ffd6e6]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Scissors, title: "Expertise", desc: "Coiffeurs professionnels expérimentés" },
              { icon: Palette, title: "Créativité", desc: "Techniques modernes et tendances" },
              { icon: Sparkles, title: "Qualité", desc: "Produits haut de gamme" },
              { icon: Users, title: "Accueil", desc: "Service personnalisé et chaleureux" },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff9fc2] to-[#e05b95] text-white mb-4 shadow-md">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-ink">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-brand-600">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de services pour sublimer votre beauté
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#ffd6e6] via-[#ff9fc2] to-[#e05b95] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 bottom-0 w-1/4 opacity-10">
          <svg viewBox="0 0 200 200" className="h-full w-full" fill="currentColor">
            <circle cx="100" cy="100" r="80" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Prêt pour une nouvelle coiffure ?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Réservez votre rendez-vous en ligne et laissez nos experts prendre soin de vous
          </p>
          <Button asChild size="lg" className="rounded-2xl shadow-lg bg-white text-[#e05b95] hover:bg-[#ffd6e6]">
            <Link href="https://www.snailscreation.com/book-online">Réserver maintenant</Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-gradient-to-b from-[#ffd6e6]/20 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <Image src="/rr-coiffure-logo.jpg" alt="RR coiffure" width={80} height={80} className="rounded-lg" />
              </div>
              <p className="text-sm text-muted-foreground">Votre salon de coiffure professionnel à Lausanne</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Rue de la Gare 12</p>
                <p>1003 Lausanne</p>
                <p>+41 21 123 45 67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horaires</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Lundi - Samedi</p>
                <p>9h00 - 19h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} RR.COIFFURE. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
