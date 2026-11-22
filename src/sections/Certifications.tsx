import React from 'react';
import { Trophy, Award, BarChart3, Users } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { achievementsData } from '../data/education';

export const Certifications: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'trophy':
        return <Trophy className="w-5 h-5 text-[#8B5CF6]" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-[#8B5CF6]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#8B5CF6]" />;
      default:
        return <Award className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="certifications" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={Trophy}
          title="Achievements & Certifications"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 border border-[#8B5CF6]/20 glass-card-hover flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center shrink-0">
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-[#A5AEC5] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
