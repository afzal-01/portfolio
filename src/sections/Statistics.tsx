import React from 'react';
import { Users, Database, Layers } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Statistics: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-5 h-5 text-[#8B5CF6]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#8B5CF6]" />;
      case 'records':
        return <Layers className="w-5 h-5 text-[#8B5CF6]" />;
      default:
        return <Database className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section className="py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {personalInfo.metrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-4 border border-[#8B5CF6]/20 glass-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center shrink-0">
                {getIcon(metric.icon)}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-[#A5AEC5] mt-0.5">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
