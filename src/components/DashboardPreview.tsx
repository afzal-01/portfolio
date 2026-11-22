import React, { useState } from 'react';
import { X, ExternalLink, Filter, BarChart3, TrendingUp, PieChart, Check, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface DashboardPreviewProps {
  project: Project | null;
  onClose: () => void;
}

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({ project, onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeMetric, setActiveMetric] = useState<number>(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080B18]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#10152A] border border-[#8B5CF6]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#8B5CF6]/20 bg-[#080B18]/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/20 text-[#C084FC] border border-[#8B5CF6]/30 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded bg-[#8B5CF6]/20 text-[#C084FC] font-mono">
                  {project.category}
                </span>
              </div>
              <p className="text-xs text-[#A5AEC5]">Interactive Analytics Simulation</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#8B5CF6]/20 hover:bg-[#8B5CF6]/30 border border-[#8B5CF6]/40 text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-[#A5AEC5]" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#A5AEC5] hover:text-white hover:bg-[#171D35] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dashboard Canvas Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Top Control Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#080B18]/50 border border-[#8B5CF6]/15">
            <div className="flex items-center gap-2 text-xs text-[#A5AEC5]">
              <Filter className="w-4 h-4 text-[#8B5CF6]" />
              <span className="font-medium text-white">Dimension Slicer:</span>
              {['All', 'Tier 1', 'Tier 2', 'Tier 3'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    selectedFilter === filter
                      ? 'bg-[#8B5CF6] text-white shadow-sm'
                      : 'bg-[#171D35] text-[#A5AEC5] hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="text-xs text-[#C084FC] font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              Live Query Engine
            </div>
          </div>

          {/* KPI Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.kpis.map((kpi, index) => (
              <div
                key={kpi.label}
                onClick={() => setActiveMetric(index)}
                className={`cursor-pointer p-4 rounded-xl border transition-all ${
                  activeMetric === index
                    ? 'bg-[#171D35] border-[#8B5CF6] shadow-lg shadow-[#8B5CF6]/20'
                    : 'bg-[#171D35]/50 border-[#8B5CF6]/15 hover:border-[#8B5CF6]/40'
                }`}
              >
                <div className="text-xs text-[#A5AEC5] font-medium mb-1">{kpi.label}</div>
                <div className="text-2xl font-extrabold text-white font-mono tracking-tight">
                  {kpi.value}
                </div>
                <div className="mt-2 text-[11px] text-[#C084FC] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>Quality Verified</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Chart Visualizations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 p-5 rounded-xl bg-[#080B18]/60 border border-[#8B5CF6]/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#8B5CF6]" />
                  <h4 className="text-sm font-semibold text-white">Segment Performance Trajectory</h4>
                </div>
                <span className="text-xs text-[#A5AEC5] font-mono">Filtered: {selectedFilter}</span>
              </div>

              {/* Bar Chart Bars */}
              <div className="h-52 w-full flex items-end justify-between gap-3 pt-6 px-2">
                {[
                  { name: 'Jan-Feb', val: 65, label: '₹185K' },
                  { name: 'Mar-Apr', val: 82, label: '₹240K' },
                  { name: 'May-Jun', val: 74, label: '₹210K' },
                  { name: 'Jul-Aug', val: 95, label: '₹310K' },
                  { name: 'Sep-Oct', val: 88, label: '₹275K' },
                  { name: 'Nov-Dec', val: 100, label: '₹345K' },
                ].map((bar) => (
                  <div key={bar.name} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <span className="text-[10px] font-mono text-[#C084FC] opacity-0 group-hover:opacity-100 transition-opacity">
                      {bar.label}
                    </span>
                    <div
                      className="w-full bg-[#171D35] rounded-t-md relative overflow-hidden group-hover:bg-[#1C2442] transition-colors"
                      style={{ height: `${bar.val}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#6366F1] to-[#8B5CF6] opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[11px] text-[#A5AEC5] font-medium">{bar.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#080B18]/60 border border-[#8B5CF6]/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <PieChart className="w-4 h-4 text-[#C084FC]" />
                  <h4 className="text-sm font-semibold text-white">Segment Distribution</h4>
                </div>
                
                <div className="space-y-3 mt-4">
                  {[
                    { label: 'Category Alpha', pct: 45, color: 'bg-[#8B5CF6]' },
                    { label: 'Category Beta', pct: 30, color: 'bg-[#A855F7]' },
                    { label: 'Category Gamma', pct: 15, color: 'bg-[#6366F1]' },
                    { label: 'Others', pct: 10, color: 'bg-[#38BDF8]' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white">{item.label}</span>
                        <span className="text-[#A5AEC5] font-mono">{item.pct}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#171D35] overflow-hidden">
                        <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#8B5CF6]/15 text-xs text-[#A5AEC5]">
                Optimized with SQL indexing and validation routines.
              </div>
            </div>

          </div>

          {/* Key Insights Callouts */}
          <div className="p-5 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/25">
            <h4 className="text-sm font-bold text-[#C084FC] mb-3 flex items-center gap-2">
              <Check className="w-4 h-4" />
              Analytical Findings
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#A5AEC5]">
              {project.caseStudy.findings.map((insight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[#8B5CF6] font-bold">•</span>
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#8B5CF6]/20 bg-[#080B18]/80 flex items-center justify-between text-xs text-[#A5AEC5]">
          <span>Tools: {project.tools.join(' • ')}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
