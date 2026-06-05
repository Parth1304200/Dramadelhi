import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-[90px] flex items-center justify-between px-6 md:px-12 ${
          isScrolled
            ? 'bg-darkBg/90 backdrop-blur-md border-b border-white/5 shadow-2xl'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Left Side: Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-3 group">
          <img
            src="/images/lg1.png"
            alt="Drama Delhi Logo"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[#F5F5F5]/80 hover:text-[#D4AF37] text-sm tracking-widest uppercase transition-colors duration-300 font-medium nav-link-hover py-2"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button & Hamburger */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-block border border-[#D4AF37]/60 hover:border-[#D4AF37] text-[#F5F5F5] hover:text-[#1A1023] hover:bg-[#D4AF37] text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-none transition-all duration-300 btn-glow-gold"
          >
            Reserve A Table
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#F5F5F5] hover:text-[#D4AF37] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-darkBg/95 backdrop-blur-lg md:hidden transition-all duration-500 flex flex-col justify-center items-center ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-center">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                transitionDelay: `${idx * 75}ms`,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
              className="text-[#F5F5F5] hover:text-[#D4AF37] text-2xl font-playfair tracking-widest uppercase transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{
              transitionDelay: `${navItems.length * 75}ms`,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            className="mt-6 border border-[#D4AF37] text-[#D4AF37] hover:text-darkBg hover:bg-[#D4AF37] text-sm font-semibold uppercase tracking-widest px-8 py-3.5 transition-all duration-300"
          >
            Reserve A Table
          </a>
        </div>
      </div>
    </>
  );
}
