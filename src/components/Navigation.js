import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-off-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-0 group mt-1 sm:mt-0"
        >
          <div className="relative">
            <img src="/assets/logo.png" alt="Membook" className="w-8 h-8 sm:w-9 sm:h-9 relative z-10" />
            <div className="absolute inset-0 bg-membook-green opacity-0 group-hover:opacity-30 blur-xl transition-opacity"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">membook</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-membook-green transition-colors font-medium relative group text-sm lg:text-base"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-membook-green group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-membook-green transition-colors font-medium relative group text-sm lg:text-base"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-membook-green group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#voice"
            className="text-gray-300 hover:text-membook-green transition-colors font-medium relative group text-sm lg:text-base"
          >
            Voice Assistant
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-membook-green group-hover:w-full transition-all duration-300"></span>
          </a>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 lg:px-6 py-2 lg:py-2.5 bg-membook-green text-off-black font-bold rounded-full hover:shadow-2xl hover:shadow-membook-green/50 transition-all relative overflow-hidden group text-sm lg:text-base"
          >
            <span className="relative z-10">Download</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-membook-green transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-off-black/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="px-4 py-4 space-y-3">
          <a
            href="#features"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-membook-green transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-membook-green transition-colors font-medium"
          >
            How It Works
          </a>
          <a
            href="#voice"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-membook-green transition-colors font-medium"
          >
            Voice Assistant
          </a>
          <a
            href="#download"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 px-6 bg-membook-green text-off-black font-bold rounded-full text-center hover:shadow-lg hover:shadow-membook-green/50 transition-all"
          >
            Download
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;

