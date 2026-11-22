import React from 'react';

interface GenpactLogoProps {
  className?: string;
}

export const GenpactLogo: React.FC<GenpactLogoProps> = ({ className = 'w-4 h-4' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Genpact Logo"
    >
      {/* Official Genpact 3D Isometric Process Cube */}
      {/* Top Facet - Coral / Orange Red */}
      <polygon
        points="50,14 86,34 50,54 14,34"
        fill="#FF555F"
      />
      {/* Left Facet - Cyan / Turquoise */}
      <polygon
        points="14,34 50,54 50,90 14,70"
        fill="#00A8B5"
      />
      {/* Right Facet - Deep Navy Blue */}
      <polygon
        points="50,54 86,34 86,70 50,90"
        fill="#1E2C4C"
      />
      {/* Dimensional depth accents */}
      <polygon
        points="50,54 70,43 70,68 50,80"
        fill="#141E34"
        opacity="0.75"
      />
      <polygon
        points="50,54 30,43 30,68 50,80"
        fill="#00C4D4"
        opacity="0.4"
      />
    </svg>
  );
};
