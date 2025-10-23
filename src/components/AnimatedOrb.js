import React, { useEffect, useState } from 'react';
import './AnimatedOrb.css';

const AnimatedOrb = ({ state = 'idle', className = '' }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`orb-container ${className}`}>
      {/* Background glow */}
      <div className={`orb-glow ${state}`}></div>
      
      {/* Main orb layers */}
      <div className="orb-main">
        {/* Base rotating gradient layer */}
        <div 
          className={`orb-layer orb-layer-1 ${state}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        ></div>
        
        {/* Secondary flowing layer */}
        <div 
          className={`orb-layer orb-layer-2 ${state}`}
          style={{ transform: `rotate(${-rotation * 0.7}deg)` }}
        ></div>
        
        {/* Tertiary layer */}
        <div 
          className={`orb-layer orb-layer-3 ${state}`}
          style={{ transform: `rotate(${rotation * 0.5}deg)` }}
        ></div>
        
        {/* Inner bright core */}
        <div className={`orb-core ${state}`}></div>
      </div>
      
      {/* Pulsing rings */}
      <div className="orb-ring ring-1"></div>
      <div className="orb-ring ring-2"></div>
    </div>
  );
};

export default AnimatedOrb;

