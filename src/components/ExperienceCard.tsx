import React from 'react';
import { ExperienceItem } from '../data/experience';
import { GenpactLogo } from './GenpactLogo';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const isGenpact = experience.id === 'genpact';

  return (
    <div className="relative pl-6 sm:pl-8 pb-10 last:pb-2 group">
      {/* Connecting Vertical Timeline Line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-[#8B5CF6] to-[#6366F1]/20 group-last:hidden" />

      {/* Timeline Node Icon */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#10152A] border-2 border-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/30 group-hover:scale-110 transition-transform">
        <div className="w-2 h-2 rounded-full bg-[#A855F7]" />
      </div>

      {/* Experience Content Box */}
      <div className="glass-card rounded-2xl p-5 sm:p-7 glass-card-hover">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Company & Meta */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center gap-3">
              {/* Company Logo Badge with Official Genpact Logo */}
              {isGenpact ? (
                <div className="px-3 py-1.5 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center gap-2 font-bold text-white text-xs shadow-sm">
                  <GenpactLogo className="w-4 h-4 shrink-0" />
                  <span className="tracking-wide font-extrabold text-white lowercase">genpact</span>
                </div>
              ) : (
                <div className="px-3 py-1.5 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center gap-2 font-bold text-white text-xs shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#86BC25] inline-block" />
                  <span className="tracking-wide font-extrabold">Deloitte.</span>
                </div>
              )}

              {/* Duration Badge */}
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/15 text-[#C084FC] border border-[#8B5CF6]/30">
                {experience.badgeText}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-extrabold text-white">
              {experience.position}
            </h3>

            {experience.location && (
              <p className="text-xs text-[#A5AEC5] font-medium">
                {experience.location}
              </p>
            )}
          </div>

          {/* Right Column: Responsibilities */}
          <div className="lg:col-span-7">
            <ul className="space-y-2">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A5AEC5] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1.5 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
