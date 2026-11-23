import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-4 sm:py-5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Glass Card - Clean Two-Column Layout */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 border border-[#8B5CF6]/25 shadow-xl shadow-black/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-8 space-y-2.5">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                About Me
              </h2>
              <p className="text-xs sm:text-sm text-[#A5AEC5] leading-relaxed max-w-3xl">
                {personalInfo.aboutIntro}
              </p>
            </div>

            {/* Right Column: Contact Details with Vertical Divider */}
            <div className="lg:col-span-4 space-y-2.5 lg:border-l lg:border-[#8B5CF6]/20 lg:pl-8 text-xs sm:text-sm">
              {/* Location */}
              <div className="flex items-center gap-2.5 text-[#A5AEC5]">
                <div className="w-8 h-8 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0 shadow-inner">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-white">{personalInfo.location}</span>
              </div>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-[#A5AEC5] hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0 group-hover:border-[#8B5CF6] transition-colors shadow-inner">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">{personalInfo.phone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-[#A5AEC5] hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0 group-hover:border-[#8B5CF6] transition-colors shadow-inner">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium break-all">{personalInfo.email}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
