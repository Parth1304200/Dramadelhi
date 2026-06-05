import { motion } from 'framer-motion';
import { Theater, Utensils, Mic, Camera } from 'lucide-react';

const features = [
  {
    Icon: Theater,
    title: 'Cinematic Ambience',
    description: 'Step into a world inspired by Bollywood storytelling, custom-lit booths, and timeless cinema classics.'
  },
  {
    Icon: Utensils,
    title: 'Exquisite Menu',
    description: 'A perfect blend of gourmet global cuisine, signature recipes, and theatrical food presentations.'
  },
  {
    Icon: Mic,
    title: 'Live Entertainment',
    description: 'Enjoy live gigs, acoustic sets, DJ nights, and high-energy performances that steal the spotlight.'
  },
  {
    Icon: Camera,
    title: 'Instagram Worthy',
    description: 'Beautifully designed backdrops, neon signboards, and stunning corners made for the camera.'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1A1023] relative">
      {/* Background glow */}
      <div className="absolute left-[35%] top-[10%] w-[30%] h-[30%] rounded-full bg-[#63327D]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card p-8 text-left rounded-none border border-white/5 flex flex-col justify-between h-72 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#63327D]/20 text-[#D4AF37] border border-[#D4AF37]/20 group-hover:border-[#D4AF37] group-hover:bg-[#63327D]/40 transition-all duration-500 mb-6">
                  <feat.Icon size={24} />
                </div>
                
                {/* Title */}
                <h3 className="font-playfair text-xl text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors duration-300 mb-3">
                  {feat.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-[#F5F5F5]/60 font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="w-8 h-[1px] bg-[#D4AF37]/30 group-hover:w-full group-hover:bg-[#D4AF37] transition-all duration-500 mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
