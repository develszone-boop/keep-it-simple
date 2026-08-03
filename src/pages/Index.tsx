import HeroCarousel from "@/components/HeroCarousel";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import ProcessPreview from "@/components/ProcessPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import FAQPreview from "@/components/FAQPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroCarousel />
      <Clients />
      <About />
      <Philosophy />
      <Services />
      <ProcessPreview />
      <Stats />
      <PortfolioPreview />
      <Testimonials />
      <FAQPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
