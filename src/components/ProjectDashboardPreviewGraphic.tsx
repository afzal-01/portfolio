import React from 'react';

interface GraphicProps {
  type: 'blinkit' | 'covid' | 'restaurant';
}

export const ProjectDashboardPreviewGraphic: React.FC<GraphicProps> = ({ type }) => {
  if (type === 'blinkit') {
    return (
      <div className="w-full h-44 bg-[#10152A] rounded-xl p-3 border border-[#8B5CF6]/20 flex flex-col justify-between overflow-hidden relative">
        {/* Subtle grid pattern */}
        <div className="flex items-center justify-between border-b border-[#8B5CF6]/15 pb-2">
          <span className="text-[11px] font-bold text-white tracking-wide">
            Blinkit Sales Analysis
          </span>
          <span className="text-[9px] font-mono text-[#A855F7] bg-[#8B5CF6]/15 px-1.5 py-0.5 rounded">
            Live KPI
          </span>
        </div>

        {/* Mini KPI Boxes */}
        <div className="grid grid-cols-3 gap-1.5 my-1.5">
          <div className="bg-[#171D35] p-1.5 rounded border border-[#8B5CF6]/10 text-center">
            <span className="text-[8px] text-[#A5AEC5] block">Total Sales</span>
            <span className="text-[10px] font-mono font-bold text-white">₹1.20M</span>
          </div>
          <div className="bg-[#171D35] p-1.5 rounded border border-[#8B5CF6]/10 text-center">
            <span className="text-[8px] text-[#A5AEC5] block">Items</span>
            <span className="text-[10px] font-mono font-bold text-[#A855F7]">8,523</span>
          </div>
          <div className="bg-[#171D35] p-1.5 rounded border border-[#8B5CF6]/10 text-center">
            <span className="text-[8px] text-[#A5AEC5] block">Avg Rating</span>
            <span className="text-[10px] font-mono font-bold text-emerald-400">3.9 ★</span>
          </div>
        </div>

        {/* Charts: Bars & Donut */}
        <div className="grid grid-cols-12 gap-2 items-end flex-1">
          {/* Vertical Bars */}
          <div className="col-span-8 flex items-end justify-between gap-1 h-16 pt-1">
            {[35, 60, 48, 85, 70, 92, 55].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                <div
                  className="w-full bg-gradient-to-t from-[#6366F1] to-[#8B5CF6] rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>

          {/* Donut Chart */}
          <div className="col-span-4 flex items-center justify-center">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
                <path
                  className="text-[#171D35]"
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#A855F7]"
                  strokeDasharray="65, 100"
                  strokeWidth="5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-[8px] font-bold text-white font-mono">65%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'covid') {
    return (
      <div className="w-full h-44 bg-[#10152A] rounded-xl p-3 border border-[#8B5CF6]/20 flex flex-col justify-between overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-[#8B5CF6]/15 pb-2">
          <span className="text-[11px] font-bold text-white tracking-wide">
            COVID-19 Data Exploration
          </span>
          <span className="text-[9px] font-mono text-[#6366F1] bg-[#6366F1]/15 px-1.5 py-0.5 rounded">
            SQL Views
          </span>
        </div>

        {/* Global Choropleth / Continent outline representation */}
        <div className="flex-1 my-1 flex items-center justify-center relative">
          <svg className="w-full h-20 opacity-80" viewBox="0 0 200 80" fill="none">
            {/* Simplified World Continents Silhouettes */}
            <path
              d="M20 25 Q35 15 50 30 T80 20 T70 55 T30 50 Z"
              fill="#8B5CF6"
              fillOpacity="0.4"
              stroke="#A855F7"
              strokeWidth="1"
            />
            <path
              d="M95 18 Q125 10 145 28 T135 60 T105 45 Z"
              fill="#6366F1"
              fillOpacity="0.5"
              stroke="#8B5CF6"
              strokeWidth="1"
            />
            <path
              d="M150 35 Q170 30 185 45 T165 70 Z"
              fill="#A855F7"
              fillOpacity="0.4"
              stroke="#C084FC"
              strokeWidth="1"
            />
            {/* Wave Trend Overlay */}
            <path
              d="M10 65 Q 40 40, 80 55 T 140 25 T 190 35"
              stroke="#38BDF8"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Rolling Average Bar Indicator */}
        <div className="flex items-center justify-between text-[8px] text-[#A5AEC5] font-mono pt-1 border-t border-[#8B5CF6]/10">
          <span>7-Day Moving Avg</span>
          <span className="text-[#38BDF8]">100K+ SQL Records</span>
        </div>
      </div>
    );
  }

  // Restaurant Order Analysis
  return (
    <div className="w-full h-44 bg-[#10152A] rounded-xl p-3 border border-[#8B5CF6]/20 flex flex-col justify-between overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-[#8B5CF6]/15 pb-2">
        <span className="text-[11px] font-bold text-white tracking-wide">
          Restaurant Order Analysis
        </span>
        <span className="text-[9px] font-mono text-[#38BDF8] bg-[#38BDF8]/15 px-1.5 py-0.5 rounded">
          SQL Aggregations
        </span>
      </div>

      {/* Mini KPI metrics */}
      <div className="grid grid-cols-3 gap-1.5 my-1">
        <div className="bg-[#171D35] p-1 rounded border border-[#8B5CF6]/10 text-center">
          <span className="text-[7.5px] text-[#A5AEC5] block">Peak Hours</span>
          <span className="text-[9.5px] font-mono font-bold text-amber-400">7 - 9:30 PM</span>
        </div>
        <div className="bg-[#171D35] p-1 rounded border border-[#8B5CF6]/10 text-center">
          <span className="text-[7.5px] text-[#A5AEC5] block">AOV Boost</span>
          <span className="text-[9.5px] font-mono font-bold text-emerald-400">+24.5%</span>
        </div>
        <div className="bg-[#171D35] p-1 rounded border border-[#8B5CF6]/10 text-center">
          <span className="text-[7.5px] text-[#A5AEC5] block">Top Entrees</span>
          <span className="text-[9.5px] font-mono font-bold text-[#C084FC]">52% Rev</span>
        </div>
      </div>

      {/* Category Sales Contribution & Hourly Distribution */}
      <div className="grid grid-cols-12 gap-2 items-center flex-1">
        {/* Hourly Order Trend Bars */}
        <div className="col-span-6 flex items-end justify-between gap-1 h-14 pt-1">
          {[20, 35, 60, 45, 25, 50, 85, 95, 75, 40].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
              <div
                className={`w-full rounded-t-sm ${
                  i === 6 || i === 7
                    ? 'bg-gradient-to-t from-amber-500 to-[#F59E0B]'
                    : 'bg-gradient-to-t from-[#6366F1] to-[#8B5CF6]'
                }`}
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>

        {/* Category Contribution Progress */}
        <div className="col-span-6 space-y-1.5 text-[8px] font-mono">
          <div>
            <div className="flex justify-between text-[#A5AEC5] mb-0.5">
              <span>Entrees</span>
              <span className="text-white font-bold">52%</span>
            </div>
            <div className="w-full bg-[#171D35] h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] h-full rounded-full" style={{ width: '52%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[#A5AEC5] mb-0.5">
              <span>Beverages</span>
              <span className="text-white font-bold">25%</span>
            </div>
            <div className="w-full bg-[#171D35] h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#38BDF8] to-[#0284C7] h-full rounded-full" style={{ width: '25%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[#A5AEC5] mb-0.5">
              <span>Combos / Apps</span>
              <span className="text-white font-bold">23%</span>
            </div>
            <div className="w-full bg-[#171D35] h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-full rounded-full" style={{ width: '23%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[8px] text-[#A5AEC5] font-mono pt-1 border-t border-[#8B5CF6]/10">
        <span>SQL / Group By / AOV</span>
        <span className="text-[#38BDF8]">70,000+ Orders</span>
      </div>
    </div>
  );
};
