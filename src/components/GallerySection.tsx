
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import BlurImage from './BlurImage';

// Sample gallery images - in a real project, this would come from your API or CMS
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1583312708610-fe6bc4b25e25?q=80&w=1000&auto=format&fit=crop",
    alt: "Kendo competition",
    category: "competition"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1583312800896-e5a737f848f0?q=80&w=1000&auto=format&fit=crop",
    alt: "Kendo training",
    category: "training"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1613922242928-9d55ee5b6fa9?q=80&w=1000&auto=format&fit=crop",
    alt: "Iaido demonstration",
    category: "demonstration"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1596903307583-5aa18788fc5c?q=80&w=1000&auto=format&fit=crop",
    alt: "Club members",
    category: "group"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1613922728248-bfa63675b9eb?q=80&w=1000&auto=format&fit=crop",
    alt: "Club seminar",
    category: "seminar"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1555788186-21c8f92597bf?q=80&w=1000&auto=format&fit=crop",
    alt: "Equipment display",
    category: "equipment"
  }
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'Visi' },
    { id: 'competition', label: 'Varžybos' },
    { id: 'training', label: 'Treniruotės' },
    { id: 'seminar', label: 'Seminarai' },
    { id: 'demonstration', label: 'Demonstracijos' },
  ];

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

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="galerija" ref={sectionRef} className="bg-kendo-paper py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
      
      <div className="section-container mt-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn(
            "px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kendo-red bg-kendo-red/10 rounded-full inline-block mb-4 transform transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Galerija
          </span>
          <h2 className={cn(
            "heading-lg text-kendo-black mb-6 transform transition-all duration-700 delay-200",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Mūsų klubo akimirkos
          </h2>
          <div className={cn(
            "w-20 h-1 bg-kendo-red mx-auto mb-6 transform transition-all duration-700 delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}></div>
          <p className={cn(
            "body-md text-kendo-black/80 mx-auto transform transition-all duration-700 delay-400",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Pažvelkite į mūsų klubo veiklą, varžybas, treniruotes ir seminarus.
          </p>
        </div>
        
        {/* Category filters */}
        <div className={cn(
          "flex flex-wrap justify-center gap-2 mb-10 transform transition-all duration-700 delay-500",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-kendo-black text-white"
                  : "bg-white text-kendo-black/70 hover:bg-kendo-black/5"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className={cn(
                "overflow-hidden rounded-xl subtle-shadow transform transition-all duration-700 hover:shadow-md",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${600 + (index * 100)}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <BlurImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* View more button */}
        <div className={cn(
          "text-center mt-12 transform transition-all duration-700 delay-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-3 border border-kendo-black/20 rounded-md text-kendo-black font-medium hover:bg-kendo-black/5 transition-all duration-300"
          >
            Daugiau nuotraukų
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
