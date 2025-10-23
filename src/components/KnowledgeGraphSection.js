import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import InteractiveKnowledgeGraph from './InteractiveKnowledgeGraph';

const KnowledgeGraphSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const graphScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const graphOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <p className="text-sm md:text-base uppercase tracking-widest text-true-turquoise font-semibold mb-4">
            Intelligent Connections
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading leading-tight">
            Your AI Assistant
            <br />
            <span className="gradient-text">Learns & Connects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every piece of content makes your AI assistant smarter and more personalized
          </p>
          <p className="text-sm md:text-base text-membook-green/70 mt-4 font-medium">
            ✨ Interactive • Drag nodes • & explore
          </p>
        </motion.div>

        {/* Interactive Graph Container */}
        <motion.div
          style={{ scale: graphScale, opacity: graphOpacity }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Interactive Network */}
          <div className="relative bg-gradient-to-br from-peacock/50 to-off-black border-2 border-white/10 rounded-3xl p-8">
            {/* Label */}
            <div className="absolute top-6 left-8 z-10 flex items-center gap-2">
              <div className="px-4 py-2 bg-membook-green/10 backdrop-blur-sm border border-membook-green/30 rounded-full">
                <span className="text-membook-green font-semibold text-sm">
                  Lovepreet's knowledge network
                </span>
              </div>
            </div>
            
            <InteractiveKnowledgeGraph />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-true-turquoise opacity-20 blur-3xl -z-10 scale-105"></div>
        </motion.div>

        {/* Features Grid - Enhanced with stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
        >
          {[
            {
              icon: '🧠',
              title: 'Smart Connections',
              description: 'AI automatically finds relationships between your memories and ideas',
              stat: 'Auto-linked'
            },
            {
              icon: '🔍',
              title: 'Instant Recall',
              description: 'Find anything you\'ve saved with natural language search',
              stat: '<500ms'
            },
            {
              icon: '📊',
              title: 'Visual Discovery',
              description: 'Explore your knowledge through interactive network graphs',
              stat: 'Interactive'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-membook-green/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-membook-green opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    {feature.icon === '🧠' && (
                      <svg className="w-full h-full text-membook-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {feature.icon === '🔍' && (
                      <svg className="w-full h-full text-membook-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    )}
                    {feature.icon === '📊' && (
                      <svg className="w-full h-full text-membook-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                  </div>
                  <div className="px-3 py-1 bg-membook-green/20 border border-membook-green/30 rounded-full text-xs font-semibold text-membook-green">
                    {feature.stat}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-membook-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeGraphSection;

