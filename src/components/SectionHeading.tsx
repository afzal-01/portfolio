import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  icon?: LucideIcon;
  title: string;
  actionText?: string;
  actionHref?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  icon: Icon,
  title,
  actionText,
  actionHref,
}) => {
  return (
    <div className="flex items-center justify-between mb-4 sm:mb-5">
      <div className="flex items-center gap-2.5">
        {Icon && (
          <div className="w-7 h-7 rounded-lg bg-[#8B5CF6]/15 text-[#C084FC] flex items-center justify-center border border-[#8B5CF6]/30">
            <Icon className="w-3.5 h-3.5" />
          </div>
        )}
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          {title}
        </h2>
      </div>

      {actionText && actionHref && (
        <a
          href={actionHref}
          className="text-xs font-semibold text-[#8B5CF6] hover:text-[#A855F7] flex items-center gap-1 transition-colors"
        >
          <span>{actionText}</span>
          <span>→</span>
        </a>
      )}
    </div>
  );
};
