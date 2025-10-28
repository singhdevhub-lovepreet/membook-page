import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-20 px-6 overflow-hidden">
      {/* Background effects - subtle */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-membook-green opacity-[0.02] blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-true-turquoise opacity-[0.02] blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative">
                <img src="/assets/logo.png" alt="Membook" className="w-14 h-14 relative z-10" />
                <div className="absolute inset-0 bg-membook-green opacity-0 group-hover:opacity-30 blur-xl transition-opacity"></div>
              </div>
              <span className="text-3xl font-bold tracking-tight">membook</span>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              Transform the way you capture, connect, and recall your digital life with 
              your hyperpersonalized AI assistant.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: '𝕏', label: 'Twitter' },
                { icon: '📧', label: 'Email' },
                { icon: '💬', label: 'Discord' }
              ].map((social, index) => (
                <motion.button
                  key={index}
                  onClick={(e) => e.preventDefault()}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-membook-green/20 hover:border-membook-green/50 transition-all duration-300 cursor-pointer group"
                  aria-label={social.label}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-wide">Product</h3>
            <ul className="space-y-4">
              {['Features', 'Pricing', 'FAQ', 'Roadmap'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="text-gray-400 hover:text-membook-green transition-all duration-200 bg-transparent border-0 cursor-pointer text-left text-base hover:translate-x-1 inline-block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-400 hover:text-membook-green transition-all duration-200 bg-transparent border-0 cursor-pointer text-left text-base hover:translate-x-1 inline-block"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-400 hover:text-membook-green transition-all duration-200 bg-transparent border-0 cursor-pointer text-left text-base hover:translate-x-1 inline-block"
                >
                  Blog
                </button>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-membook-green transition-all duration-200 text-base hover:translate-x-1 inline-block"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-membook-green transition-all duration-200 text-base hover:translate-x-1 inline-block"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-base">
            © {currentYear} Membook. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-base">Made with</span>
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="text-membook-green text-xl"
            >
              💚
            </motion.span>
            <span className="text-gray-500 text-base">for those who want to remember everything</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

