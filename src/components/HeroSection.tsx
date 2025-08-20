import flower1 from "@/assets/flower1.png";
import flower2 from "@/assets/flower2.png";
import flower3 from "@/assets/flower3.png";
import flower4 from "@/assets/flower4.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Floating flowers - positioned absolutely for layering */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={flower1} 
          alt="Decorative flower" 
          className="absolute top-20 left-4 md:left-16 w-16 h-16 md:w-24 md:h-24 animate-float opacity-80"
          style={{ animationDelay: '0s' }}
        />
        <img 
          src={flower2} 
          alt="Decorative flower" 
          className="absolute top-32 left-24 md:left-48 w-20 h-20 md:w-32 md:h-32 animate-float opacity-90"
          style={{ animationDelay: '1s' }}
        />
        <img 
          src={flower3} 
          alt="Decorative flower" 
          className="absolute top-20 right-4 md:right-16 w-18 h-18 md:w-28 md:h-28 animate-float opacity-85"
          style={{ animationDelay: '2s' }}
        />
        <img 
          src={flower4} 
          alt="Decorative flower" 
          className="absolute top-40 right-16 md:right-32 w-14 h-14 md:w-20 md:h-20 animate-float opacity-75"
          style={{ animationDelay: '0.5s' }}
        />
        <img 
          src={flower1} 
          alt="Decorative flower" 
          className="absolute bottom-40 left-8 md:left-20 w-12 h-12 md:w-18 md:h-18 animate-float opacity-70"
          style={{ animationDelay: '1.5s' }}
        />
        <img 
          src={flower3} 
          alt="Decorative flower" 
          className="absolute bottom-32 right-8 md:right-20 w-16 h-16 md:w-24 md:h-24 animate-float opacity-80"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

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