"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveFlowDiagram() {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Load and display the flow diagram SVG
  useEffect(() => {
    const loadSVG = () => {
      if (!svgContainerRef.current) return;

      const container = svgContainerRef.current;
      
      fetch('/asset/flow/simpledfd.svg')
        .then(response => response.text())
        .then(svgText => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
          const svgElement = svgDoc.querySelector('svg');
          if (svgElement && container) {
            // Set SVG dimensions and background color
            svgElement.removeAttribute('style');
            svgElement.setAttribute('style', 'width: 100%; height: auto; background: #f6f6f6;');
            
            // Fix background color in large rectangles
            const allRects = svgElement.querySelectorAll('rect');
            allRects.forEach((rect) => {
              const fill = rect.getAttribute('fill');
              const widthAttr = rect.getAttribute('width');
              const heightAttr = rect.getAttribute('height');
              
              // Check if this is a large background rectangle
              if ((widthAttr === '100%' || heightAttr === '100%') || 
                  (widthAttr && heightAttr && parseFloat(widthAttr) > 500 && parseFloat(heightAttr) > 500)) {
                
                // Change white backgrounds to gray
                if (!fill || fill === '#ffffff' || fill === 'white' || fill === '#fff' || 
                    fill.includes('light-dark(#ffffff') || fill.includes('rgb(255, 255, 255)')) {
                  rect.setAttribute('fill', '#f6f6f6');
                  rect.setAttribute('style', 'fill: #f6f6f6;');
                }
              }
            });
            
            container.innerHTML = '';
            container.appendChild(svgElement);
          }
        })
        .catch(error => console.error('Error loading SVG:', error));
    };

    setTimeout(loadSVG, 100);
  }, []);


  return (
    <div 
      ref={svgContainerRef}
      className="relative w-full max-w-[900px] mx-auto"
      style={{
        background: '#f6f6f6',
      }}
    >
      <div className="w-full h-[600px] flex items-center justify-center text-gray-400">
        Loading diagram...
      </div>
    </div>
  );
}
