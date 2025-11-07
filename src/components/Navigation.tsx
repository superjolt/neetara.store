import { Home, Store, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center gap-8 md:gap-16">
          <Link to="/" className="flex flex-col items-center gap-1 group transition-all hover:scale-105">
            <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
              <Home className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground">Home</span>
          </Link>
          
          <a 
            href="https://www.instagram.com/neetara_sarees/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 group transition-all hover:scale-105"
          >
            <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
              <Store className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground">Items</span>
          </a>
          
          <Link to="/about" className="flex flex-col items-center gap-1 group transition-all hover:scale-105">
            <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
              <Info className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;