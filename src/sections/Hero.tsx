import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Users, Database, Layers, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { HeroDashboardGraphic } from '../components/HeroDashboardGraphic';

export const Hero: React.FC = () => {
  const getMetricIcon = (iconName: string) => {
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
    <section id="home" className="pt-24 pb-4 md:pt-28 md:pb-5 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 right-5 w-[500px] h-[500px] bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#6366F1]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-6 sm:mb-8">
          
          {/* Left Hero Details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Hello Greeting */}
            <div className="inline-block">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#C084FC]">
                {personalInfo.heroGreeting}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
              {personalInfo.name}
            </h1>

            {/* Role Subtitle */}
            <p className="text-base sm:text-lg font-bold text-[#C084FC] tracking-wide">
              {personalInfo.role}
            </p>

            {/* Bio Description */}
            <p className="text-xs sm:text-sm text-[#A5AEC5] max-w-xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons: Explore Projects -> Download Resume -> Contact Me */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* 1. Explore Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white font-bold text-xs sm:text-sm hover:from-[#7C3AED] hover:to-[#9333EA] shadow-lg shadow-[#8B5CF6]/30 hover:shadow-[#8B5CF6]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* 2. Download Resume */}
              <a
                href="/resume/Afzal-Hameed-Faiz-Resume.pdf"
                download="Afzal-Hameed-Faiz-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171D35]/90 hover:bg-[#1C2442] text-white font-semibold text-xs sm:text-sm border border-[#8B5CF6]/30 hover:border-[#8B5CF6]/60 transition-all hover:-translate-y-0.5 shadow-md shadow-black/20"
              >
                <Download className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>Download CV</span>
              </a>

              {/* 3. Contact Me */}
              <a
                href="mailto:afzalfaiz0110@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[#A5AEC5] hover:text-white hover:bg-[#171D35]/60 border border-transparent hover:border-[#8B5CF6]/20 font-semibold text-xs sm:text-sm transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Floating Key Highlights Card */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroDashboardGraphic />
          </div>

        </div>

        {/* Bottom Metrics Bar matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {personalInfo.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 border border-[#8B5CF6]/20 glass-card-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center shrink-0 shadow-inner">
                {getMetricIcon(metric.icon)}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight leading-none">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-[#A5AEC5] mt-1">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
