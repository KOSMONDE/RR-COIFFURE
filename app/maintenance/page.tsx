"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// -----------------------------------------------------------------------------
// CONFIG
// -----------------------------------------------------------------------------
const ADDRESS = "Chem. de Maisonneuve 14b, 1219 Châtelaine";
const ADDRESS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const BRAND = {
  name: "RR COIFFURE",
  email: "contact@rr-coiffure.com",
  address: ADDRESS,
  addressLink: ADDRESS_LINK,
  hours: "Du mardi au samedi",
  logo: "/images/galerie/rr-logo.jpg", // ex: /public/images/galerie/rr-logo.jpg
  instagram: "@rr.coiffure",
  instagramLink: "https://www.instagram.com/rr.coiffure/",
};

const LAUNCH_AT = "2025-11-05T09:00:00+01:00";

// -----------------------------------------------------------------------------
// BIG COUNTDOWN
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

  if (isNaN(targetMs)) return null;
  if (left === null) return <div className="h-24" />;

  const { d, h, m, s } = left;
  const done = d === 0 && h === 0 && m === 0 && s === 0;
  if (done) return <p className="text-2xl sm:text-3xl font-bold">Lancement imminent</p>;

  const Cell = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="tabular-nums rounded-2xl bg-white/80 shadow px-5 py-4 sm:px-7 sm:py-6">
        <span className="block text-4xl sm:text-6xl font-extrabold">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-black/60">{label}</span>
    </div>
  );

  return (
    <div
      className="mt-2 grid grid-cols-4 gap-5 sm:gap-8"
      aria-live="polite"
      aria-label="Compte à rebours avant mise en ligne"
    >
      <Cell value={d} label="jours" />
      <Cell value={h} label="heures" />
      <Cell value={m} label="minutes" />
      <Cell value={s} label="secondes" />
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
] as const;

// -----------------------------------------------------------------------------
// PAGE
// -----------------------------------------------------------------------------
export default function MaintenancePage() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
      }
      if (lightbox !== null && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
        setLightbox((idx) => {
          if (idx === null) return null;
          const next = e.key === "ArrowRight" ? idx + 1 : idx - 1;
          const len = GALLERY.length;
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
        cache: "no-store",
      });
      const data = await res.json();
      if (!res.ok || data?.ok !== true) {
        setError(data?.error || "Erreur d'authentification");
        setLoading(false);
        return;
      }
      router.push("/"); // redirection vers le site. Le bouton Déconnexion vit côté site.
    } catch {
      setError("Erreur réseau");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFE6F4] via-[#F7B7DA] to-[#E98AC3] text-[#111] p-6">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo + titre */}
          <Image
            src={BRAND.logo}
            alt={BRAND.name}
            width={120}
            height={120}
            priority
            className="rounded-full shadow"
          />
          <h1 className="text-4xl font-extrabold">{BRAND.name}</h1>

          {/* État + compte à rebours */}
          <div className="flex flex-col items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm shadow">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              Maintenance en cours
            </span>
            <BigCountdown target={LAUNCH_AT} />
          </div>

          {/* Infos pratiques */}
          <section className="w-full mt-4">
            <div className="grid w-full gap-4 sm:grid-cols-3">
              <InfoCard
                k="Adresse"
                v={
                  <a
                    href={BRAND.addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {BRAND.address}
                  </a>
                }
              />
              <InfoCard
                k="Instagram"
                v={
                  <a
                    href={BRAND.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label="Ouvrir Instagram RR COIFFURE"
                  >
                    {BRAND.instagram}
                  </a>
                }
              />
              <InfoCard k="Horaires" v={BRAND.hours} />
            </div>
          </section>

          {/* Galerie */}
          <section className="w-full mt-10">
            <h2 className="text-left text-base font-semibold mb-4"></h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GALLERY.map((img, idx) => (
                <li key={img.id}>
                  <button
                    type="button"
                    onClick={() => setLightbox(idx)}
                    className="group block w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E98AC3] rounded-3xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-lg">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        priority={idx < 2}
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Espace réservé */}
          <div className="mt-10 w-full rounded-2xl bg-white/75 p-6 shadow">
            <h2 className="text-sm font-medium mb-3">Espace réservé</h2>
            <form onSubmit={handleLogin} className="grid gap-3 text-left">
              <label className="text-xs text-black/60" htmlFor="admin-pass">
                Code d’accès
              </label>
              <div className="flex items-stretch gap-2">
                <input
                  id="admin-pass"
                  type={show ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E98AC3]"
                  autoComplete="current-password"
                  aria-invalid={!!error}
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="rounded-lg border px-3 py-2 text-sm hover:bg-black/5"
                >
                  {show ? "Masquer" : "Afficher"}
                </button>
              </div>

              {error && <div className="text-sm text-red-600">{error}</div>}

              <div className="mt-1 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={loading || !password.trim()}
                  className="rounded-lg bg-[#E98AC3] px-4 py-2 text-white disabled:opacity-60"
                >
                  {loading ? "Connexion..." : "Se connecter"}
                </button>
                {/* Aucun bouton Déconnexion ici */}
              </div>
            </form>
          </div>

          <footer className="pt-4 text-center text-xs text-black/60">
            © {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.
          </footer>
        </div>
      </div>

      {/* Lightbox améliorée */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-black w-8 h-8 flex items-center justify-center rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E98AC3]"
              aria-label="Fermer l’image"
            >
              ×
            </button>

            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={GALLERY[lightbox].src}
                alt={GALLERY[lightbox].alt}
                fill
                sizes="90vw"
                className="object-contain bg-white"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// -----------------------------------------------------------------------------
// INFO CARD
// -----------------------------------------------------------------------------
function InfoCard({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/75 p-4 shadow text-left">
      <p className="text-xs text-black/60">{k}</p>
      <p className="font-medium">{v}</p>
    </div>
  );
}
