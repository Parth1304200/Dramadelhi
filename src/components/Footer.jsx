import { ArrowUp, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#home');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#130A1A] border-t border-white/5 pt-16 pb-8 px-6 md:px-12 text-[#F5F5F5]/70 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand & Logo */}
        <div className="flex flex-col space-y-4">
          <img
            src="/images/lg1.png"
            alt="Drama Delhi Logo"
            className="h-16 w-fit object-contain mb-2"
          />
          <p className="text-sm font-playfair italic text-[#D4AF37] tracking-widest uppercase">
            An Ode To Indian Cinema
          </p>
          <p className="text-xs text-[#F5F5F5]/40 max-w-xs leading-relaxed">
            Connaught Place's premier cinematic dining experience, blending the magic of Bollywood with gourmet global flavors.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Menu', href: '#menu' },
              { name: 'Gallery', href: '#gallery' },
              { name: 'Events', href: '#events' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Opening Hours */}
        <div>
          <h4 className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-6">
            Opening Hours
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <span className="block font-medium text-[#F5F5F5]/90">Monday – Thursday</span>
              <span className="text-xs text-[#F5F5F5]/50">12:00 PM – 1:00 AM</span>
            </li>
            <li>
              <span className="block font-medium text-[#F5F5F5]/90">Friday – Sunday</span>
              <span className="text-xs text-[#F5F5F5]/50">12:00 PM – 2:00 AM</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Socials */}
        <div>
          <h4 className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-6">
            Follow Us
          </h4>
          <p className="text-xs text-[#F5F5F5]/50 mb-4">
            Join the conversation and keep up with our spotlight events.
          </p>
          <div className="flex space-x-3">
            {[
              { Icon: Instagram, url: 'https://instagram.com' },
              { Icon: Linkedin, url: 'https://linkedin.com' },
              { Icon: Youtube, url: 'https://youtube.com' },
              { Icon: Mail, url: 'mailto:info@dramadelhi.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-[#F5F5F5]/80 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(212,175,55,0.4)]"
              >
                <social.Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#F5F5F5]/30">
          &copy; {new Date().getFullYear()} Drama Delhi. All Rights Reserved.
        </p>
        
        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1023] flex items-center justify-center transition-all duration-500 shadow-md group"
          aria-label="Back to Top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
}
