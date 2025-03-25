
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6",
        scrolled ? "py-4 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-medium tracking-tight">
          Design Skeptic
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Features", "Design", "About"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-black/70 hover:text-black transition-colors link-hover-effect"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button className="bg-black text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-black/90 transition-colors">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
