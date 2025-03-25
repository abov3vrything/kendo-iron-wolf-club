
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MartialArtsSection from "@/components/MartialArtsSection";
import TrainingSection from "@/components/TrainingSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Loading screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-kendo-red/30 border-t-kendo-red rounded-full animate-spin mb-4"></div>
            <p className="font-display text-kendo-black text-xl">Geležinis Vilkas</p>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MartialArtsSection />
        <TrainingSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
