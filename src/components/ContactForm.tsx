import React from 'react';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const ContactForm: React.FC = () => {
  return (
    <a
      href={`mailto:${personalInfo.email}`}
      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#10152A] border border-[#8B5CF6]/30 text-white hover:text-white hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/20 text-xs sm:text-sm font-semibold transition-all group shadow-md hover:scale-105 active:scale-95"
    >
      <Mail className="w-4 h-4 text-[#C084FC] group-hover:text-white transition-colors" />
      <span className="font-mono">{personalInfo.email}</span>
    </a>
  );
};
