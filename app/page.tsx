import SiteHeader from "@/components/home/SiteHeader"
import HeroSection from "@/components/home/HeroSection"
import AboutSection from "@/components/home/AboutSection"
import FeaturesSection from "@/components/home/FeaturesSection"
import ServicesSection from "@/components/home/ServicesSection"
import GallerySection from "@/components/home/GallerySection"
import ContactSection from "@/components/home/ContactSection"
import FinalCtaSection from "@/components/home/FinalCtaSection"
import SiteFooter from "@/components/home/SiteFooter"
import FormationPromoPopup from "@/components/home/FormationPromoPopup"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <FormationPromoPopup />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </div>
  )
}
