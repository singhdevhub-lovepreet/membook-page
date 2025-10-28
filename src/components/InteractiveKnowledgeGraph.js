import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';

const InteractiveKnowledgeGraph = () => {
  const networkRef = useRef(null);
  const networkInstanceRef = useRef(null);
  const floatingIntervalRef = useRef(null);

  useEffect(() => {
    if (!networkRef.current) return;

    // Generate dummy knowledge graph data - using only landing page colors
    const dummyNodes = [
      // Central concepts - Membook Green shades
      { id: 1, label: 'AI & Machine Learning', size: 40, color: '#B8E986', group: 'concept' },
      { id: 2, label: 'Productivity', size: 35, color: '#9CD65A', group: 'concept' },
      { id: 3, label: 'Startups', size: 38, color: '#B8E986', group: 'concept' },
      { id: 4, label: 'Design Patterns', size: 32, color: '#85C340', group: 'concept' },
      { id: 5, label: 'Climate Tech', size: 30, color: '#9CD65A', group: 'concept' },
      
      // Secondary concepts - Turquoise shades
      { id: 6, label: 'React', size: 25, color: '#20808D', group: 'tech' },
      { id: 7, label: 'LLMs', size: 28, color: '#2f5f5A', group: 'tech' },
      { id: 8, label: 'Time Management', size: 22, color: '#20808D', group: 'memory' },
      { id: 9, label: 'Y Combinator', size: 24, color: '#2f5f5A', group: 'memory' },
      { id: 10, label: 'Notion Tips', size: 20, color: '#20808D', group: 'memory' },
      { id: 11, label: 'GPT-4', size: 26, color: '#2f5f5A', group: 'tech' },
      { id: 12, label: 'UI/UX', size: 23, color: '#20808D', group: 'concept' },
      { id: 13, label: 'Meditation', size: 21, color: '#2f5f5A', group: 'memory' },
      { id: 14, label: 'Fundraising', size: 25, color: '#20808D', group: 'memory' },
      { id: 15, label: 'TypeScript', size: 22, color: '#2f5f5A', group: 'tech' },
      
      // Tertiary memories - Lighter green/turquoise
      { id: 16, label: 'Deep Work', size: 18, color: '#6BB89F', group: 'memory' },
      { id: 17, label: 'Tailwind CSS', size: 19, color: '#2f5f5A', group: 'tech' },
      { id: 18, label: 'Morning Routine', size: 17, color: '#6BB89F', group: 'memory' },
      { id: 19, label: 'Product Hunt', size: 20, color: '#85C340', group: 'memory' },
      { id: 20, label: 'Renewable Energy', size: 21, color: '#20808D', group: 'concept' },
      { id: 21, label: 'Vector DB', size: 22, color: '#2f5f5A', group: 'tech' },
      { id: 22, label: 'Remote Work', size: 19, color: '#6BB89F', group: 'memory' },
      { id: 23, label: 'Pitch Deck', size: 20, color: '#85C340', group: 'memory' },
      { id: 24, label: 'Framer Motion', size: 18, color: '#2f5f5A', group: 'tech' },
      { id: 25, label: 'Carbon Credits', size: 19, color: '#20808D', group: 'concept' },
      { id: 26, label: 'Twitter Thread', size: 17, color: '#6BB89F', group: 'memory' },
      { id: 27, label: 'Seed Round', size: 19, color: '#85C340', group: 'memory' },
      { id: 28, label: 'Neural Networks', size: 23, color: '#2f5f5A', group: 'tech' },
      { id: 29, label: 'Focus Techniques', size: 18, color: '#6BB89F', group: 'memory' },
      { id: 30, label: 'Sustainability', size: 20, color: '#9CD65A', group: 'concept' },
    ];

    // Create connections between nodes
    const dummyEdges = [
      // Main concept connections
      { from: 1, to: 7, value: 5 },
      { from: 1, to: 11, value: 5 },
      { from: 1, to: 28, value: 4 },
      { from: 1, to: 21, value: 3 },
      
      { from: 2, to: 8, value: 4 },
      { from: 2, to: 10, value: 3 },
      { from: 2, to: 13, value: 3 },
      { from: 2, to: 16, value: 5 },
      { from: 2, to: 18, value: 3 },
      { from: 2, to: 22, value: 4 },
      { from: 2, to: 29, value: 3 },
      
      { from: 3, to: 9, value: 5 },
      { from: 3, to: 14, value: 4 },
      { from: 3, to: 19, value: 3 },
      { from: 3, to: 23, value: 4 },
      { from: 3, to: 27, value: 3 },
      
      { from: 4, to: 6, value: 4 },
      { from: 4, to: 12, value: 5 },
      { from: 4, to: 15, value: 3 },
      { from: 4, to: 17, value: 3 },
      { from: 4, to: 24, value: 3 },
      
      { from: 5, to: 20, value: 5 },
      { from: 5, to: 25, value: 4 },
      { from: 5, to: 30, value: 4 },
      
      // Cross-connections
      { from: 1, to: 4, value: 2 },
      { from: 2, to: 3, value: 2 },
      { from: 3, to: 14, value: 3 },
      { from: 6, to: 15, value: 3 },
      { from: 6, to: 17, value: 2 },
      { from: 7, to: 11, value: 4 },
      { from: 7, to: 28, value: 3 },
      { from: 12, to: 4, value: 3 },
      { from: 15, to: 17, value: 2 },
      { from: 16, to: 18, value: 2 },
      { from: 20, to: 25, value: 3 },
      { from: 20, to: 30, value: 2 },
      { from: 26, to: 2, value: 2 },
    ];

    const nodes = new DataSet(dummyNodes);
    const edges = new DataSet(dummyEdges);

    const options = {
      nodes: {
        shape: 'dot',
        font: {
          size: 14,
          color: '#ffffff',
          face: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
          strokeWidth: 2,
          strokeColor: '#091f17'
        },
        borderWidth: 2,
        borderWidthSelected: 3,
        shadow: {
          enabled: true,
          color: 'rgba(184, 233, 134, 0.3)',
          size: 10,
          x: 2,
          y: 2
        }
      },
      edges: {
        width: 2,
        color: {
          color: 'rgba(184, 233, 134, 0.3)',
          highlight: 'rgba(184, 233, 134, 0.7)',
          hover: 'rgba(156, 214, 90, 0.6)'
        },
        smooth: {
          type: 'continuous',
          roundness: 0.5
        },
        shadow: {
          enabled: true,
          color: 'rgba(184, 233, 134, 0.15)',
          size: 4,
          x: 1,
          y: 1
        }
      },
      physics: {
        enabled: true,
        stabilization: {
          enabled: true,
          iterations: 200,
          updateInterval: 25,
          fit: true
        },
        barnesHut: {
          gravitationalConstant: -3500,
          centralGravity: 0.15,
          springLength: 95,
          springConstant: 0.04,
          damping: 0.12,
          avoidOverlap: 0.25
        },
        minVelocity: 0.3,
        maxVelocity: 8,
        solver: 'barnesHut',
        timestep: 0.4,
        adaptiveTimestep: true
      },
      interaction: {
        hover: true,
        tooltipDelay: 100,
        hideEdgesOnDrag: true,
        dragNodes: true,
        dragView: true,
        zoomView: false, // Disable zoom
        zoomSpeed: 0, // Disable zoom speed
        navigationButtons: false,
        keyboard: {
          enabled: false, // Disable keyboard zoom
          speed: { x: 10, y: 10, zoom: 0 }
        }
      },
      layout: {
        improvedLayout: true,
        randomSeed: 42
      },
      autoResize: true
    };

    const network = new Network(networkRef.current, { nodes, edges }, options);
    networkInstanceRef.current = network;

    // Fit the network after stabilization with zoom
    network.once('stabilizationIterationsDone', () => {
      // Responsive zoom level - more zoomed in on mobile
      const isMobile = window.innerWidth < 768;
      const zoomScale = isMobile ? 1.8 : 1.4; // More zoom on mobile
      
      network.fit({
        animation: {
          duration: 1000,
          easingFunction: 'easeInOutQuad'
        },
        scale: zoomScale
      });

      // Disable zoom completely
      network.setOptions({
        interaction: {
          zoomView: false,
          zoomSpeed: 0
        }
      });

      // Start gentle horizontal floating motion
      floatingIntervalRef.current = setInterval(() => {
        // Check if network still exists before trying to use it
        if (!networkInstanceRef.current || !networkRef.current) {
          if (floatingIntervalRef.current) {
            clearInterval(floatingIntervalRef.current);
            floatingIntervalRef.current = null;
          }
          return;
        }

        try {
          // Add small random forces to random nodes to keep them moving gently (horizontal only)
          const nodeIds = nodes.getIds();
          const numNodesToNudge = Math.floor(Math.random() * 2) + 1; // Nudge 1-2 nodes
          
          for (let i = 0; i < numNodesToNudge; i++) {
            const randomNodeId = nodeIds[Math.floor(Math.random() * nodeIds.length)];
            
            // Apply very small random velocity in horizontal direction only
            const positions = networkInstanceRef.current.getPositions([randomNodeId]);
            if (positions && positions[randomNodeId]) {
              const pos = positions[randomNodeId];
              const direction = Math.random() > 0.5 ? 1 : -1; // Left or right
              const force = (2 + Math.random() * 4) * direction; // Reduced force
              
              networkInstanceRef.current.moveNode(randomNodeId, 
                pos.x + force, 
                pos.y // Keep Y position the same
              );
            }
          }
        } catch (error) {
          // If any error occurs (e.g., network destroyed), clear the interval
          if (floatingIntervalRef.current) {
            clearInterval(floatingIntervalRef.current);
            floatingIntervalRef.current = null;
          }
        }
      }, 3000); // Nudge every 3 seconds (less frequent)
    });

    // Disable node click information display
    network.on('click', (params) => {
      if (params.nodes.length > 0) {
        // Just highlight, don't show info
        network.selectNodes([params.nodes[0]]);
      }
    });

    // Prevent zoom with wheel events
    network.on('zoom', () => {
      // Reset zoom to prevent any zooming - responsive
      const isMobile = window.innerWidth < 768;
      const zoomScale = isMobile ? 1.8 : 1.4;
      
      network.moveTo({
        scale: zoomScale,
        animation: {
          duration: 100,
          easingFunction: 'easeInOutQuad'
        }
      });
    });

    // Add some hover effects
    network.on('hoverNode', () => {
      if (networkRef.current) {
        networkRef.current.style.cursor = 'pointer';
      }
    });

    network.on('blurNode', () => {
      if (networkRef.current) {
        networkRef.current.style.cursor = 'default';
      }
    });

    // Cleanup function
    return () => {
      // Clear the floating interval
      if (floatingIntervalRef.current) {
        clearInterval(floatingIntervalRef.current);
        floatingIntervalRef.current = null;
      }
      
      // Destroy the network instance
      if (networkInstanceRef.current) {
        try {
          networkInstanceRef.current.destroy();
        } catch (error) {
          // Ignore errors during cleanup
        }
        networkInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]" ref={networkRef} />
  );
};

export default InteractiveKnowledgeGraph;

