import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const About = () => {
  useEffect(() => {
    document.title = "Neetara - About | Wear Your Story | Boutique";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About Neetara
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Where beauty meets passion, and every piece tells a story
              </p>
            </div>
          </div>
        </section>

        {/* What is Neetara */}
        <section className="py-16 md:py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                What Is Neetara?
              </h2>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                  Neetara is a boutique where beauty meets passion.
                  <br />
                  Everything we do is made with love, worn with pride.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We curate the finest collection of fashion pieces that celebrate individuality and express your unique style. From timeless classics to contemporary trends, every item in our boutique is carefully selected to inspire confidence and elegance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Our Story
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Founded with a vision to bring exceptional fashion to discerning customers, Neetara began as a dream to create something beautiful and meaningful. Our journey started with a simple belief: that fashion should be an expression of who you are.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Over the years, we've built relationships with talented designers and artisans who share our commitment to quality and craftsmanship. Each piece we offer has been thoughtfully chosen to represent the values we hold dear.
                  </p>
                </div>
                
                <div className="bg-gradient-soft rounded-2xl p-8 shadow-soft">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Since Day One
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    "We've been committed to bringing you fashion that not only looks beautiful but feels meaningful. Every piece we curate has a story, and we're honored to be part of yours."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Our Values
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white">✨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Quality First
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    We believe in offering only the finest pieces that meet our high standards for craftsmanship and durability.
                  </p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white">💝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Personal Touch
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Every customer is unique, and we provide personalized service to help you find pieces that truly reflect your style.
                  </p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white">🌸</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Sustainable Beauty
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    We're committed to supporting sustainable practices and working with brands that care about their environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Why Choose Neetara?
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-soft rounded-2xl p-8 shadow-soft">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Curated with Care
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Every item in our collection is hand-picked by our team of fashion experts who understand what makes a piece truly special. We don't just sell clothing; we curate experiences.
                  </p>
                </div>
                
                <div className="bg-gradient-soft rounded-2xl p-8 shadow-soft">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Exceptional Service
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    From the moment you discover us to long after your purchase, we're here to ensure your experience exceeds expectations. Your satisfaction is our greatest achievement.
                  </p>
                </div>
                
                <div className="bg-gradient-soft rounded-2xl p-8 shadow-soft">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Community & Connection
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Join a community of fashion lovers who appreciate quality, style, and the art of self-expression. Follow our journey and be part of the Neetara story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Discover Your Style?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Explore our collection and find pieces that speak to your unique sense of style.
              </p>
              <a 
                href="https://www.instagram.com/neetara_sarees/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                Shop Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
