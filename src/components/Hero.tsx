
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const title = heroRef.current.querySelector(".hero-title");
      const subtitle = heroRef.current.querySelector(".hero-subtitle");
      const circle = heroRef.current.querySelector(".hero-circle");
      
      if (title && subtitle && circle) {
        (title as HTMLElement).style.transform = `translateY(${scrollY * 0.2}px)`;
        (subtitle as HTMLElement).style.transform = `translateY(${scrollY * 0.1}px)`;
        (circle as HTMLElement).style.transform = `translate3d(${scrollY * 0.05}px, ${-scrollY * 0.05}px, 0)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/3 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-80 hero-circle animate-float"></div>
      <div className="absolute bottom-1/4 left-[15%] w-40 h-40 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-60 animate-float" style={{ animationDelay: "1s" }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-black/5 rounded-full animate-fade-in">
          Minimalist Design Principles
        </span>
        
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight md:leading-tight lg:leading-tight mb-6 text-balance animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Design with purpose, <br />eliminate the unnecessary
        </h1>
        
        <p className="hero-subtitle text-lg md:text-xl text-black/70 mb-10 max-w-2xl mx-auto text-balance animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Combining aesthetic simplicity with functional integrity, our approach creates experiences that are both beautiful and intuitive.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <button className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-3 font-medium transition-all">
            Explore Design
          </button>
          <button className="text-black hover:bg-black/5 rounded-full px-8 py-3 font-medium transition-all">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Down arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-10 h-10 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
