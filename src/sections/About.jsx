import { motion } from 'framer-motion';

export default function About() {
  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 bg-[#24142E] relative overflow-hidden"
    >
      {/* Decorative background circle */}
      <div className="absolute right-[-10%] top-[20%] w-[35%] h-[35%] rounded-full bg-[#63327D]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[48%] text-left"
        >
          <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            About Us
          </span>
          
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[#F5F5F5] mb-6">
            WHERE STORIES <br />
            <span className="italic font-normal text-[#D4AF37]">COME ALIVE</span>
          </h2>
          
          <div className="space-y-6 text-[#F5F5F5]/70 font-light text-base md:text-lg leading-relaxed mb-8">
            <p>
              Located in the heart of Connaught Place, Drama Delhi brings the magic of Indian cinema to life. We are a cinematic dining destination where signature flavors, theatrical interiors, and a vibrant atmosphere create an unforgettable experience.
            </p>
            <p>
              Every corner of our lounge is inspired by Bollywood storytelling, making it a perfect spot for film lovers, food connoisseurs, and anyone looking for a dining experience that feels like a block-buster production.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleScrollClick(e, '#contact')}
            className="inline-block px-8 py-4 border border-[#F5F5F5]/20 hover:border-[#D4AF37] text-[#F5F5F5] hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none bg-transparent"
          >
            Know More
          </a>
        </motion.div>

        {/* Right Side: Luxury Framed Card with Cocktail Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[45%] flex justify-center lg:justify-end"
        >
          <div className="luxury-frame max-w-sm sm:max-w-md">
            <img
              src="/images/Screenshot 2026-06-04 150918.png"
              alt="Drama Delhi Signature Green Cocktail Coupe Glass"
              className="luxury-frame-img w-full h-[400px] sm:h-[480px] object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
