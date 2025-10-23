import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedOrb from './AnimatedOrb';

const OrbSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const orbScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1.1, 1.1, 0.9]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

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
          <p className="text-sm md:text-base uppercase tracking-widest text-membook-green font-semibold mb-4">
            Voice-Powered Intelligence
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading leading-tight">
            Ask <span className="gradient-text">Anything</span>
            <br />
            <span className="text-white/90">Get Instant Answers</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your personal AI assistant that understands your knowledge graph
          </p>
        </motion.div>

        {/* Orb Container */}
        <motion.div
          style={{ scale: orbScale, opacity: orbOpacity }}
          className="relative flex items-center justify-center mb-20"
        >
          <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
            <AnimatedOrb state="idle" className="w-full" />
          </div>
        </motion.div>

        {/* Example Queries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              question: '"What did I learn about AI last week?"',
              description: 'Contextual search across all your saved content'
            },
            {
              question: '"Show me articles about design I saved"',
              description: 'Smart categorization and retrieval'
            },
            {
              question: '"What are my thoughts on productivity?"',
              description: 'Connect related ideas and memories'
            },
            {
              question: '"Find that Twitter thread about startups"',
              description: 'Natural language understanding'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-membook-green/50 transition-all duration-300"
            >
              <p className="text-lg md:text-xl font-medium text-membook-green mb-2 group-hover:text-white transition-colors">
                {item.question}
              </p>
              <p className="text-sm text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OrbSection;

