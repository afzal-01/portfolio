import React from 'react';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 sm:py-6 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Email-Only Contact Card */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#8B5CF6]/25 shadow-xl shadow-black/40 flex flex-col sm:flex-row items-center justify-between gap-5 glass-card-hover">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
              Get In Touch
            </h3>
            <p className="text-xs sm:text-sm text-[#A5AEC5] max-w-xl">
              Open to Associate Data Analyst and Business Intelligence opportunities. Feel free to reach out directly via email.
            </p>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#10152A] border border-[#8B5CF6]/30 text-white hover:text-white hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/20 text-xs sm:text-sm font-semibold transition-all group shadow-md hover:scale-105 active:scale-95 shrink-0"
            title={`Send email to ${personalInfo.email}`}
          >
            <div className="w-6 h-6 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center text-[#C084FC] group-hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium tracking-wide">{personalInfo.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
