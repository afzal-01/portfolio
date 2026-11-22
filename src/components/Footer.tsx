import React from 'react';
import { MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080B18] border-t border-[#8B5CF6]/20 py-8 text-xs text-[#A5AEC5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] flex items-center justify-center font-bold text-white text-xs">
              AF
            </div>
            <span className="font-extrabold text-white uppercase tracking-wider text-sm">
              {personalInfo.name}
            </span>
          </div>

          {/* Center: Role */}
          <div className="text-center text-[#A5AEC5] font-medium">
            {personalInfo.role}
          </div>

          {/* Right: Location */}
          <div className="flex items-center gap-1.5 text-[#A5AEC5]">
            <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>{personalInfo.location}</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
