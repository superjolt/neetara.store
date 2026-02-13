const WhyChooseUs = () => {
  return (
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
  );
};

export default WhyChooseUs;
