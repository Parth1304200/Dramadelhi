import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Menu from './sections/Menu';
import Gallery from './sections/Gallery';
import Events from './sections/Events';
import Booking from './sections/Booking';
import GalleryPage from './pages/GalleryPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  // Preloading / Progress Counter Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Small delay before hiding loader to allow fade transition
          setTimeout(() => {
            setLoading(false);
          }, 600);
          return 100;
        }
        // Random increment for realistic load speed
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Initialize Lenis Smooth Scroll and GSAP Animations after loading finishes
  useEffect(() => {
    if (loading) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initial page load animations for the visible content
    if (document.querySelectorAll('.gsap-reveal').length > 0) {
      gsap.fromTo(
        '.gsap-reveal',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, stagger: 0.2, ease: 'power3.out' }
      );
    }

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <>
      {/* Premium Page Loader */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-[#1A1023] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out">
          <div className="flex flex-col items-center max-w-xs text-center space-y-4">
            {/* Logo Image in Loader */}
            <img
              src="/images/lg1.png"
              alt="Drama Delhi Logo"
              className="h-20 w-auto object-contain mb-4 animate-pulse"
            />
            {/* Title / Brand Tagline */}
            <h2 className="font-playfair text-[#D4AF37] text-lg tracking-[0.2em] uppercase">
              An Ode To Indian Cinema
            </h2>
            {/* Loader Line Bar */}
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden mt-6">
              <div
                className="absolute left-0 top-0 h-full bg-[#D4AF37] transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            {/* Progress Count */}
            <span className="font-playfair italic text-[#F5F5F5]/60 text-sm mt-3">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </div>
      )}

      {/* Main Website Structure */}
      {!loading && (
        <div className="flex flex-col min-h-screen bg-[#1A1023]">
          {currentPage === 'home' ? (
            <>
              {/* Header/Navbar */}
              <Navbar />

              {/* Main Sections */}
              <main className="flex-grow">
                <Hero />
                <About />
                <Features />
                <Menu />
                <Gallery onExplore={() => { window.scrollTo(0, 0); setCurrentPage('gallery'); }} />
                <Events />
                <Booking />
              </main>

              {/* Footer */}
              <Footer />
            </>
          ) : (
            <GalleryPage onBack={() => { window.scrollTo(0, 0); setCurrentPage('home'); }} />
          )}
        </div>
      )}
    </>
  );
}
