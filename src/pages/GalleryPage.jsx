import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import InfiniteMenu from '../components/InfiniteMenu';

const galleryItems = [
  {
    image: '/images/Screenshot 2026-06-04 151538.png',
    link: '#',
    title: 'Cinematic Lounge',
    description: 'Luxury seating inspired by classic films'
  },
  {
    image: '/images/Screenshot 2026-06-04 151813.png',
    link: '#',
    title: 'Signature Bar',
    description: 'Gourmet cocktails and elite spirits'
  },
  {
    image: '/images/Screenshot 2026-06-04 151800.png',
    link: '#',
    title: 'Neon Encore',
    description: 'A spotlight moment waiting for you'
  },
  {
    image: '/images/Screenshot 2026-06-04 150918.png',
    link: '#',
    title: 'Green Spotlight',
    description: 'Garnish-perfect signature cocktail'
  },
  {
    image: '/images/Screenshot 2026-06-04 150801.png',
    link: '#',
    title: 'Starry Flavors',
    description: 'Gourmet dishes fit for the stars'
  }
];

export default function GalleryPage({ onBack }) {
  const [hasWebGL, setHasWebGL] = useState(true);

  // Check WebGL 2 availability on mount
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#1A1023] relative overflow-x-hidden flex flex-col justify-start items-center py-24 px-6 md:px-12 lg:px-24">
      
      {/* Floating Back to Home Button */}
      <button
        onClick={onBack}
        className="absolute top-8 left-8 z-[30] flex items-center space-x-2 border border-white/20 hover:border-[#D4AF37] text-[#F5F5F5] hover:text-[#D4AF37] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 bg-[#1A1023]/60 backdrop-blur-md rounded-none shadow-xl"
      >
        <ArrowLeft size={14} />
        <span>Back to Home</span>
      </button>

      {/* Decorative Brand Text */}
      <div className="absolute top-8 right-8 z-[30] hidden sm:block text-right">
        <h3 className="font-playfair text-[#D4AF37] text-lg tracking-[0.2em] uppercase">
          Drama Delhi
        </h3>
        <p className="text-xs text-[#F5F5F5]/40 uppercase tracking-widest">
          {hasWebGL ? 'Infinite 3D Sphere' : 'Luxury 2D Showcase'}
        </p>
      </div>

      {hasWebGL ? (
        /* Immersive WebGL 3D Sphere Menu */
        <div className="w-full h-[80vh] relative z-[10] mt-8">
          <InfiniteMenu items={galleryItems} scale={1.0} />
          {/* Drag Instruction Banner */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[20] bg-black/40 backdrop-blur-md border border-white/5 px-6 py-2 pointer-events-none">
            <p className="text-[10px] text-[#F5F5F5]/50 tracking-[0.2em] uppercase">
              Drag/Swipe to rotate 3D sphere
            </p>
          </div>
        </div>
      ) : (
        /* Premium 2D Fallback Gallery */
        <div className="w-full max-w-7xl mx-auto mt-12 z-[10] text-center flex flex-col items-center">
          <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            Showcase
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F5F5] mb-16 tracking-wide">
            MOMENTS THAT DESERVE AN <span className="italic font-normal text-[#D4AF37]">ENCORE</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start text-left bg-[#24142E]/40 border border-white/5 p-6 hover:border-[#D4AF37]/30 transition-all duration-500 group"
              >
                {/* Framed Image */}
                <div className="luxury-frame w-full mb-6 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="luxury-frame-img w-full h-72 object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                </div>
                {/* Title */}
                <h3 className="font-playfair text-2xl text-[#D4AF37] mb-2">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-[#F5F5F5]/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
