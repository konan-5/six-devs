import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import CardsSection from "@/components/sections/cards-section";
import TechnicalDomains from "@/components/sections/technical-domains";
import IntelligentSystems from "@/components/sections/intelligent-systems";
import DecentralizedProtocols from "@/components/sections/decentralized-protocols";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CardsSection />
        <TechnicalDomains />
        <IntelligentSystems />
        <DecentralizedProtocols />
        
      </main>
      <Footer />
    </>
  );
}
