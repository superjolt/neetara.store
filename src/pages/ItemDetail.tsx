import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { getProduct } from "@/lib/products";
import { Button } from "@/components/ui/button";

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id || "");

  useEffect(() => {
    document.title = product
      ? `${product.name} | Neetara`
      : "Neetara - Shop | Wear Your Story | Boutique";
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 flex items-center justify-center">
          <p className="text-muted-foreground text-lg">Product not found.</p>
        </main>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in purchasing the "${product.name}" (₹${product.price.toLocaleString("en-IN")}). Could you share the payment details?`
  );
  const whatsappLink = `https://wa.me/918138923395?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/items"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Image */}
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-soft">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <span className="text-sm text-muted-foreground font-medium mb-2">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-6">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              <p className="text-foreground/80 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-3">Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full gap-2 text-base">
                  <MessageCircle className="w-5 h-5" />
                  Buy Now via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemDetail;
