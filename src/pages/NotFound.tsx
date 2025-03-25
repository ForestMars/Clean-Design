
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/5 mb-6 animate-fade-in">
          <span className="text-2xl font-display font-medium">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Page not found
        </h1>
        <p className="text-lg text-black/70 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-block bg-black text-white hover:bg-black/90 rounded-full px-8 py-3 font-medium transition-all animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
