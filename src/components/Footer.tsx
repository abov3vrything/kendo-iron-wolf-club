
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import AnimatedLogo from './AnimatedLogo';
import { Facebook, Instagram, Youtube, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-kendo-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <AnimatedLogo className="filter brightness-0 invert" />
              <div className="font-display text-xl font-semibold">
                <span className="text-white">Geležinis</span>
                <span className="text-kendo-red ml-1">Vilkas</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Oficialus Lietuvos Kendo Asociacijos narys, puoselėjantis japonų kovos menų tradicijas Lietuvoje nuo 2022 metų.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:info@gelezinisvilkas.lt" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Greitos nuorodos</h4>
            <ul className="space-y-2">
              {['Apie mus', 'Kovos menai', 'Treniruotės', 'Galerija', 'Kontaktai'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Kontaktai</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@gelezinisvilkas.lt" className="hover:text-white transition-colors">
                  info@gelezinisvilkas.lt
                </a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+37060012345" className="hover:text-white transition-colors">
                  +370 600 12345
                </a>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Gerosios Vilties g. 3, Vilnius</span>
              </li>
            </ul>
          </div>
          
          {/* Back to top and newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Naujienlaiškis</h4>
            <p className="text-gray-400 text-sm mb-4">
              Užsiprenumeruokite mūsų naujienlaiškį, kad gautumėte naujienas apie artėjančius renginius.
            </p>
            <div className="flex space-x-0">
              <input 
                type="email" 
                placeholder="Jūsų el. paštas" 
                className="flex-1 p-2 text-sm bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-kendo-red"
              />
              <button className="bg-kendo-red px-4 py-2 rounded-r-md text-white text-sm hover:bg-kendo-red/90 transition-colors">
                Prenumeruoti
              </button>
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center w-full mt-4 p-2 border border-gray-700 rounded-md text-gray-400 hover:text-white hover:border-gray-600 transition-all"
            >
              <span className="text-sm mr-2">Grįžti į viršų</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kendo klubas „Geležinis Vilkas". Visos teisės saugomos.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privatumo politika</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Naudojimosi sąlygos</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Slapukų nustatymai</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
