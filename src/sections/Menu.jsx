import { motion } from 'framer-motion';

export default function Menu() {
  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="menu"
      className="py-24 px-6 md:px-12 lg:px-24 bg-[#24142E] relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute left-[-10%] top-[30%] w-[35%] h-[35%] rounded-full bg-[#4A235F]/15 blur-[120px] pointer-events-none" />

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
            Our Menu
          </span>
          
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[#F5F5F5] mb-6">
            A FEAST FIT FOR <br />
            <span className="italic font-normal text-[#D4AF37]">THE STARS</span>
          </h2>
          
          <div className="space-y-6 text-[#F5F5F5]/70 font-light text-base md:text-lg leading-relaxed mb-8">
            <p>
              Curated by master chefs, our culinary offerings pay homage to timeless flavors from around the globe. Every dish is prepared with the finest ingredients and styled to capture the grandeur and artistry of fine dining.
            </p>
            <p>
              From gourmet Indian delicacies with a contemporary twist to theatrical desserts, every item on the menu is designed to delight your senses and create a memorable dining experience.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleScrollClick(e, '#contact')}
            className="inline-block px-8 py-4 border border-[#F5F5F5]/20 hover:border-[#D4AF37] text-[#F5F5F5] hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none bg-transparent"
          >
            View Full Menu
          </a>
        </motion.div>

        {/* Right Side: Luxury Framed Card with Food Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[45%] flex justify-center lg:justify-end"
        >
          <div className="luxury-frame max-w-sm sm:max-w-md">
            <img
              src="/images/Screenshot 2026-06-04 150801.png"
              alt="Drama Delhi Exquisite Gourmet Dessert Presentation"
              className="luxury-frame-img w-full h-[400px] sm:h-[480px] object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
