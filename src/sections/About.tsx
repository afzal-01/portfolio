import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-4 sm:py-5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Glass Card matching reference image */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 border border-[#8B5CF6]/25 shadow-xl shadow-black/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
            
            {/* Left: Profile Photo (Replaces AF box) */}
            <div className="lg:col-span-3 xl:col-span-2 flex justify-start lg:justify-center shrink-0">
              <div className="relative w-[105px] h-[125px] sm:w-[120px] sm:h-[140px] rounded-2xl overflow-hidden border-2 border-[#8B5CF6]/35 shadow-xl shadow-[#8B5CF6]/20 bg-[#10152A] group">
                <img
                  src={personalInfo.profileImage || "/images/profile.jpg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: 'center top' }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Middle: About text */}
            <div className="lg:col-span-5 xl:col-span-6 space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                About Me
              </h2>
              <p className="text-xs sm:text-sm text-[#A5AEC5] leading-relaxed">
                {personalInfo.aboutIntro}
              </p>
            </div>

            {/* Right: Contact meta items */}
            <div className="lg:col-span-4 space-y-2 lg:border-l lg:border-[#8B5CF6]/15 lg:pl-6 text-xs sm:text-sm">
              {/* Location */}
              <div className="flex items-center gap-2.5 text-[#A5AEC5]">
                <div className="w-7 h-7 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-white">{personalInfo.location}</span>
              </div>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-[#A5AEC5] hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0 group-hover:border-[#8B5CF6] transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">{personalInfo.phone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-[#A5AEC5] hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0 group-hover:border-[#8B5CF6] transition-colors">
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
