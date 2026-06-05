import { motion } from 'framer-motion';

export default function Events() {
  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="events"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden min-h-[450px] flex items-center justify-center text-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Screenshot 2026-06-04 151813.png"
          alt="Drama Delhi Bar Area Event Venue"
          className="w-full h-full object-cover"
        />
        {/* Deep Purple/Black Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1023]/95 via-[#4A235F]/85 to-[#1A1023]/95 mix-blend-multiply z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1023] via-transparent to-[#1A1023] opacity-80 z-2" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase block mb-4"
        >
          Special Events
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F5F5] mb-6 tracking-wide"
        >
          EVENTS THAT STEAL THE <span className="italic font-normal text-[#D4AF37]">SPOTLIGHT</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#F5F5F5]/80 text-base md:text-lg font-light leading-relaxed max-w-2xl mb-10"
        >
          From high-energy Bollywood theme nights and acoustic live gigs to exclusive DJ sessions, experience the most happening evenings in Connaught Place.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="#contact"
            onClick={(e) => handleScrollClick(e, '#contact')}
            className="inline-block px-8 py-4 border border-[#F5F5F5]/20 hover:border-[#D4AF37] text-[#F5F5F5] hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none bg-transparent btn-glow-gold"
          >
            View Events
          </a>
        </motion.div>

      </div>
    </section>
  );
}
