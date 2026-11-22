import React from 'react';
import { BarChart2, Table, Database, Code2 } from 'lucide-react';
import { SkillCategory } from '../data/skills';
import { SkillIcon } from './SkillIcons';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const getIcon = () => {
    switch (category.icon) {
      case 'bi':
        return <BarChart2 className="w-4 h-4 text-[#8B5CF6]" />;
      case 'spreadsheet':
        return <Table className="w-4 h-4 text-[#8B5CF6]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#8B5CF6]" />;
      case 'code':
        return <Code2 className="w-4 h-4 text-[#8B5CF6]" />;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 glass-card-hover flex flex-col justify-start">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center">
          {getIcon()}
        </div>
        <h3 className="text-base font-bold text-white tracking-wide">
          {category.title}
        </h3>
      </div>

      {/* Skill Pills with Official Brand Logos */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[#10152A] text-[#A5AEC5] hover:text-white hover:bg-[#8B5CF6]/20 border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all hover:scale-105 select-none flex items-center gap-2 group"
          >
            <SkillIcon name={skill} className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
            <span>{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
