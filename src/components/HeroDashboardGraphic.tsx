import React from 'react';
import { BarChart2, Database, TrendingUp } from 'lucide-react';

export const HeroDashboardGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background Soft Purple Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#8B5CF6]/25 via-[#6366F1]/15 to-[#A855F7]/25 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Main Glass Key Highlights Card */}
      <div className="relative rounded-2xl bg-[#171D35]/95 border border-[#8B5CF6]/30 shadow-2xl shadow-black/80 p-5 md:p-6 backdrop-blur-xl overflow-hidden">
        {/* Top subtle gloss line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent" />

        {/* Card Heading */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#8B5CF6]/20">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] shadow-sm shadow-[#8B5CF6]/60 inline-block" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Key Highlights
            </h3>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/15 text-[#C084FC] border border-[#8B5CF6]/30 font-medium">
            Core Expertise
          </span>
        </div>

        {/* Card Content Layout: Highlights on left, Laptop illustration on right */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
          
          {/* Highlights List */}
          <div className="sm:col-span-7 space-y-3.5">
            {/* Highlight 1: KPI Dashboards */}
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center text-[#C084FC] shrink-0 shadow-inner">
                <BarChart2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  KPI Dashboards
                </h4>
                <p className="text-[11px] text-[#A5AEC5] mt-0.5 leading-snug">
                  Interactive and business-focused dashboards.
                </p>
              </div>
            </div>

            {/* Highlight 2: Data Analysis */}
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center text-[#C084FC] shrink-0 shadow-inner">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Data Analysis
                </h4>
                <p className="text-[11px] text-[#A5AEC5] mt-0.5 leading-snug">
                  Clean, analyze, and transform complex data.
                </p>
              </div>
            </div>

            {/* Highlight 3: Business Insights */}
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-[#10152A] border border-[#8B5CF6]/30 flex items-center justify-center text-[#C084FC] shrink-0 shadow-inner">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Business Insights
                </h4>
                <p className="text-[11px] text-[#A5AEC5] mt-0.5 leading-snug">
                  Turn data into actionable decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Static Laptop Illustration with Data Dashboard */}
          <div className="sm:col-span-5 flex justify-center items-center pt-2 sm:pt-0">
            <svg
              viewBox="0 0 240 165"
              className="w-full max-w-[190px] sm:max-w-[210px] h-auto drop-shadow-xl"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Laptop displaying data analytics dashboard"
            >
              {/* Outer screen lid shadow / bezel */}
              <rect x="23" y="10" width="194" height="122" rx="9" fill="#0D1122" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.4" />
              
              {/* Screen Frame */}
              <rect x="25" y="12" width="190" height="118" rx="7.5" fill="#0F1428" />
              
              {/* Webcam */}
              <circle cx="120" cy="17" r="1.5" fill="#8B5CF6" fillOpacity="0.8" />
              
              {/* Inner Display Screen */}
              <rect x="31" y="22" width="178" height="102" rx="4" fill="#10152A" />
              
              {/* Top Window Navigation Bar */}
              <rect x="36" y="26" width="168" height="9" rx="2" fill="#171D35" />
              <circle cx="42" cy="30.5" r="1.5" fill="#EF4444" fillOpacity="0.8" />
              <circle cx="47" cy="30.5" r="1.5" fill="#F59E0B" fillOpacity="0.8" />
              <circle cx="52" cy="30.5" r="1.5" fill="#10B981" fillOpacity="0.8" />
              <rect x="64" y="28.5" width="45" height="4" rx="1.5" fill="#8B5CF6" fillOpacity="0.3" />
              <rect x="176" y="28.5" width="23" height="4" rx="1.5" fill="#A855F7" fillOpacity="0.5" />
              
              {/* Left Mini Sidebar */}
              <rect x="36" y="38" width="18" height="81" rx="2" fill="#171D35" fillOpacity="0.7" />
              <rect x="40" y="42" width="10" height="2.5" rx="1" fill="#8B5CF6" />
              <rect x="40" y="48" width="10" height="2" rx="1" fill="#A5AEC5" fillOpacity="0.4" />
              <rect x="40" y="53" width="10" height="2" rx="1" fill="#A5AEC5" fillOpacity="0.4" />
              <rect x="40" y="58" width="10" height="2" rx="1" fill="#A5AEC5" fillOpacity="0.4" />
              <rect x="40" y="63" width="10" height="2" rx="1" fill="#A5AEC5" fillOpacity="0.4" />
              
              {/* 3 KPI Metric Cards */}
              <rect x="58" y="38" width="43" height="18" rx="2.5" fill="#171D35" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.3" />
              <rect x="62" y="41" width="16" height="2" rx="0.5" fill="#A5AEC5" fillOpacity="0.6" />
              <rect x="62" y="46" width="22" height="4" rx="1" fill="#8B5CF6" />
              <path d="M89 50 L93 46 L96 48 L99 43" stroke="#10B981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              
              <rect x="105" y="38" width="45" height="18" rx="2.5" fill="#171D35" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.3" />
              <rect x="109" y="41" width="18" height="2" rx="0.5" fill="#A5AEC5" fillOpacity="0.6" />
              <rect x="109" y="46" width="20" height="4" rx="1" fill="#A855F7" />
              <path d="M136 50 L140 47 L143 49 L147 44" stroke="#8B5CF6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              
              <rect x="154" y="38" width="50" height="18" rx="2.5" fill="#171D35" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.3" />
              <rect x="158" y="41" width="16" height="2" rx="0.5" fill="#A5AEC5" fillOpacity="0.6" />
              <rect x="158" y="46" width="24" height="4" rx="1" fill="#6366F1" />
              
              {/* Middle Charts: Vertical Bar Chart & Donut Chart */}
              {/* Bar Chart Container */}
              <rect x="58" y="60" width="84" height="35" rx="2.5" fill="#171D35" fillOpacity="0.95" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.25" />
              <rect x="62" y="63" width="30" height="2" rx="0.5" fill="#A5AEC5" fillOpacity="0.7" />
              {/* Static Purple Bars */}
              <rect x="64" y="78" width="6" height="13" rx="1" fill="#6366F1" />
              <rect x="73" y="72" width="6" height="19" rx="1" fill="#8B5CF6" />
              <rect x="82" y="76" width="6" height="15" rx="1" fill="#6366F1" />
              <rect x="91" y="67" width="6" height="24" rx="1" fill="#A855F7" />
              <rect x="100" y="71" width="6" height="20" rx="1" fill="#8B5CF6" />
              <rect x="109" y="66" width="6" height="25" rx="1" fill="#C084FC" />
              <rect x="118" y="74" width="6" height="17" rx="1" fill="#8B5CF6" />
              <rect x="127" y="69" width="6" height="22" rx="1" fill="#6366F1" />
              
              {/* Donut Chart Container */}
              <rect x="146" y="60" width="58" height="35" rx="2.5" fill="#171D35" fillOpacity="0.95" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.25" />
              <circle cx="175" cy="77.5" r="11" stroke="#232C4F" strokeWidth="4" fill="none" />
              <circle cx="175" cy="77.5" r="11" stroke="#8B5CF6" strokeWidth="4" strokeDasharray="45 25" strokeLinecap="round" fill="none" />
              <circle cx="175" cy="77.5" r="11" stroke="#A855F7" strokeWidth="4" strokeDasharray="18 52" strokeDashoffset="-45" strokeLinecap="round" fill="none" />
              <circle cx="175" cy="77.5" r="4" fill="#10152A" />
              
              {/* Bottom Area Wave Trend Chart */}
              <rect x="58" y="99" width="146" height="20" rx="2.5" fill="#171D35" fillOpacity="0.95" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.25" />
              <path d="M62 113 Q 75 106, 90 110 T 120 104 T 150 108 T 180 102 T 200 105" stroke="#A855F7" strokeWidth="1.5" fill="none" />
              <path d="M62 113 Q 75 106, 90 110 T 120 104 T 150 108 T 180 102 T 200 105 L 200 117 L 62 117 Z" fill="#8B5CF6" fillOpacity="0.15" />
              
              {/* Laptop Hinge Center */}
              <rect x="105" y="130" width="30" height="3" rx="1" fill="#1E243D" />
              
              {/* Laptop Keyboard Base / Deck */}
              <path d="M14 132 L226 132 L214 144 C212 146 208 147 204 147 L36 147 C32 147 28 146 26 144 Z" fill="#1B223C" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.3" />
              
              {/* Trackpad Notch */}
              <rect x="104" y="133" width="32" height="2.5" rx="1.25" fill="#0D1122" />
              
              {/* Soft Ambient Purple Shadow Beneath Base */}
              <ellipse cx="120" cy="154" rx="85" ry="4" fill="#8B5CF6" fillOpacity="0.25" />
            </svg>
          </div>

        </div>

      </div>
    </div>
  );
};
