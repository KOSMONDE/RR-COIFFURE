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
