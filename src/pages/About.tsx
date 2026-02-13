import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/AboutPage/HeroSection";
import WhatIsNeetara from "@/components/AboutPage/WhatIsNeetara";
import OurStory from "@/components/AboutPage/OurStory";
import OurValues from "@/components/AboutPage/OurValues";
import WhyChooseUs from "@/components/AboutPage/WhyChooseUs";
import CallToAction from "@/components/AboutPage/CallToAction";

const About = () => {
  useEffect(() => {
    document.title = "Neetara - About | Wear Your Story | Boutique";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <WhatIsNeetara />
        <OurStory />
        <OurValues />
        <WhyChooseUs />
        <CallToAction />
      </main>
    </div>
  );
};

export default About;
