
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
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
    <section id="apie-mus" ref={sectionRef} className="bg-white relative py-24 sm:py-32">
      {/* Diagonal divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-kendo-paper" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      
      <div className="section-container mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className={cn(
            "space-y-6 transform transition-all duration-1000",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div>
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kendo-red bg-kendo-red/10 rounded-full">
                Apie mus
              </span>
            </div>
            <h2 className="heading-lg text-kendo-black">
              Tradicijos ir disciplina šiuolaikiniame pasaulyje
            </h2>
            <div className="w-20 h-1 bg-kendo-red"></div>
            <p className="body-md text-kendo-black/80">
              Kendo klubas „Geležinis Vilkas" buvo įkurtas Vilniuje 2022 m. siekiant vystyti Kendo ir Iaido meną Lietuvoje, puoselėti Budo vertybes bei didinti šių japoniškų kovos menų žinomumą.
            </p>
            <p className="body-md text-kendo-black/80">
              Mūsų klubo nariai aktyviai dalyvauja tarptautinėse varžybose ir seminaruose, prisideda prie Lietuvos nacionalinės rinktinės veiklos. Esame oficialūs Lietuvos Kendo Asociacijos nariai.
            </p>
            <div className="pt-4">
              <a href="#kovos-menai" className="inline-flex items-center font-medium text-kendo-red hover:text-kendo-red/80 transition-colors">
                <span className="mr-2">Sužinoti apie kovos menus</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={cn(
            "relative transform transition-all duration-1000 delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="aspect-[4/5] rounded-xl overflow-hidden subtle-shadow">
              <img 
                src="https://images.unsplash.com/photo-1591333013074-cea191d64263?q=80&w=1000&auto=format&fit=crop"
                alt="Kendo practice" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card p-6 subtle-shadow rounded-xl max-w-xs">
              <div className="flex flex-col">
                <span className="text-kendo-red font-display text-xl font-semibold mb-1">Mūsų vertybės</span>
                <p className="text-kendo-black/80 text-sm">
                  Disciplina, pagarba, drąsa, nuolankumas ir nuoširdumas – esminės vertybės, kurias ugdome per kovos menus.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-6 mt-32 transform transition-all duration-1000 delay-500",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-kendo-red mb-2">2022</div>
            <p className="text-kendo-black/80 text-sm">Įkūrimo metai</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-kendo-red mb-2">30+</div>
            <p className="text-kendo-black/80 text-sm">Klubo narių</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-kendo-red mb-2">10+</div>
            <p className="text-kendo-black/80 text-sm">Tarptautinių turnyrų</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-kendo-red mb-2">LKA</div>
            <p className="text-kendo-black/80 text-sm">Oficialūs nariai</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
