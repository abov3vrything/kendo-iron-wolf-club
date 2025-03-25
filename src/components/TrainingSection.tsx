
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Clock, Calendar, Map, Users } from 'lucide-react';

const ScheduleItem = ({ 
  day, 
  time, 
  type, 
  isVisible, 
  delay 
}: { 
  day: string; 
  time: string; 
  type: string; 
  isVisible: boolean;
  delay: number;
}) => (
  <div 
    className={cn(
      "flex items-center p-5 bg-white border border-gray-100 rounded-lg subtle-shadow transform transition-all duration-700",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    )}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="mr-4 text-kendo-red">
      <Calendar className="w-6 h-6" />
    </div>
    <div>
      <p className="font-medium text-kendo-black">{day}</p>
      <div className="flex items-center text-sm text-kendo-black/70 mt-1">
        <Clock className="w-4 h-4 mr-1" />
        <span>{time}</span>
        <span className="mx-2">•</span>
        <span>{type}</span>
      </div>
    </div>
  </div>
);

const TrainingSection = () => {
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
    <section id="treniruotės" ref={sectionRef} className="bg-white py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-kendo-paper" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}></div>
      
      <div className="section-container mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div 
              className={cn(
                "transform transition-all duration-700",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kendo-red bg-kendo-red/10 rounded-full">
                Treniruotės
              </span>
              <h2 className="heading-lg text-kendo-black mt-4 mb-6">
                Pradėkite savo kelią kartu su mumis
              </h2>
              <div className="w-20 h-1 bg-kendo-red mb-6"></div>
            </div>
            
            <div 
              className={cn(
                "space-y-5 transform transition-all duration-700 delay-300",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              <p className="body-md text-kendo-black/80">
                Treniruotės vyksta reguliariai pagal grafiką. Kviečiame prisijungti tiek pradedančiuosius, tiek pažengusiuosius. 
                Naujiems nariams suteikiame visą reikalingą įrangą treniruočių pradžiai.
              </p>

              <div className="flex items-start space-x-4 p-5 bg-kendo-paper rounded-lg">
                <div className="text-kendo-red mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-kendo-black">Pradedantiesiems</h4>
                  <p className="text-sm text-kendo-black/70 mt-1">
                    Naujiems nariams organizuojame specialias pradines treniruotes, kur supažindiname su pagrindais prieš prisijungiant prie bendrų treniruočių.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-kendo-paper rounded-lg">
                <div className="text-kendo-red mt-1">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-kendo-black">Treniruočių vieta</h4>
                  <p className="text-sm text-kendo-black/70 mt-1">
                    Vilniaus sporto centras "Vingio", Gerosios Vilties g. 3, Vilnius
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <a 
                  href="mailto:info@gelezinisvilkas.lt" 
                  className="inline-flex items-center bg-kendo-red text-white px-6 py-3 rounded-md font-medium hover:bg-kendo-red/90 transition-all duration-300 transform hover:translate-y-[-1px] hover:shadow-md"
                >
                  Susisiekite dėl treniruočių
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 
              className={cn(
                "heading-sm text-kendo-black mb-6 transform transition-all duration-700 delay-500",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              Treniruočių tvarkaraštis
            </h3>
            
            <div className="space-y-4">
              <ScheduleItem 
                day="Pirmadienis" 
                time="19:00 - 21:00" 
                type="Kendo (visi lygiai)" 
                isVisible={isVisible}
                delay={600}
              />
              <ScheduleItem 
                day="Trečiadienis" 
                time="19:00 - 21:00" 
                type="Iaido (visi lygiai)" 
                isVisible={isVisible}
                delay={700}
              />
              <ScheduleItem 
                day="Penktadienis" 
                time="19:00 - 21:00" 
                type="Kendo (visi lygiai)" 
                isVisible={isVisible}
                delay={800}
              />
              <ScheduleItem 
                day="Šeštadienis" 
                time="10:00 - 12:00" 
                type="Kendo ir Iaido (pažengusiems)" 
                isVisible={isVisible}
                delay={900}
              />
            </div>
            
            <div 
              className={cn(
                "mt-6 p-5 bg-kendo-paper rounded-lg border border-kendo-red/10 transform transition-all duration-700 delay-1000",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              <p className="text-sm text-kendo-black/80">
                <span className="text-kendo-red font-medium">Pastaba:</span> Tvarkaraštis gali būti keičiamas 
                prieš valstybines šventes ar organizuojant specialius renginius. Sekite mūsų pranešimus el. paštu 
                ar socialiniuose tinkluose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
