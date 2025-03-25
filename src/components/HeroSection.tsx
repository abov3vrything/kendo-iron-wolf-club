
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('apie-mus');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-kendo-paper pt-72">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlZWVlZWUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="space-y-8">
          {/* Subtitle */}
          <div 
            className={cn(
              "overflow-hidden",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
          >
            <p className="font-mono uppercase tracking-widest text-kendo-red text-sm sm:text-base reveal-mask delay-100">
              Kendo ir Iaido kovos menai Lietuvoje
            </p>
          </div>

          {/* Main title */}
          <div className={cn(
            "overflow-hidden",
            isLoaded ? "opacity-100" : "opacity-0"
          )}>
            <h1 className="heading-xl reveal-mask delay-200">
              <span className="text-kendo-black">Kendo klubas</span>
              <br />
              <span className="text-kendo-red font-display">Geležinis Vilkas</span>
            </h1>
          </div>

          {/* Description */}
          <div className={cn(
            "overflow-hidden max-w-2xl mx-auto",
            isLoaded ? "opacity-100" : "opacity-0"
          )}>
            <p className="body-lg text-kendo-black/80 reveal-mask delay-300">
              Tradiciniai japonų kovos menai, ugdantys discipliną, pagarbą ir dvasinę stiprybę. 
              Prisijunkite prie mūsų bendruomenės Vilniuje.
            </p>
          </div>

          {/* CTA buttons */}
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 pt-6",
            isLoaded ? "animate-fade-in-up opacity-100" : "opacity-0",
            "transition-all duration-1000 delay-700"
          )}>
            <a 
              href="#treniruotės" 
              className="group px-8 py-3 bg-kendo-black text-white font-medium rounded-md hover:bg-kendo-black/90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Prisijungti
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a 
              href="#kovos-menai" 
              className="group px-8 py-3 border border-kendo-black/20 bg-transparent text-kendo-black font-medium rounded-md hover:bg-kendo-black/5 transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Sužinoti daugiau
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div 
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer",
          isLoaded ? "animate-fade-in opacity-100" : "opacity-0",
          "transition-all duration-1000 delay-1000"
        )}
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-kendo-black/60 font-medium mb-2">Slinkite žemyn</span>
          <ChevronDown className="w-6 h-6 text-kendo-black/60 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
