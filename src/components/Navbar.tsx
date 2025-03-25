
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out',
        isScrolled ? 'backdrop-blur-lg bg-white/80 shadow-sm py-3' : 'bg-transparent py-6',
        isMenuOpen && 'bg-white/95 backdrop-blur-lg shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <AnimatedLogo />
            <div className={cn(
              'font-display text-xl font-semibold transition-all duration-300',
              isScrolled ? 'opacity-100' : 'opacity-100'
            )}>
              <span className="text-kendo-black">Geležinis</span>
              <span className="text-kendo-red ml-1">Vilkas</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Apie mus', 'Kovos menai', 'Treniruotės', 'Galerija', 'Kontaktai'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className={cn(
                  'text-sm font-medium tracking-wide transition-all duration-300 hover:text-kendo-red relative',
                  isScrolled ? 'text-kendo-black' : 'text-kendo-black'
                )}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-kendo-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-kendo-black hover:text-kendo-red transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-all duration-300 ease-in-out" />
            ) : (
              <Menu className="w-6 h-6 transition-all duration-300 ease-in-out" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl absolute top-full left-0 right-0 shadow-sm animate-fade-in">
          <div className="py-4 px-6 flex flex-col space-y-4">
            {['Apie mus', 'Kovos menai', 'Treniruotės', 'Galerija', 'Kontaktai'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-kendo-black hover:text-kendo-red transition-colors text-base font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
