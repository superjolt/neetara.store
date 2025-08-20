const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            What Is Neetara?
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Neetara is a boutique where beauty meets passion.
              <br />
              Everything we do is made with love, worn with pride.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;