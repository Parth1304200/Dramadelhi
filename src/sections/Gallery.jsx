import { motion } from 'framer-motion';

const galleryItems = [
  {
    src: '/images/Screenshot 2026-06-04 151538.png',
    alt: 'Drama Delhi Red Leather Booth Seating',
    category: 'Ambience'
  },
  {
    src: '/images/Screenshot 2026-06-04 151813.png',
    alt: 'Drama Delhi Main Bar & Lounge',
    category: 'Lounge'
  },
  {
    src: '/images/Screenshot 2026-06-04 151800.png',
    alt: 'Drama Delhi Neon Branding Board',
    category: 'Decor'
  },
  {
    src: '/images/Screenshot 2026-06-04 150801.png',
    alt: 'Drama Delhi Signature Food Dish',
    category: 'Gourmet'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Gallery({ onExplore }) {
  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 px-6 md:px-12 lg:px-24 bg-[#1A1023] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute right-[-10%] bottom-[-15%] w-[40%] h-[40%] rounded-full bg-[#63327D]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center">
        {/* Label */}
        <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
          Gallery
        </span>
        
        {/* Title */}
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F5F5] mb-16 tracking-wide">
          MOMENTS THAT DESERVE AN <span className="italic font-normal text-[#D4AF37]">ENCORE</span>
        </h2>

        {/* 4-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative aspect-[3/4] overflow-hidden group shadow-[0_15px_30px_rgba(0,0,0,0.4)] border border-white/5 cursor-pointer rounded-sm"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Hover Dark/Purple Overlay & Category label */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1023] via-[#1A1023]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6 text-left" >
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.category}
                </span>
                <p className="text-sm font-playfair text-[#F5F5F5] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {item.alt}
                </p>
              </div>

              {/* Thin Border Overlay */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-[#D4AF37]/35 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Explore Button */}
        <button
          onClick={onExplore}
          className="inline-block px-8 py-4 border border-[#F5F5F5]/20 hover:border-[#D4AF37] text-[#F5F5F5] hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none bg-transparent cursor-pointer"
        >
          Explore Gallery
        </button>

      </div>
    </section>
  );
}
