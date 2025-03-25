
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form to your backend
    console.log({ name, email, message });
    alert('Ačiū už jūsų žinutę! Susisieksime su jumis artimiausiu metu.');
    setName('');
    setEmail('');
    setMessage('');
  };

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "El. paštas",
      info: "info@gelezinisvilkas.lt",
      action: "mailto:info@gelezinisvilkas.lt"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefono numeris",
      info: "+370 600 12345",
      action: "tel:+37060012345"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adresas",
      info: "Gerosios Vilties g. 3, Vilnius",
      action: "https://maps.google.com/?q=Gerosios+Vilties+g.+3+Vilnius"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Darbo laikas",
      info: "Pir-Pen: 18:00 - 21:00",
      action: "#treniruotės"
    }
  ];

  return (
    <section id="kontaktai" ref={sectionRef} className="bg-white py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-kendo-paper" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}></div>
      
      <div className="section-container mt-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn(
            "px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kendo-red bg-kendo-red/10 rounded-full inline-block mb-4 transform transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Kontaktai
          </span>
          <h2 className={cn(
            "heading-lg text-kendo-black mb-6 transform transition-all duration-700 delay-200",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Susisiekite su mumis
          </h2>
          <div className={cn(
            "w-20 h-1 bg-kendo-red mx-auto mb-6 transform transition-all duration-700 delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}></div>
          <p className={cn(
            "body-md text-kendo-black/80 mx-auto transform transition-all duration-700 delay-400",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Turite klausimų apie klubą ar treniruotes? Susisiekite su mumis bet kuriuo metu!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            {contactItems.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "flex items-start space-x-4 transform transition-all duration-700",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${500 + (index * 100)}ms` }}
              >
                <div className="bg-kendo-red/10 text-kendo-red p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-medium text-kendo-black">{item.title}</h4>
                  <a 
                    href={item.action} 
                    className="text-kendo-black/70 hover:text-kendo-red transition-colors"
                    target={item.title === "Adresas" ? "_blank" : undefined}
                    rel={item.title === "Adresas" ? "noopener noreferrer" : undefined}
                  >
                    {item.info}
                  </a>
                </div>
              </div>
            ))}
            
            {/* Map */}
            <div 
              className={cn(
                "h-64 bg-gray-200 rounded-lg overflow-hidden mt-8 subtle-shadow transform transition-all duration-700",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: "900ms" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.8104090753026!2d25.26764975227!3d54.676695172816814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9417e6e0f111%3A0x88cbdae79240adf4!2sGerosios%20Vilties%20g.%203%2C%20Vilnius%2003147!5e0!3m2!1sen!2slt!4v1653904536605!5m2!1sen!2slt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kendo klubas lokacija"
              ></iframe>
            </div>
          </div>
          
          {/* Contact form */}
          <div 
            className={cn(
              "bg-white p-8 rounded-xl subtle-shadow border border-gray-100 transform transition-all duration-700 delay-500",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <h3 className="heading-sm text-kendo-black mb-6">Parašykite mums</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-kendo-black mb-1">
                  Vardas
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-kendo-red/20 focus:border-kendo-red transition-all"
                  placeholder="Jūsų vardas"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-kendo-black mb-1">
                  El. paštas
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-kendo-red/20 focus:border-kendo-red transition-all"
                  placeholder="jusu@email.lt"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-kendo-black mb-1">
                  Žinutė
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-kendo-red/20 focus:border-kendo-red transition-all"
                  placeholder="Jūsų žinutė..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full bg-kendo-black text-white p-3 rounded-md font-medium hover:bg-kendo-black/90 transition-all transform hover:translate-y-[-1px] hover:shadow-md"
              >
                <span>Siųsti žinutę</span>
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
