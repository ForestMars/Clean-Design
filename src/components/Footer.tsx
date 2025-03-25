
import { X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-black/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-xl font-display font-medium tracking-tight mb-4">
              Design Skeptic
            </div>
            <p className="text-black/70 max-w-md mb-6">
              Combining aesthetic minimalism with functional integrity to create experiences that are both beautiful and intuitive.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/design_camp_nyc" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 text-black/70 hover:bg-black/10 hover:text-black transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <X className="w-4 h-4" />
                <span className="text-sm">Follow us</span>
              </a>
            </div>
          </div>
          
          {[
            { 
              title: 'Company', 
              links: ['About', 'Careers', 'Contact', 'Press'] 
            },
            { 
              title: 'Resources', 
              links: ['Blog', 'Newsletter', 'Support', 'FAQs'] 
            }
          ].map((column, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-medium mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map(link => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-black/70 hover:text-black transition-colors link-hover-effect"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row md:items-center justify-between text-sm text-black/50">
          <div>© 2023 Design Skeptic. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
