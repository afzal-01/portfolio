import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, BarChart3, CheckCircle2, TrendingUp, Play, Github, ExternalLink } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-2">Project Not Found</h2>
        <p className="text-xs text-[#A5AEC5] mb-6">
          The requested analytical case study was not found.
        </p>
        <Link
          to="/projects"
          className="px-5 py-2.5 rounded-xl bg-[#8B5CF6] text-white font-semibold text-xs hover:bg-[#7C3AED]"
        >
          View All Projects
        </Link>
      </div>
    );
  }

  // Simulated chart data depending on project
  const getChartData = () => {
    if (project.id.includes('blinkit')) {
      return [
        { name: 'Tier 1', value: 340, items: 2100 },
        { name: 'Tier 2', value: 420, items: 2800 },
        { name: 'Tier 3', value: 440, items: 3623 },
      ];
    }
    if (project.id.includes('covid')) {
      return [
        { name: 'Jan', value: 120, rate: 2.1 },
        { name: 'Feb', value: 210, rate: 3.4 },
        { name: 'Mar', value: 380, rate: 4.8 },
        { name: 'Apr', value: 310, rate: 3.9 },
        { name: 'May', value: 240, rate: 2.6 },
        { name: 'Jun', value: 160, rate: 1.8 },
      ];
    }
    return [
      { name: 'Appetizers', value: 1420 },
      { name: 'Entrees', value: 3890 },
      { name: 'Beverages', value: 2150 },
      { name: 'Desserts', value: 980 },
    ];
  };

  const chartData = getChartData();

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A5AEC5] hover:text-[#C084FC] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#8B5CF6]/15 text-[#C084FC] border border-[#8B5CF6]/30">
            {project.category} • {project.date}
          </span>
        </div>

        {/* Title Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-[#A5AEC5] max-w-3xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#10152A] text-white border border-[#8B5CF6]/25">
              Tools: {project.technology}
            </span>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#8B5CF6]/20 hover:bg-[#8B5CF6]/30 border border-[#8B5CF6]/40 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-[#A5AEC5]" />
              </a>
            )}
          </div>
        </div>

        {/* If Project has Video (Blinkit): Feature it prominently! */}
        {project.videoUrl && (
          <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#8B5CF6]/40 mb-10 shadow-2xl shadow-purple-950/40">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 text-[#C084FC] flex items-center justify-center border border-[#8B5CF6]/30">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Dashboard Walkthrough & Interactive Demo
                  </h3>
                  <p className="text-xs text-[#A5AEC5]">
                    Recorded live presentation of the Power BI multi-tier grocery performance dashboard
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                Blinkit.mp4
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-black border border-[#8B5CF6]/25 shadow-2xl">
              <video
                src={project.videoUrl}
                controls
                className="w-full max-h-[520px] object-contain rounded-xl"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* KPI Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {project.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="glass-card rounded-2xl p-4 border border-[#8B5CF6]/20 text-center"
            >
              <span className="text-[10px] uppercase font-semibold text-[#A5AEC5] block mb-1">
                {kpi.label}
              </span>
              <span className="text-xl sm:text-2xl font-black text-white font-mono">
                {kpi.value}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Data Visualization with Recharts */}
        <div className="glass-card rounded-2xl p-6 border border-[#8B5CF6]/25 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#8B5CF6]" />
                Interactive Visual Metric Model
              </h3>
              <p className="text-xs text-[#A5AEC5] mt-0.5">
                Dynamic aggregation rendered from clean project dataset.
              </p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              {project.id.includes('covid') ? (
                <AreaChart data={chartData as any}>
                  <defs>
                    <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#A5AEC5" fontSize={11} />
                  <YAxis stroke="#A5AEC5" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#10152A',
                      borderColor: 'rgba(139,92,246,0.3)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#8B5CF6" strokeWidth={2.5} fillOpacity={1} fill="url(#purpleGrad)" />
                </AreaChart>
              ) : (
                <BarChart data={chartData as any}>
                  <XAxis dataKey="name" stroke="#A5AEC5" fontSize={11} />
                  <YAxis stroke="#A5AEC5" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#10152A',
                      borderColor: 'rgba(139,92,246,0.3)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                  />
                  <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>

        {/* Case Study Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* Challenge */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">
                Business Problem & Challenge
              </h2>
              <p className="text-sm text-[#A5AEC5] leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            {/* Methodology */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">
                Analytical Methodology
              </h2>
              <p className="text-sm text-[#A5AEC5] leading-relaxed">
                {project.caseStudy.methodology}
              </p>
            </div>

            {/* Key Findings */}
            <div className="glass-card rounded-2xl p-6 border border-[#8B5CF6]/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#8B5CF6]" />
                Key Analytical Findings
              </h3>
              <ul className="space-y-2.5">
                {project.caseStudy.findings.map((finding, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A5AEC5] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Features */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">
                Project Deliverables & Features
              </h2>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#A5AEC5] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Sidebar: Tools & Tech Highlights */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="glass-card rounded-2xl p-5 border border-[#8B5CF6]/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A5AEC5] mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#10152A] text-white border border-[#8B5CF6]/25"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Dedicated GitHub Repository Card in Sidebar */}
            {project.githubUrl && (
              <div className="glass-card rounded-2xl p-5 border border-[#8B5CF6]/25 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A5AEC5]">
                  Source Code & Queries
                </h4>
                <p className="text-xs text-[#A5AEC5] leading-relaxed">
                  Review complete SQL scripts, data modeling procedures, and analysis files on GitHub.
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#8B5CF6]/20 hover:bg-[#8B5CF6]/30 border border-[#8B5CF6]/40 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4 text-[#C084FC]" />
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-[#A5AEC5]" />
                </a>
              </div>
            )}

            <div className="glass-card rounded-2xl p-5 border border-[#8B5CF6]/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A5AEC5] mb-3">
                Technical Highlights
              </h4>
              <ul className="space-y-2">
                {project.caseStudy.technicalHighlights.map((th, idx) => (
                  <li key={idx} className="text-xs text-[#A5AEC5] flex items-start gap-2">
                    <span className="text-[#8B5CF6] font-bold">•</span>
                    <span>{th}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 space-y-3">
              <h4 className="text-sm font-bold text-white">Interested in this analysis?</h4>
              <p className="text-xs text-[#A5AEC5] leading-relaxed">
                Connect directly with Afzal to review full queries, DAX measures, or custom dashboard workflows.
              </p>
              <a
                href="/#contact"
                className="inline-block w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white font-bold text-xs text-center shadow-md shadow-[#8B5CF6]/25"
              >
                Connect With Afzal
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
