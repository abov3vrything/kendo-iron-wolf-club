
import { useEffect, useRef } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo = ({ className = "" }: AnimatedLogoProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;
    
    const paths = svgElement.querySelectorAll('path');
    
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      
      // Set up the starting position
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      
      // Define the animation
      path.animate(
        [
          { strokeDashoffset: length },
          { strokeDashoffset: 0 }
        ],
        {
          duration: 1500,
          delay: index * 150,
          fill: 'forwards',
          easing: 'cubic-bezier(0.5, 0, 0.5, 1)'
        }
      );
      
      // Fill in after the stroke animation
      setTimeout(() => {
        path.animate(
          [
            { fillOpacity: 0 },
            { fillOpacity: 1 }
          ],
          {
            duration: 300,
            fill: 'forwards',
            easing: 'ease-in-out'
          }
        );
      }, 1500 + (index * 150));
    });
  }, []);

  return (
    <svg 
      ref={svgRef}
      width="120" 
      height="120" 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized wolf head and kendo sword (simplified version) */}
      <path 
        d="M60 20C37.91 20 20 37.91 20 60C20 82.09 37.91 100 60 100C82.09 100 100 82.09 100 60C100 37.91 82.09 20 60 20Z" 
        stroke="#1A202C" 
        strokeWidth="2" 
        fill="#1A202C" 
        fillOpacity="0"
      />
      <path 
        d="M40 45L50 60L40 75M80 45L70 60L80 75M60 45V80M45 55H75" 
        stroke="#9B2C2C" 
        strokeWidth="3" 
        strokeLinecap="round" 
        fill="#9B2C2C" 
        fillOpacity="0"
      />
    </svg>
  );
};

export default AnimatedLogo;
