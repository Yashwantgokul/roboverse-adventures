import HeroSection from "@/components/HeroSection";
import RobotsSection from "@/components/RobotsSection";
import GallerySection from "@/components/GallerySection";
import FutureSection from "@/components/FutureSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <RobotsSection />
      <GallerySection />
      <FutureSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
