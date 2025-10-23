import React from 'react';
import { motion } from 'framer-motion';

const PhoneMockupSection = () => {
  return (
    <>
      {/* Section 1: Share Screenshots */}
      <section className="relative min-h-screen py-20 md:py-32 px-6 bg-off-black flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20 relative z-10"
          >
            <p className="text-sm md:text-base uppercase tracking-widest text-membook-green font-semibold mb-4">
              Step-by-Step Guide
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading leading-tight">
              Capture From
              <br />
              <span className="gradient-text">Any App</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Save your discoveries from social media in seconds
            </p>
          </motion.div>

          {/* Three Mockups Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Step 1: Browse */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] mb-8">
              <img
                src="/assets/twitter-open.png"
                alt="Twitter Open"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-membook-green opacity-5 blur-3xl -z-10 scale-110"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-membook-green/20 flex items-center justify-center mb-4 backdrop-blur-sm border-2 border-membook-green/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-membook-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="px-3 py-1 bg-membook-green/10 border border-membook-green/20 rounded-full text-xs font-semibold text-membook-green mb-2">
                Step 1
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Browse</h3>
              <p className="text-gray-400 text-center">Discover content on social media</p>
            </div>
          </motion.div>

          {/* Step 2: Capture */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] mb-8">
              <img
                src="/assets/twitter-screenshot-capture.png"
                alt="Screenshot Captured"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-membook-green opacity-5 blur-3xl -z-10 scale-110"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-membook-green/20 flex items-center justify-center mb-4 backdrop-blur-sm border-2 border-membook-green/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-membook-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="px-3 py-1 bg-membook-green/10 border border-membook-green/20 rounded-full text-xs font-semibold text-membook-green mb-2">
                Step 2
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Capture</h3>
              <p className="text-gray-400 text-center">Take a screenshot of what interests you</p>
            </div>
          </motion.div>

          {/* Step 3: Share */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] mb-8">
              <img
                src="/assets/twitter-screenshot-share.png"
                alt="Share with Membook"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-membook-green opacity-5 blur-3xl -z-10 scale-110"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-membook-green/20 flex items-center justify-center mb-4 backdrop-blur-sm border-2 border-membook-green/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-membook-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="px-3 py-1 bg-membook-green/10 border border-membook-green/20 rounded-full text-xs font-semibold text-membook-green mb-2">
                Step 3
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Share</h3>
              <p className="text-gray-400 text-center">Share to Membook - your AI assistant learns from you</p>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Share URLs */}
    <section className="relative min-h-screen py-20 md:py-32 px-6 bg-off-black flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative z-10"
        >
          <p className="text-sm md:text-base uppercase tracking-widest text-true-turquoise font-semibold mb-4">
            Universal Saving
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading leading-tight">
            Save <span className="gradient-text">Any Link</span>
            <br />
            <span className="text-white/90">From Anywhere</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Works with every browser and app on your device
          </p>
        </motion.div>

        {/* Three Mockups Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Step 1: Share URL */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] mb-8">
              <img
                src="/assets/url-share.png"
                alt="Share URL"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-true-turquoise opacity-5 blur-3xl -z-10 scale-110"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-true-turquoise/20 flex items-center justify-center mb-4 backdrop-blur-sm border-2 border-true-turquoise/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-true-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="px-3 py-1 bg-true-turquoise/10 border border-true-turquoise/20 rounded-full text-xs font-semibold text-true-turquoise mb-2">
                Step 1
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Share URL</h3>
              <p className="text-gray-400 text-center">Share links from any browser or app</p>
            </div>
          </motion.div>

          {/* Step 2: Capture (reused) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] mb-8">
              <img
                src="/assets/twitter-screenshot-capture.png"
                alt="Processing"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-membook-green opacity-5 blur-3xl -z-10 scale-110"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-membook-green/20 flex items-center justify-center mb-4 backdrop-blur-sm border-2 border-membook-green/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-membook-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="px-3 py-1 bg-membook-green/10 border border-membook-green/20 rounded-full text-xs font-semibold text-membook-green mb-2">
                Step 2
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Process</h3>
              <p className="text-gray-400 text-center">Content is automatically extracted</p>
            </div>
          </motion.div>

          {/* Step 3: Share (reused) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] mb-8">
              <img
                src="/assets/twitter-screenshot-share.png"
                alt="Save to Knowledge"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-membook-green opacity-5 blur-3xl -z-10 scale-110"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-membook-green/20 flex items-center justify-center mb-4 backdrop-blur-sm border-2 border-membook-green/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-membook-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <div className="px-3 py-1 bg-membook-green/10 border border-membook-green/20 rounded-full text-xs font-semibold text-membook-green mb-2">
                Step 3
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Save</h3>
              <p className="text-gray-400 text-center">Your AI assistant remembers everything</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PhoneMockupSection;
