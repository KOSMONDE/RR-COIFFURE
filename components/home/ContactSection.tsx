import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative bg-gradient-to-b from-white to-[#ffe7f2]/50 py-16 sm:py-20"
    >
      {/* halos décoratifs */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-[-3rem] top-4 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-[-2rem] bottom-0 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
        {/* Col infos */}
        <div className="max-w-md space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff7fb] px-3 py-1 text-xs font-medium text-[#ec4899] ring-1 ring-pink-100/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ec4899]" />
            <span>Contact</span>
          </div>

          <h2
            id="contact-title"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Prenez contact avec{" "}
            <span className="bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              RR COIFFURE
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Une question, une demande spécifique ou un projet coiffure&nbsp;?
            Écrivez-nous ou appelez directement le salon, nous vous répondrons
            avec plaisir.
          </p>

          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-[#fee2f2] p-2 text-[#ec4899]">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Adresse</p>
                <p>Rue de la Gare 12</p>
                <p>1003 Lausanne</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-[#fee2f2] p-2 text-[#ec4899]">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Téléphone</p>
                <p>
                  <Link
                    href="tel:+41211234567"
                    className="hover:text-[#ec4899] transition-colors"
                  >
                    +41 21 123 45 67
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-[#fee2f2] p-2 text-[#ec4899]">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">E-mail</p>
                <p>
                  <Link
                    href="mailto:contact@rr-coiffure.com"
                    className="hover:text-[#ec4899] transition-colors"
                  >
                    contact@rr-coiffure.com
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-[#fee2f2] p-2 text-[#ec4899]">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Horaires</p>
                <p>Lundi – Samedi · 9h00 – 19h00</p>
                <p>Dimanche : fermé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Col formulaire */}
        <div className="w-full max-w-lg rounded-3xl bg-white/90 p-5 shadow-[0_18px_50px_rgba(148,27,99,0.12)] ring-1 ring-pink-100/80">
          <form
            action="mailto:contact@rr-coiffure.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-nom"
                  className="text-xs font-medium text-slate-700"
                >
                  Nom complet
                </label>
                <input
                  id="contact-nom"
                  name="Nom"
                  type="text"
                  required
                  className="w-full rounded-xl border border-pink-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-300 focus:border-[#ec4899] focus:ring-2 focus:ring-pink-200"
                  placeholder="Votre nom"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-medium text-slate-700"
                >
                  E-mail
                </label>
                <input
                  id="contact-email"
                  name="Email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-pink-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-[#ec4899] focus:ring-2 focus:ring-pink-200"
                  placeholder="vous@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-objet"
                className="text-xs font-medium text-slate-700"
              >
                Sujet
              </label>
              <input
                id="contact-objet"
                name="Sujet"
                type="text"
                className="w-full rounded-xl border border-pink-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-[#ec4899] focus:ring-2 focus:ring-pink-200"
                placeholder="Prise de rendez-vous, information, devis..."
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="Message"
                rows={4}
                required
                className="w-full rounded-xl border border-pink-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-[#ec4899] focus:ring-2 focus:ring-pink-200"
                placeholder="Expliquez-nous votre besoin ou votre projet coiffure."
              />
            </div>

            <p className="text-[11px] text-slate-500">
              En envoyant ce message, vous acceptez d&apos;être recontacté·e par
              l&apos;équipe RR COIFFURE pour répondre à votre demande.
            </p>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-[#ec4899] hover:to-[#f472b6]"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
