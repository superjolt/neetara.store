const OurStory = () => {
  return (
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
  );
};

export default OurStory;
