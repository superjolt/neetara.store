const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-4 tracking-wide">
          Neetara
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 font-medium">
          Wear Your Story
        </p>
      </div>
    </section>
  );
};

export default HeroSection;