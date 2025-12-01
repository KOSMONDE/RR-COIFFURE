// data/services.ts

export type Service = {
  slug: string
  title: string
  excerpt: string          // texte court pour la carte
  description: string      // texte long pour la page
  priceFrom: string
  duration: string
  tag: string
  imageSrc: string
}

export const services: Service[] = [
  {
    slug: "coupes-coiffage",
    title: "Coupes & Coiffage",
    excerpt: "Coupes modernes et brushings professionnels adaptés à votre style.",
    description:
      "Chez RR Coiffure, chaque coupe commence par un diagnostic personnalisé de votre visage, de votre texture de cheveux et de votre routine au quotidien. Notre objectif : une coupe qui vous met en valeur, facile à recoiffer à la maison, avec un coiffage adapté à vos envies (lisse, wavy, volume…).",
    priceFrom: "À partir de 25 CHF",
    duration: "30–60 min",
    tag: "Style & volume",
    imageSrc: "/modern-haircut-salon.jpg",
  },
  {
    slug: "coloration",
    title: "Coloration",
    excerpt: "Colorations sur mesure, gloss et techniques de décoloration.",
    description:
      "Nous réalisons des colorations sur mesure en respectant la santé de vos cheveux : nuances naturelles, reflets lumineux, gloss brillance ou transformations plus marquées. Chaque prestation commence par un échange pour définir la teinte idéale selon votre carnation et votre style.",
    priceFrom: "À partir de 35 CHF",
    duration: "60–150 min",
    tag: "Couleurs sur mesure",
    imageSrc: "/hair-coloring-salon.png",
  },
  {
    slug: "meches-balayage",
    title: "Mèches & Balayage",
    excerpt: "Balayages naturels et mèches pour sublimer votre chevelure.",
    description:
      "Le balayage et les mèches permettent d’apporter relief et lumière à votre chevelure. Effet retour de vacances, contraste marqué ou fondu très naturel : nous adaptons la technique à votre base et à l’entretien que vous souhaitez.",
    priceFrom: "À partir de 80 CHF",
    duration: "90–180 min",
    tag: "Effet soleil",
    imageSrc: "/balayage-hair-salon.png",
  },
  {
    slug: "soins-spa",
    title: "Soins & Spa capillaire",
    excerpt: "Soins profonds et traitements botox capillaire.",
    description:
      "Offrez à vos cheveux un véritable moment de spa : soins profonds, rituels hydratants, réparateurs ou botox capillaire. Idéal après des techniques chimiques ou pour redonner brillance et douceur à la fibre.",
    priceFrom: "À partir de 25 CHF",
    duration: "30–60 min",
    tag: "Soin profond",
    imageSrc: "/hair-spa-treatment.jpg",
  },
  {
    slug: "tresses-extensions",
    title: "Tresses & Extensions",
    excerpt: "Tresses collées, box braids et pose d'extensions.",
    description:
      "Des coiffures qui tiennent, qui mettent en valeur votre visage et s’adaptent à votre style : tresses collées, box braids, extensions pour plus de longueur ou de volume. Nous travaillons dans le respect du cuir chevelu et de la fibre.",
    priceFrom: "À partir de 60 CHF",
    duration: "120–240 min",
    tag: "Longue tenue",
    imageSrc: "/braids-hair-salon.jpg",
  },
  {
    slug: "coiffure-enfants",
    title: "Coiffure Enfants",
    excerpt: "Coupes adaptées aux enfants dans une ambiance bienveillante.",
    description:
      "Des coupes pensées pour le confort des enfants, avec une approche douce et rassurante. L’objectif : un moment agréable pour eux, et une coupe pratique pour le quotidien.",
    priceFrom: "À partir de 20 CHF",
    duration: "20–40 min",
    tag: "Enfants",
    imageSrc: "/kids-haircut-salon.jpg",
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
