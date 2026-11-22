import React from 'react';
import { Layers } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-4 sm:py-5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          icon={Layers}
          title="Skills"
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
};
