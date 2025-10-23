import React from 'react';
import { motion } from 'framer-motion';

const BentoSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effects - subtle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-true-turquoise opacity-[0.02] blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-membook-green opacity-[0.02] blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative z-10"
        >
          <p className="text-sm md:text-base uppercase tracking-widest text-membook-green font-semibold mb-4">
            Everything You Need
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading leading-tight">
            Built For Your
            <br />
            <span className="gradient-text">Personal AI Assistant</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Capture, connect, and recall everything that matters
          </p>
        </motion.div>

        {/* Bento Grid - Trendy Design */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 relative z-10 max-w-7xl mx-auto">
          {/* Large Feature - Top Left - App theme colors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative md:col-span-4 bg-gradient-to-br from-membook-green/20 to-true-turquoise/20 backdrop-blur-sm border border-membook-green/30 rounded-[2rem] p-8 md:p-10 overflow-hidden hover:scale-[1.02] transition-all duration-500 min-h-[300px] flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg className="w-full h-full text-membook-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">
                AI That Learns From You
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                Every piece of content automatically connects. Your AI assistant discovers relationships between your memories, becoming uniquely yours.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-membook-green/20 border border-membook-green/30 rounded-full text-sm text-membook-green font-semibold">
                Auto-linking
              </span>
              <span className="px-4 py-2 bg-true-turquoise/20 border border-true-turquoise/30 rounded-full text-sm text-true-turquoise font-semibold">
                AI-powered
              </span>
            </div>
          </motion.div>

          {/* Tall Feature - Top Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative md:col-span-2 md:row-span-2 bg-gradient-to-br from-peacock/40 to-off-black/60 backdrop-blur-sm border border-true-turquoise/30 rounded-[2rem] p-8 overflow-hidden hover:scale-[1.02] transition-all duration-500 min-h-[300px] flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-full h-full text-true-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-heading">
                Voice Search
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Ask questions naturally and your AI assistant responds with personalized answers
              </p>
            </div>
            <div className="mt-auto">
              <div className="w-12 h-12 rounded-2xl bg-true-turquoise/20 border border-true-turquoise/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-true-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Wide Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative md:col-span-2 bg-gradient-to-br from-apricot/20 to-terra-cotta/20 backdrop-blur-sm border border-apricot/30 rounded-[2rem] p-8 overflow-hidden hover:scale-[1.02] transition-all duration-500 min-h-[200px]"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg className="w-full h-full text-apricot" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white font-heading">
              Screenshots
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
                Capture and save from any app, instantly processed
              </p>
          </motion.div>

          {/* Square Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative md:col-span-2 bg-gradient-to-br from-true-turquoise/20 to-plex-blue/20 backdrop-blur-sm border border-true-turquoise/30 rounded-[2rem] p-8 overflow-hidden hover:scale-[1.02] transition-all duration-500 min-h-[200px]"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg className="w-full h-full text-true-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white font-heading">
              URL Saving
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Share links from any browser
            </p>
          </motion.div>

          {/* Bottom Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group relative md:col-span-4 bg-gradient-to-br from-sky/20 to-true-turquoise/20 backdrop-blur-sm border border-sky/30 rounded-[2rem] p-8 md:p-10 overflow-hidden hover:scale-[1.02] transition-all duration-500 min-h-[280px]"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg className="w-full h-full text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">
              Lightning Fast Search
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
              Find anything in milliseconds with semantic search. Natural language understanding means you can search the way you think.
            </p>
            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                <div className="text-xl md:text-2xl font-bold text-membook-green mb-1">&lt;100ms</div>
                <div className="text-xs md:text-sm text-gray-300">Speed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                <div className="text-xl md:text-2xl font-bold text-true-turquoise mb-1">∞</div>
                <div className="text-xs md:text-sm text-gray-300">Links</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                <div className="text-xl md:text-2xl font-bold text-apricot mb-1">24/7</div>
                <div className="text-xs md:text-sm text-gray-300">Active</div>
              </div>
            </div>
          </motion.div>

          {/* Small bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="group relative md:col-span-2 bg-gradient-to-br from-membook-green/20 to-membook-green/10 backdrop-blur-sm border border-membook-green/30 rounded-[2rem] p-8 overflow-hidden hover:scale-[1.02] transition-all duration-500 min-h-[200px] flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center mx-auto">
                <svg className="w-full h-full text-membook-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                & Much More
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;

