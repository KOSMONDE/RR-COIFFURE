"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// -----------------------------------------------------------------------------
// CONFIG
// -----------------------------------------------------------------------------
const BRAND = {
  name: "RR COIFFURE",
  email: "contact@rr-coiffure.com",
  logo: "/images/galerie/rr-logo.jpg",
  instagram: "@rr.coiffure",
  instagramLink: "https://www.instagram.com/rr.coiffure/",
};

const LAUNCH_AT = "2025-12-05T09:00:00+01:00";

// -----------------------------------------------------------------------------
// COUNTDOWN
// -----------------------------------------------------------------------------
type Parts = { d: number; h: number; m: number; s: number };

function diffParts(ms: number): Parts {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

function BigCountdown({ target }: { target: string }) {
  const targetMs = useMemo(() => new Date(target).getTime(), [target]);
  const [left, setLeft] = useState<Parts | null>(null);

  useEffect(() => {
    if (isNaN(targetMs)) return;
    const tick = () => setLeft(diffParts(targetMs - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  if (left === null) return <div className="h-24" />;

  const { d, h, m, s } = left;
  const done = d === 0 && h === 0 && m === 0 && s === 0;

  if (done) {
    return (
      <p className="mt-3 text-sm sm:text-base font-semibold text-[#5b1431]">
        Ouverture imminente, restez connectés.
      </p>
    );
  }

  const Cell = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-2xl bg-white/95 shadow-sm px-5 py-4 sm:px-7 sm:py-6 border border-pink-100 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-lg">
        <span className="block text-3xl sm:text-5xl font-extrabold tabular-nums text-[#291017]">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs font-medium text-[#a0526e] uppercase tracking-[0.18em]">
        {label}
      </span>
    </div>
  );

  return (
    <div className="mt-3">
      <p className="text-[11px] sm:text-xs text-[#7e3b54] tracking-wide">
        Ouverture prévue le 5 décembre
      </p>
      <div
        className="mt-3 grid grid-cols-4 gap-3 sm:gap-6"
        aria-live="polite"
        aria-label="Compte à rebours avant mise en ligne"
      >
        <Cell value={d} label="jours" />
        <Cell value={h} label="heures" />
        <Cell value={m} label="minutes" />
        <Cell value={s} label="secondes" />
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// GALLERY
// -----------------------------------------------------------------------------
const GALLERY = [
  { id: "1", src: "/images/galerie/1.jpeg", alt: "Balayage" },
  { id: "2", src: "/images/galerie/2.webp", alt: "Braids" },
  { id: "3", src: "/images/galerie/3.webp", alt: "Coloration" },
  { id: "4", src: "/images/galerie/4.jpeg", alt: "Soin Spa" },
  { id: "5", src: "/images/galerie/5.jpeg", alt: "Enfants" },
  { id: "6", src: "/images/galerie/6.jpeg", alt: "Moderne" },
];

// -----------------------------------------------------------------------------
// PAGE
// -----------------------------------------------------------------------------
export default function MaintenancePage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (lightbox !== null && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
        setLightbox((idx) => {
          if (idx === null) return null;
          const len = GALLERY.length;
          const next = e.key === "ArrowRight" ? idx + 1 : idx - 1;
          return ((next % len) + len) % len;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/maintenance/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok || data?.ok !== true) {
        setError("Code incorrect");
        setLoading(false);
        return;
      }
      router.push("/");
    } catch {
      setError("Erreur réseau");
      setLoading(false);
    }
  }

  const inputBorder = error ? "border-red-400" : "border-[#F9A8D4]";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFE5F4] via[#F9BDD9] to-[#EC7EB8] text-[#2b1019] p-4 sm:p-6">
      {/* décor luxe en fond */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.9)_0,transparent_50%),radial-gradient(circle_at_90%_100%,rgba(255,255,255,0.8)_0,transparent_50%)]" />
        <div className="absolute inset-16 rounded-[3rem] border border-white/50 shadow-[0_0_60px_rgba(255,255,255,0.45)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Carte luxe */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-white/90 via-white/80 to-white/70 p-[1px] shadow-[0_24px_80px_rgba(176,51,116,0.35)]">
          <div className="rounded-[2.4rem] bg-gradient-to-br from-white/92 via-[#FFEAF5]/90 to-white/95 px-6 py-7 sm:px-10 sm:py-10 lg:px-14 lg:py-12">

            {/* GRID */}
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-start">
              
              {/* COL GAUCHE */}
              <section className="flex flex-col gap-6 items-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#F9A8D4] via-[#fb82c1] to-[#fde7f5] blur-xl opacity-80" />
                    <Image
                      src={BRAND.logo}
                      alt={BRAND.name}
                      width={120}
                      height={120}
                      priority
                      className="relative rounded-full shadow-2xl border-[3px] border-white object-cover"
                    />
                  </div>

                  <div className="text-center space-y-1">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-[#b05a7b]">
                      Salon de coiffure
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2b1019]">
                      {BRAND.name}
                    </h1>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FDE7F3] px-4 py-1.5 text-[11px] sm:text-xs shadow-sm border border-[#F9A8D4]/80">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#fb7185] opacity-60 animate-ping" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#EC4899]" />
                    </span>
                    Site en maintenance – ouverture prochaine
                  </span>
                </div>

                <div className="mt-6 sm:mt-8">
                  <BigCountdown target={LAUNCH_AT} />
                </div>
              </section>

              {/* COL DROITE : GALERIE */}
              <section className="flex flex-col gap-8">
                <header className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="h-[2px] w-10 rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899]" />
                    <span className="text-[11px] tracking-[0.22em] uppercase text-[#a0526e]">
                      Quelques réalisations
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#7a3f55]">
                    Un aperçu de l’univers RR COIFFURE pendant la mise à jour du site.
                  </p>
                </header>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {GALLERY.map((img, idx) => (
                    <li key={img.id}>
                      <button
                        type="button"
                        onClick={() => setLightbox(idx)}
                        className="group block w-full rounded-3xl outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F472B6] focus:ring-offset-[#FCE7F3] transition-transform duration-150 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#FDF2F8] border border-white/80 shadow-md">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* ESPACE RÉSERVÉ */}
            <section className="mt-10 rounded-2xl bg-white/85 border border-[#F9A8D4]/80 px-5 py-6 sm:px-7 sm:py-7 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">

                {/* Bloc Admin */}
                <div>
                  <h2 className="text-sm font-semibold text-[#3a1020]">
                    Espace réservé
                  </h2>
                  <p className="text-[11px] sm:text-xs text-[#7b4256] mt-1 mb-4">
                    Accès privé à l’équipe RR COIFFURE pour activer le site et gérer le contenu.
                  </p>

                  <form onSubmit={handleLogin} className="grid gap-3 max-w-md">
                    <label htmlFor="admin-pass" className="text-[11px] text-[#7b4256]">
                      Code d’accès
                    </label>

                    <div className="flex items-stretch gap-2">
                      <input
                        id="admin-pass"
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••"
                        autoComplete="current-password"
                        className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-[#2b1019] placeholder:text-[#d199b5] focus:outline-none focus:ring-2 focus:ring-[#F472B6] ${inputBorder}`}
                        aria-invalid={!!error}
                      />
                      <button
                        type="button"
                        onClick={() => setShow((s) => !s)}
                        className="rounded-lg border border-[#F9A8D4] bg-white px-3 py-2 text-[11px] sm:text-xs text-[#3a1020] hover:bg-[#FCE7F3] transition-colors"
                      >
                        {show ? "Masquer" : "Afficher"}
                      </button>
                    </div>

                    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}

                    <div className="mt-2 flex items-center justify-between">
                      <button
                        type="submit"
                        disabled={loading || !password.trim()}
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#F472B6] to-[#EC4899] px-5 py-2.5 text-sm sm:text-base font-medium text-white shadow-md disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <span>Se connecter</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Bloc Instagram */}
                <div className="pt-6 lg:pt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-[#F9A8D4]/60">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#a0526e] mb-2">
                    <span className="h-[2px] w-6 rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899]" />
                    <span>Instagram</span>
                  </div>

                  <h3 className="text-sm font-semibold text-[#3a1020]">
                    Suivez RR COIFFURE en direct
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#7b4256] mt-1">
                    Avant l’ouverture du site, découvrez les dernières colorations,
                    balayages et transformations sur notre compte Instagram.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#FDE7F3] px-3 py-1 text-[11px] text-[#b05a7b]">
                      Stories quotidiennes
                    </span>
                    <span className="rounded-full bg-[#FDF2F8] px-3 py-1 text-[11px] text-[#b05a7b]">
                      Avant / après
                    </span>
                    <span className="rounded-full bg-[#FDF2F8] px-3 py-1 text-[11px] text-[#b05a7b]">
                      Inspirations coiffure
                    </span>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-[12px] sm:text-sm font-medium text-[#2b1019]">
                      Compte officiel :{" "}
                      <span className="text-[#EC4899]">{BRAND.instagram}</span>
                    </p>

                    <a
                      href={BRAND.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] px-4 py-2 text-[11px] sm:text-xs font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      Ouvrir Instagram
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* FOOTER GLOBAL AVEC LIEN */}
            <footer className="mt-6 text-center text-[11px] text-[#8b4b60]">
              © 2025{" "}
              <a
                href="https://www.kosmonde.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#EC4899] transition-colors"
              >
                KOSMONDE
              </a>
              . Tous droits réservés.
            </footer>

          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/95 text-[#2b1019] text-xl shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F472B6]"
            >
              ×
            </button>

            <button
              type="button"
              onClick={() =>
                setLightbox((idx) => {
                  if (idx === null) return null;
                  const len = GALLERY.length;
                  return (idx - 1 + len) % len;
                })
              }
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 items-center justify-center rounded-full bg-white/95 text-[#2b1019] shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F472B6]"
              aria-label="Image précédente"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() =>
                setLightbox((idx) => {
                  if (idx === null) return null;
                  const len = GALLERY.length;
                  return (idx + 1) % len;
                })
              }
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 items-center justify-center rounded-full bg-white/95 text-[#2b1019] shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F472B6]"
              aria-label="Image suivante"
            >
              ›
            </button>

            <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden bg-black shadow-[0_24px_80px_rgba(0,0,0,0.6)] border border-white/40">
              <Image
                src={GALLERY[lightbox].src}
                alt={GALLERY[lightbox].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
