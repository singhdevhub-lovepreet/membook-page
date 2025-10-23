import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BentoSection from './components/BentoSection';
import PhoneMockupSection from './components/PhoneMockupSection';
import KnowledgeGraphSection from './components/KnowledgeGraphSection';
import OrbSection from './components/OrbSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {

  return (
    <div className="relative w-full overflow-x-hidden bg-off-black">
      {/* Navigation */}
      <Navigation />

      {/* Background gradient effects with more layers - dimmed for readability */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-true-turquoise opacity-[0.03] blur-[150px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-membook-green opacity-[0.025] blur-[150px] rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-apricot opacity-[0.02] blur-[150px] rounded-full animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <div id="features">
          <BentoSection />
        </div>
        <div id="how-it-works">
          <PhoneMockupSection />
        </div>
        <KnowledgeGraphSection />
        <div id="voice">
          <OrbSection />
        </div>
        <div id="download">
          <CTASection />
        </div>
        <Footer />
      </div>
      <Analytics />
    </div>
  );
}

export default App;

