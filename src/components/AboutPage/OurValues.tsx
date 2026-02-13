const OurValues = () => {
  return (
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
  );
};

export default OurValues;
