import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/IndexPage/HeroSection";
import AboutSection from "@/components/IndexPage/AboutSection";
import LinksSection from "@/components/IndexPage/LinksSection";

const Index = () => {
  useEffect(() => {
    document.title = "Neetara - Home | Wear Your Story | Boutique";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <LinksSection />
      </main>
    </div>
  );
};

export default Index;