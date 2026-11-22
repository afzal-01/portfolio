import React from 'react';
import { GraduationCap, Award, Trophy, BarChart3, Users } from 'lucide-react';
import { educationData, achievementsData } from '../data/education';

export const Education: React.FC = () => {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy className="w-4 h-4 text-[#8B5CF6]" />;
      case 'chart':
        return <BarChart3 className="w-4 h-4 text-[#8B5CF6]" />;
      case 'users':
        return <Users className="w-4 h-4 text-[#8B5CF6]" />;
      default:
        return <Award className="w-4 h-4 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="education" className="py-4 sm:py-5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Left Column: Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#8B5CF6]/15 text-[#C084FC] flex items-center justify-center border border-[#8B5CF6]/30">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-4 border border-[#8B5CF6]/20 glass-card-hover flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#8B5CF6] mt-2 shrink-0 shadow-sm shadow-[#8B5CF6]" />
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-[#A5AEC5] mt-0.5">
                        {edu.institution}
                      </p>
                      <span className="inline-block mt-0.5 text-xs font-mono font-bold text-[#C084FC]">
                        {edu.grade}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#10152A] text-[#A5AEC5] border border-[#8B5CF6]/20 shrink-0 self-start sm:self-center">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#8B5CF6]/15 text-[#C084FC] flex items-center justify-center border border-[#8B5CF6]/30">
                <Trophy className="w-3.5 h-3.5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Achievements & Certifications
              </h2>
            </div>

            <div className="space-y-3">
              {achievementsData.map((ach) => (
                <div
                  key={ach.id}
                  className="glass-card rounded-2xl p-4 border border-[#8B5CF6]/20 glass-card-hover flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center shrink-0">
                    {getAchievementIcon(ach.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {ach.title}
                    </h3>
                    <p className="text-xs text-[#A5AEC5] mt-0.5 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
