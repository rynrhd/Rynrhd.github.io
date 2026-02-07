import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle - Using current text color or hardcoded theme color */}
      <circle cx="50" cy="50" r="50" className="fill-primary" />
      
      {/* Inner White Ring */}
      <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="1" opacity="1" />

      {/* Plane Icon */}
      <g transform="translate(50, 26) scale(0.6)">
        <path d="M0 -12 L3 0 H14 L10 5 L11 12 L0 8 L-11 12 L-10 5 H-14 L-3 0 Z" fill="white" />
        <circle cx="0" cy="0" r="2" fill="#2E305F" />
      </g>

      {/* Main Pillars */}
      {/* Left Pillar - Curves Left */}
      <path 
        d="M 44 92 V 48 C 44 48 44 33 22 33 L 22 43 C 22 43 35 43 35 52 V 92 H 44 Z" 
        fill="white" 
      />
      
      {/* Right Pillar - Curves Right */}
      <path 
        d="M 56 92 V 48 C 56 48 56 33 78 33 L 78 43 C 78 43 65 43 65 52 V 92 H 56 Z" 
        fill="white" 
      />

      {/* The 'R' Bullet shape on the left */}
      <path 
        d="M 33 48 C 33 48 23 48 23 58 C 23 68 33 65 33 65 V 48 Z" 
        fill="white" 
      />
    </svg>
  );
};