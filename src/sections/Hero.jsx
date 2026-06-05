import { motion } from 'framer-motion';

export default function Hero() {
  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen lg:h-screen flex flex-col lg:flex-row items-center justify-between pt-[90px] px-6 md:px-12 lg:px-24 bg-[#1A1023] relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#63327D]/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#4A235F]/20 blur-[150px] pointer-events-none" />

      {/* Left Column: Text & CTAs */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center items-start z-10 py-12 lg:py-0 text-left">
        
        {/* Decorative Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        >
          An Ode To Indian Cinema
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F5F5F5] leading-[1.1] mb-6 tracking-wide"
        >
          AN ODE TO <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#D4AF37]">INDIAN CINEMA</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-[#F5F5F5]/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg font-light"
        >
          Drama Delhi is more than a cafe. It is a cinematic dining destination where every table tells a story and every meal is a scene worth remembering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => handleScrollClick(e, '#contact')}
            className="px-8 py-4 bg-white text-[#1A1023] hover:bg-[#D4AF37] hover:text-[#1A1023] text-xs font-semibold uppercase tracking-widest transition-all duration-300 btn-glow-gold rounded-none"
          >
            Reserve A Table
          </a>
          <a
            href="#menu"
            onClick={(e) => handleScrollClick(e, '#menu')}
            className="px-8 py-4 border border-[#F5F5F5]/20 hover:border-[#D4AF37] text-[#F5F5F5] hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none bg-transparent"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Right Column: Venue Image with Parallax & Soft Shadow */}
      <div className="w-full lg:w-[50%] h-[400px] sm:h-[500px] lg:h-[75%] relative z-10 flex items-center justify-center mb-12 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="w-full h-full relative overflow-hidden rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 group"
        >
          {/* Image */}
          <div className="w-full h-full overflow-hidden relative">
            <img
              src="/images/Screenshot 2026-06-04 151538.png"
              alt="Drama Delhi Red Leather Booth Seating Interior"
              className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
            {/* Dark/Purple Overlay to merge with design */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1023] via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1023] via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>

          {/* Decorative Corner Borders */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#D4AF37]/50" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#D4AF37]/50" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#D4AF37]/50" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#D4AF37]/50" />
        </motion.div>
      </div>
    </section>
  );
}
