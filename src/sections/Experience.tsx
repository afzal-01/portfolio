import React from 'react';
import { Briefcase } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ExperienceCard } from '../components/ExperienceCard';
import { experiences } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-4 sm:py-5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          icon={Briefcase}
          title="Experience"
        />

        {/* Experience Timeline */}
        <div className="mt-1">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>

      </div>
    </section>
  );
};
