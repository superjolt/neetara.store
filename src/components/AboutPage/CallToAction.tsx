const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
