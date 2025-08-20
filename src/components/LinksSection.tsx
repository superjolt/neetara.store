import { Instagram, Facebook, Youtube, Phone } from "lucide-react";

const LinksSection = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Insta Page",
      href: "https://www.instagram.com/neetara_label/",
      gradient: "from-purple-500 to-pink-500",
      external: true
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/NeetaraLabel",
      gradient: "from-blue-600 to-blue-500",
      external: true
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@Neetara_Label",
      gradient: "from-red-600 to-red-500",
      external: true
    },
    {
      icon: Phone,
      label: "91+ 8138923395",
      href: "tel:+918138923395",
      gradient: "from-gray-800 to-gray-700",
      external: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Links
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-6 bg-card/70 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${link.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
