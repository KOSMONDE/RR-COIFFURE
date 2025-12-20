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
  highlights?: { title: string; desc: string }[]
  process?: { title: string; desc: string }[]
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
    imageSrc: "/services/9a197f44-d50d-4590-8e8f-7eee8712a2af.png",
    highlights: [
      { title: "Diagnostic visage", desc: "Analyse de la morphologie et de la texture." },
      { title: "Coiffage inclus", desc: "Brushing adapté à votre style." },
    ],
    process: [
      { title: "Diagnostic", desc: "Analyse de la coupe et des habitudes." },
      { title: "Réalisation", desc: "Coupe précise et coiffage." },
    ],
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
    imageSrc: "/services/affb567b-4a8b-479d-afb6-574422ed9a83.png",
    highlights: [
      { title: "Couleur sur mesure", desc: "Teinte adaptée à votre carnation." },
      { title: "Protection fibre", desc: "Formules respectueuses des cheveux." },
    ],
    process: [
      { title: "Diagnostic couleur", desc: "Choix de la nuance et du protocole." },
      { title: "Application", desc: "Pose contrôlée et finition brillante." },
    ],
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
    imageSrc: "/services/87911610-3def-48dc-accc-56b94087ff24.png",
    highlights: [
      { title: "Effet lumineux", desc: "Relief naturel et fondu doux." },
      { title: "Entretien facile", desc: "Conseils pour faire durer." },
    ],
    process: [
      { title: "Diagnostic", desc: "Base et objectif couleur." },
      { title: "Technique", desc: "Balayage ou mèches + gloss." },
    ],
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
    imageSrc: "/images/hair-spa-treatment.jpg",
    highlights: [
      { title: "Hydratation profonde", desc: "Cheveux plus doux et souples." },
      { title: "Réparation", desc: "Brillance et protection durable." },
    ],
    process: [
      { title: "Diagnostic", desc: "Choix du soin adapté." },
      { title: "Rituel", desc: "Application et temps de pose." },
    ],
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
    imageSrc: "/images/braids-hair-salon.jpg",
    highlights: [
      { title: "Tenue durable", desc: "Coiffures qui tiennent." },
      { title: "Respect du cuir chevelu", desc: "Pose douce et contrôlée." },
    ],
    process: [
      { title: "Consultation", desc: "Style, longueur et densité." },
      { title: "Réalisation", desc: "Pose et finitions." },
    ],
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
    imageSrc: "/images/kids-haircut-salon.jpg",
    highlights: [
      { title: "Approche douce", desc: "Moment rassurant." },
      { title: "Coupe pratique", desc: "Facile au quotidien." },
    ],
    process: [
      { title: "Accueil", desc: "Mise en confiance." },
      { title: "Coupe", desc: "Rapide et adaptée." },
    ],
  },
]

function normalizeSlug(value: string) {
  return decodeURIComponent(value)
    .split("?")[0]
    .split("#")[0]
    .replace(/\/+$/, "")
    .trim()
    .toLowerCase()
}

function slugifyTitle(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

export function getServiceBySlug(slug: string) {
  const normalized = normalizeSlug(slug)
  return services.find((service) => {
    if (normalizeSlug(service.slug) === normalized) return true
    return slugifyTitle(service.title) === normalized
  })
}
