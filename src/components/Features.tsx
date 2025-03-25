
import { useEffect, useRef } from "react";

const features = [
  {
    title: "Minimal Design",
    description: "Focusing on essential elements, removing everything that doesn't serve a purpose.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Intuitive Experience",
    description: "Creating interfaces that feel natural and predictable, requiring minimal learning.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    title: "Functional Integrity",
    description: "Every element serves a clear purpose, with form following function at all times.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
  },
  {
    title: "Visual Harmony",
    description: "Creating balanced compositions where all elements work together cohesively.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-content');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="features" ref={sectionRef} className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-black/5 rounded-full reveal-content">
            Core Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 reveal-content">
            Less, but better
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto reveal-content">
            Every detail is meticulously considered to create a seamless experience that feels intuitive and effortless.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-panel p-8 rounded-2xl reveal-content"
            >
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">{feature.title}</h3>
              <p className="text-black/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-white shadow-sm border border-black/5 rounded-full px-6 py-3 reveal-content">
            <span className="text-sm text-black/70">
              "Good design is as little design as possible" — <span className="font-medium">Dieter Rams</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
