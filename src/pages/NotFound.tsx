
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedLogo from "@/components/AnimatedLogo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-kendo-paper">
      <div className="text-center max-w-lg px-4">
        <div className="flex justify-center mb-8">
          <AnimatedLogo />
        </div>
        <h1 className="heading-xl text-kendo-black mb-4">404</h1>
        <p className="heading-sm text-kendo-red mb-8">Puslapis nerastas</p>
        <p className="body-md text-kendo-black/80 mb-8">
          Atsiprašome, bet ieškomas puslapis neegzistuoja arba buvo perkeltas.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-8 py-3 bg-kendo-black text-white font-medium rounded-md hover:bg-kendo-black/90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
        >
          Grįžti į pagrindinį puslapį
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
