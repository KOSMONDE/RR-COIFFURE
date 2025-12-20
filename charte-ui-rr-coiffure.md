# Charte UI – RR COIFFURE

Projet : **RR COIFFURE**  
Usage : base visuelle pour toutes les pages (home, services, maintenance, etc.)

---

## 1. Palette de couleurs

### 1.1 Couleurs principales

- **Dégradé de fond global**
  - `from-[#FFE5F4] via-[#F9BDD9] to-[#EC7EB8]`

- **Accent principal**
  - `#EC4899` (rose vif – boutons, éléments importants)

- **Accent secondaire**
  - `#F472B6` (rose clair – dégradés, hover)

- **Rose pastel / UI douce**
  - `#F9A8D4` (bordures, badges, fonds subtils)
  - `#FDE7F3`, `#FDF2F8` (fonds clairs)

### 1.2 Couleurs de texte

- **Texte principal / titres**
  - `#2b1019`

- **Texte secondaire / paragraphes**
  - `#7b4256`

- **Détails, légendes, labels**
  - `#a0526e`, `#b05a7b`

---

## 2. Typographie & hiérarchie (Tailwind)

### 2.1 Titres

- Titre de section (H2) :
  ```tsx
  className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2b1019]"
  ```

- Titre principal (H1) :
  ```tsx
  className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#2b1019] leading-tight"
  ```

- Sous-titre / H3 :
  ```tsx
  className="text-xl md:text-2xl font-semibold text-[#2b1019]"
  ```

### 2.2 Texte courant

- Paragraphe principal :
  ```tsx
  className="text-base md:text-lg text-[#7b4256] leading-relaxed"
  ```

- Texte secondaire / légende :
  ```tsx
  className="text-sm text-[#a0526e]"
  ```

### 2.3 Familles de polices (premium)

Option retenue (A) : duo élégant et lisible.

- Titres : `Playfair Display`
- Texte : `Manrope`

Exemple de config Tailwind (avec variables CSS) :
```ts
// tailwind.config.ts
theme: {
  extend: {
    fontFamily: {
      display: ["var(--font-display)", "serif"],
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
    },
  },
}
```

Import Next.js (recommande) :
```tsx
// app/layout.tsx
import { Manrope, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

Utilisation :
```tsx
className="font-display" // titres
className="font-sans" // texte
```

---

## 3. Spacing, layout & structure

### 3.1 Grille et container

- Container global :
  ```tsx
  className="mx-auto max-w-6xl px-6 md:px-10"
  ```

- Sections verticales :
  ```tsx
  className="py-16 md:py-24"
  ```

### 3.2 Cartes & surfaces

- Carte premium :
  ```tsx
  className="rounded-3xl bg-white/70 backdrop-blur border border-[#F9A8D4]/40 shadow-[0_20px_60px_rgba(236,72,153,0.15)]"
  ```

- Bloc secondaire :
  ```tsx
  className="rounded-2xl bg-[#FDF2F8] border border-[#F9A8D4]/50"
  ```

---

## 4. Composants clés

### 4.1 Boutons

- Bouton principal :
  ```tsx
  className="inline-flex items-center justify-center rounded-full bg-[#EC4899] px-6 py-3 text-white font-semibold shadow-lg shadow-[#EC4899]/30 transition hover:bg-[#F472B6] hover:shadow-xl"
  ```

- Bouton secondaire (outline) :
  ```tsx
  className="inline-flex items-center justify-center rounded-full border border-[#EC4899] px-6 py-3 text-[#EC4899] font-semibold hover:bg-[#FDE7F3]"
  ```

- Bouton ghost :
  ```tsx
  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-[#7b4256] hover:text-[#2b1019]"
  ```

### 4.2 Inputs & formulaires

- Champ texte :
  ```tsx
  className="w-full rounded-2xl border border-[#F9A8D4]/60 bg-white/80 px-4 py-3 text-[#2b1019] placeholder:text-[#b05a7b] focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/30"
  ```

- Label :
  ```tsx
  className="text-sm font-semibold text-[#7b4256]"
  ```

### 4.3 Badges

- Badge doux :
  ```tsx
  className="inline-flex items-center rounded-full bg-[#FDE7F3] px-3 py-1 text-xs font-semibold text-[#7b4256]"
  ```

---

## 5. Sections types (site premium)

### 5.1 Hero (accueil)

- Structure :
  - Titre H1 + sous-titre émotionnel
  - CTA principal + CTA secondaire
  - Image premium salon en grand format

Dimensions hero (desktop) :
```tsx
className="relative overflow-hidden py-16 md:py-24"
className="grid gap-10 items-center lg:grid-cols-[1.1fr_0.9fr]"
className="max-w-lg rounded-3xl" // bloc visuel principal
```

Classes utiles :
```tsx
className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center"
```

### 5.2 Services

- Cartes services (3-6) avec icone, titre, description courte, prix indicatif.
- Hover subtil :
  ```tsx
  className="transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(236,72,153,0.2)]"
  ```

### 5.3 Témoignages

- Cartes arrondies, texte doux, photo ronde.
- Accent en rose pastel pour les guillemets ou étoiles.

### 5.4 CTA final

- Fond dégradé + bouton principal.
- Texte court orienté prise de rendez-vous.

---

## 6. Iconographie & imagerie

- Photos : lumière douce, textures naturelles, détails cheveux.
- Style premium : flou léger, fond clair, mise en valeur des matières.
- Icônes : line icons fins (ex: Lucide), taille 18-24px.

---

## 7. Motion & interactions

- Animations douces :
  - Apparition sections : `animate-[fadeInUp_0.6s_ease-out]`
  - Hover boutons : `transition duration-300 ease-out`
  - Cartes : `hover:scale-[1.02]`

---

## 8. Accessibilité & cohérence

- Contraste minimum sur texte principal.
- Focus visible sur tous les éléments interactifs.
- Espacement minimum 44px sur boutons / zones cliquables.
- Cohérence des rayons : `rounded-2xl` et `rounded-3xl` dominant.

---

## 9. Ton & rédaction

- Voix élégante, chaleureuse, féminine.
- Phrases courtes, positives, orientées résultat.
- Exemples :
  - "Révélez l’éclat de vos cheveux."
  - "Prenez rendez-vous pour une expérience sur-mesure."
