import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-32 px-6">
      {/* Large background text for depth */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5">
        <div className="text-[15vw] font-bold text-white whitespace-nowrap select-none">
          START NOW
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-peacock via-true-turquoise to-peacock p-1"
        >
          <div className="bg-off-black rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Animated gradient orbs inside the card */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-membook-green opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-true-turquoise opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <p className="text-sm md:text-base uppercase tracking-widest text-membook-green font-semibold mb-6">
                Ready for Your Personal AI Assistant?
              </p>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-heading leading-tight">
                <span className="block text-white">Start Building</span>
                <span className="block gradient-text">Today</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join thousands who are capturing, connecting, and recalling everything that matters
              </p>

              {/* App Store Button */}
              <motion.a
                href="https://apps.apple.com/in/app/membook/id6753894964"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 bg-membook-green text-off-black font-semibold text-base sm:text-lg rounded-full hover:shadow-2xl hover:shadow-membook-green/50 transition-all duration-300"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download Now
              </motion.a>

              <p className="text-sm text-gray-400 mt-6">
                Available for iOS • Free to start
              </p>
            </motion.div>
          </div>

          {/* Animated gradient border */}
          <div className="absolute inset-0 opacity-75 blur-xl -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-membook-green via-true-turquoise to-membook-green animate-pulse"></div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { value: '100+', label: 'Active Users' },
            { value: '1K+', label: 'Memories Saved' },
            { value: '4.2★', label: 'App Store Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

