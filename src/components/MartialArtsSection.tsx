
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import BlurImage from './BlurImage';

interface MartialArtCardProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
  isVisible: boolean;
  delay: number;
}

const MartialArtCard = ({ title, description, imageSrc, features, isVisible, delay }: MartialArtCardProps) => (
  <div 
    className={cn(
      "bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transform transition-all duration-1000",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    )}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="aspect-video relative overflow-hidden">
      <BlurImage 
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="heading-sm text-kendo-black mb-3">{title}</h3>
      <p className="text-kendo-black/80 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-kendo-red mr-2">•</span>
            <span className="text-kendo-black/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const MartialArtsSection = () => {
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
        threshold: 0.1,
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
    <section id="kovos-menai" ref={sectionRef} className="bg-kendo-paper py-24 sm:py-32 relative">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className={cn(
            "px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kendo-red bg-kendo-red/10 rounded-full inline-block mb-4 transform transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Kovos menai
          </span>
          <h2 className={cn(
            "heading-lg text-kendo-black mb-6 transform transition-all duration-700 delay-200",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Kendo ir Iaido – kelias į harmoniją
          </h2>
          <div className={cn(
            "w-20 h-1 bg-kendo-red mx-auto mb-6 transform transition-all duration-700 delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}></div>
          <p className={cn(
            "body-md text-kendo-black/80 max-w-2xl mx-auto transform transition-all duration-700 delay-400",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Mūsų klube praktikuojame du tradicinės japonų kovos menus, kurie vienas kitą papildo. 
            Kartu jie sudaro išsamią samurajų kalavijo meno praktiką.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <MartialArtCard 
            title="Kendo"
            description="Japoniška fechtavimo tradicija su bambuko kalaviju (shinai), kuri akcentuoja greitį, tikslumą ir mentalinę stiprybę."
            imageSrc="https://images.unsplash.com/photo-1612941880651-36f94b0e9195?q=80&w=1000&auto=format&fit=crop"
            features={[
              "Sportinė kovos meno forma su apsauginiu šarvu (bogu)",
              "Technikos, paremtos tradicinėmis japonų kalavijo technikomis",
              "Fizinis ir psichologinis treniruočių aspektas",
              "Kovos su priešininku situacijos"
            ]}
            isVisible={isVisible}
            delay={600}
          />
          
          <MartialArtCard 
            title="Iaido"
            description="Japoniškas kovos menas, kurio esmė – kalavijo traukimas, kirčių atlikimas ir kalavijo grąžinimas į makštis vienu judesiu."
            imageSrc="https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=1000&auto=format&fit=crop"
            features={[
              "Harmoningi ir preciziškai atliekami judesiai",
              "Dėmesys detalėms ir technikos tobulumui",
              "Mentalinė koncentracija ir dvasinė praktika",
              "Tradicinių kata (formų) atlikimas"
            ]}
            isVisible={isVisible}
            delay={800}
          />
        </div>
      </div>
    </section>
  );
};

export default MartialArtsSection;
