import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      {/* Large background text for depth */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.02, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[18vw] md:text-[20vw] font-bold text-white whitespace-nowrap select-none"
          style={{ zIndex: 0 }}
        >
          MEMBOOK
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center max-w-6xl mx-auto text-center relative z-10"
      >
        {/* Logo with enhanced styling - smaller */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-membook-green opacity-20 blur-3xl"></div>
          <img 
            src="/assets/logo.png" 
            alt="Membook Logo" 
            className="w-20 h-20 md:w-24 md:h-24 mx-auto drop-shadow-2xl relative z-10"
          />
        </motion.div>

        {/* Small eyebrow text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base uppercase tracking-widest text-membook-green font-semibold mb-6"
        >
          Your Hyperpersonalized AI Assistant
        </motion.p>

        {/* Main Heading - More compact */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[0.9] font-heading px-4"
        >
          <span className="block text-white">Capture</span>
          <span className="block gradient-text">Everything</span>
          <span className="block text-white/90">Remember Forever</span>
        </motion.h1>

        {/* Subtitle - Simplified and cleaner */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
        >
          Transform screenshots, links, and thoughts with
          <br className="hidden md:block" />
          <span className="text-membook-green font-semibold"> your hyperpersonalized AI assistant</span>
        </motion.p>

        {/* CTA Buttons - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8"
        >
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-membook-green text-off-black font-bold text-base sm:text-lg rounded-full hover:shadow-2xl hover:shadow-membook-green/50 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Get Started Free
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Flowing mouse logo animation - contained within button */}
            <motion.div
              className="absolute top-1 right-1 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
              animate={{
                x: [0, 8, 0],
                y: [0, -4, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            >
              <svg className="w-3 h-3 text-off-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </motion.div>
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">See How It Works</span>
            {/* Flowing mouse logo animation - contained within button */}
            <motion.div
              className="absolute top-1 right-1 w-6 h-6 bg-membook-green/20 rounded-full flex items-center justify-center"
              animate={{
                x: [0, 8, 0],
                y: [0, -4, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut"
              }}
            >
              <svg className="w-3 h-3 text-membook-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Feature Pills - More subtle and compact with custom icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8"
        >
          {[
            { icon: 'camera', label: 'Screenshots', color: 'text-apricot' },
            { icon: 'link', label: 'URLs', color: 'text-true-turquoise' },
            { icon: 'chat', label: 'Social', color: 'text-membook-green' },
            { icon: 'mic', label: 'Voice', color: 'text-true-turquoise' }
          ].map((item, index) => (
            <div
              key={index}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm text-gray-400 flex items-center gap-2 cursor-default relative z-10"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                {item.icon === 'camera' && (
                  <svg className={`w-full h-full ${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {item.icon === 'link' && (
                  <svg className={`w-full h-full ${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                )}
                {item.icon === 'chat' && (
                  <svg className={`w-full h-full ${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )}
                {item.icon === 'mic' && (
                  <svg className={`w-full h-full ${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                )}
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;

