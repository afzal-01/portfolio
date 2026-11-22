import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, PieChart, Database, LayoutGrid, TrendingUp } from 'lucide-react';

export const HeroDashboardGraphic: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Background Soft Purple Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#8B5CF6]/30 via-[#6366F1]/20 to-[#A855F7]/30 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Main Glass Dashboard Card */}
      <div className="relative rounded-2xl bg-[#171D35]/95 border border-[#8B5CF6]/30 shadow-2xl shadow-black/80 p-5 md:p-6 backdrop-blur-xl overflow-hidden">
        
        {/* Top subtle gloss line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent" />

        <div className="grid grid-cols-12 gap-4">
          
          {/* Left Mini Icon Sidebar */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-between py-2 border-r border-[#8B5CF6]/15 space-y-4">
            <div className="p-2 rounded-lg bg-[#8B5CF6]/20 text-[#C084FC]">
              <BarChart2 className="w-4 h-4" />
            </div>
            <div className="p-2 rounded-lg text-[#A5AEC5] hover:text-white transition-colors">
              <PieChart className="w-4 h-4" />
            </div>
            <div className="p-2 rounded-lg text-[#A5AEC5] hover:text-white transition-colors">
              <Database className="w-4 h-4" />
            </div>
            <div className="p-2 rounded-lg text-[#A5AEC5] hover:text-white transition-colors">
              <LayoutGrid className="w-4 h-4" />
            </div>
          </div>

          {/* Right Main Analytics Canvas */}
          <div className="col-span-10 sm:col-span-11 space-y-4 pl-1">
            
            {/* Top Row: Mini Chart and Donut */}
            <div className="grid grid-cols-12 gap-3 items-center">
              
              {/* Bar Chart Section */}
              <div className="col-span-7 bg-[#10152A]/80 rounded-xl p-3 border border-[#8B5CF6]/15">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-[#A5AEC5] uppercase tracking-wider">
                    Monthly KPI Trend
                  </span>
                  <span className="text-[10px] text-[#A855F7] font-mono font-bold">+18.4%</span>
                </div>

                {/* Animated Vertical Bars */}
                <div className="h-20 flex items-end justify-between gap-1.5 pt-2">
                  {[
                    { h: 40, color: 'from-[#6366F1] to-[#8B5CF6]' },
                    { h: 65, color: 'from-[#8B5CF6] to-[#A855F7]' },
                    { h: 50, color: 'from-[#6366F1] to-[#8B5CF6]' },
                    { h: 85, color: 'from-[#8B5CF6] to-[#C084FC]' },
                    { h: 70, color: 'from-[#6366F1] to-[#8B5CF6]' },
                    { h: 95, color: 'from-[#A855F7] to-[#E879F9]' },
                    { h: 60, color: 'from-[#6366F1] to-[#8B5CF6]' },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${bar.h}%` }}
                        transition={{ duration: 0.8, delay: 0.1 * i }}
                        className={`w-full rounded-t-sm bg-gradient-to-t ${bar.color} opacity-90 hover:opacity-100 transition-opacity`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Donut Chart Section */}
              <div className="col-span-5 bg-[#10152A]/80 rounded-xl p-3 border border-[#8B5CF6]/15 flex flex-col items-center justify-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
                    {/* Background Circle */}
                    <path
                      className="text-[#171D35]"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Primary Arc */}
                    <path
                      className="text-[#8B5CF6]"
                      strokeDasharray="65, 100"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Secondary Arc */}
                    <path
                      className="text-[#A855F7]"
                      strokeDasharray="25, 100"
                      strokeDashoffset="-65"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-[11px] font-bold text-white font-mono">92%</span>
                  </div>
                </div>
                <span className="text-[9px] text-[#A5AEC5] mt-1 font-medium">Data Analyst</span>
              </div>

            </div>

            {/* Bottom Row: Wave trend and Metric Bars */}
            <div className="grid grid-cols-2 gap-3">
              
              {/* Wave SVG */}
              <div className="bg-[#10152A]/80 rounded-xl p-3 border border-[#8B5CF6]/15">
                <div className="text-[9px] text-[#A5AEC5] uppercase tracking-wider mb-1 font-semibold">
                  Reporting Pipeline
                </div>
                <svg className="w-full h-8" viewBox="0 0 100 30" fill="none">
                  <path
                    d="M0 20 Q 20 5, 40 18 T 80 10 T 100 5"
                    stroke="#A855F7"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M0 20 Q 20 5, 40 18 T 80 10 T 100 5 L 100 30 L 0 30 Z"
                    fill="url(#grad)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Horizontal Status Bars */}
              <div className="bg-[#10152A]/80 rounded-xl p-3 border border-[#8B5CF6]/15 flex flex-col justify-center space-y-2">
                <div className="w-full bg-[#171D35] h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full"
                  />
                </div>
                <div className="w-full bg-[#171D35] h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full"
                  />
                </div>
                <div className="w-full bg-[#171D35] h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-[#A855F7] to-[#E879F9] rounded-full"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
};
