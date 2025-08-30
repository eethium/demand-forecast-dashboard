
import React from 'react';

export const SparkleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path 
      d="M50 0 L55.9 23.2 L78.1 21.9 L61.2 38.8 L78.1 55.7 L55.9 54.4 L50 77.6 L44.1 54.4 L21.9 55.7 L38.8 38.8 L21.9 21.9 L44.1 23.2 Z" 
      fill="rgba(255, 255, 255, 0.2)" 
    />
  </svg>
);