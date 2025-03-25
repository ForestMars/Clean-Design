
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with reveal-content class
    document.querySelectorAll(".reveal-content").forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll(".reveal-content").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Design Philosophy Section */}
      <div id="design" className="section bg-white">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-black/5 rounded-full reveal-content">
                Our Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 reveal-content">
                Form follows function, always
              </h2>
              <p className="text-lg text-black/70 mb-6 reveal-content">
                Good design is honest. It doesn't make a product more innovative, powerful or valuable than it really is. It does not attempt to manipulate the consumer with promises that cannot be kept.
              </p>
              <p className="text-lg text-black/70 mb-8 reveal-content">
                Every element serves a purpose, with careful attention to how it contributes to the overall experience.
              </p>
              <button className="bg-black text-white rounded-full px-6 py-3 font-medium hover:bg-black/90 transition-colors reveal-content">
                Explore Our Process
              </button>
            </div>
            <div className="reveal-content">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-xl bg-white shadow-sm border border-black/5"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-black/10"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 flex flex-col items-center justify-center">
                    <div className="w-0.5 h-full bg-black/10"></div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-50 rounded-full border border-black/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div id="about" className="section bg-gray-50">
        <div className="container-tight text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-black/5 rounded-full reveal-content">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 reveal-content">
            Clarity through simplicity
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto mb-12 reveal-content">
            By stripping away the unnecessary, we highlight what truly matters, creating designs that are both timeless and functional.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "01", title: "Analysis", desc: "Understanding the core problem and context" },
              { number: "02", title: "Reduction", desc: "Eliminating non-essential elements" },
              { number: "03", title: "Refinement", desc: "Perfecting every detail that remains" }
            ].map((step, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-2xl text-left reveal-content">
                <div className="font-display text-black/20 text-4xl mb-4">{step.number}</div>
                <h3 className="text-xl font-display font-medium mb-3">{step.title}</h3>
                <p className="text-black/70">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="inline-block reveal-content">
            <a href="#" className="group flex items-center space-x-2 text-black hover:text-black/70 transition-colors">
              <span className="font-medium">Read our full methodology</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="section bg-white">
        <div className="container-tight">
          <div className="glass-panel rounded-3xl p-10 md:p-16 text-center reveal-content">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Ready to simplify?
            </h2>
            <p className="text-lg text-black/70 max-w-xl mx-auto mb-10">
              Join us in creating experiences that prioritize clarity, functionality, and thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-3 font-medium transition-all">
                Get Started
              </button>
              <button className="text-black hover:bg-black/5 rounded-full px-8 py-3 font-medium transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
