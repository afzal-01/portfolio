import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, Code2, Play, FileText, ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectDashboardPreviewGraphic } from './ProjectDashboardPreviewGraphic';

interface ProjectCardProps {
  project: Project;
  onOpenVideo?: (videoUrl: string, title: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenVideo }) => {
  const isBlinkit = project.id.includes('blinkit') || Boolean(project.videoUrl);

  const getIcon = () => {
    switch (project.category) {
      case 'Power BI':
        return (
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <BarChart3 className="w-4 h-4" />
          </div>
        );
      case 'SQL':
        return (
          <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Database className="w-4 h-4" />
          </div>
        );
      case 'Python':
        return (
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Code2 className="w-4 h-4" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#C084FC]">
            <BarChart3 className="w-4 h-4" />
          </div>
        );
    }
  };

  const getGraphicType = (): 'blinkit' | 'covid' | 'restaurant' => {
    if (project.id.includes('blinkit')) return 'blinkit';
    if (project.id.includes('covid')) return 'covid';
    return 'restaurant';
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (isBlinkit && project.videoUrl && onOpenVideo) {
      e.preventDefault();
      onOpenVideo(project.videoUrl, project.title);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 glass-card-hover flex flex-col justify-between group relative">
      <div>
        {/* Top Header */}
        <div className="flex items-start gap-3 mb-4">
          {getIcon()}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
              {isBlinkit && onOpenVideo ? (
                <button
                  onClick={handleCardClick}
                  className="text-left font-bold text-white group-hover:text-purple-300 transition-colors"
                >
                  {project.title}
                </button>
              ) : (
                <Link to={`/projects/${project.id}`}>{project.title}</Link>
              )}
            </h3>
            <p className="text-xs text-[#A5AEC5] mt-0.5 font-medium">
              {project.technology} • {project.date}
            </p>
          </div>
        </div>

        {/* Dashboard Preview Graphic with Video Trigger Overlay for Blinkit */}
        <div
          className="mb-4 relative cursor-pointer group/thumb"
          onClick={handleCardClick}
        >
          <ProjectDashboardPreviewGraphic type={getGraphicType()} />
          
          {/* If Blinkit: Display glowing Play Button Overlay */}
          {isBlinkit && (
            <div className="absolute inset-0 bg-[#080B18]/50 backdrop-blur-[1px] opacity-0 group-hover/thumb:opacity-100 transition-all duration-300 rounded-xl flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white flex items-center justify-center shadow-xl shadow-[#8B5CF6]/60 scale-90 group-hover/thumb:scale-100 transition-transform">
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </div>
              <span className="text-xs font-bold text-white tracking-wide bg-[#10152A]/90 px-3 py-1 rounded-full border border-[#8B5CF6]/40">
                Watch Demo Video
              </span>
            </div>
          )}
        </div>

        {/* Bullet Points */}
        <ul className="space-y-2 mb-6">
          {project.features.slice(0, 2).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-[#A5AEC5] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-[#8B5CF6]/15 flex items-center justify-between gap-2.5">
        {isBlinkit && onOpenVideo && project.videoUrl ? (
          <>
            <button
              onClick={() => onOpenVideo(project.videoUrl!, project.title)}
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] text-white text-xs font-bold text-center transition-all shadow-md shadow-[#8B5CF6]/30 flex items-center justify-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Video</span>
            </button>

            <Link
              to={`/projects/${project.id}`}
              className="py-2 px-3 rounded-xl bg-[#171D35] hover:bg-[#1C2442] border border-[#8B5CF6]/25 text-[#A5AEC5] hover:text-white text-xs font-semibold transition-colors flex items-center gap-1"
              title="View Case Study Details"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Details</span>
            </Link>
          </>
        ) : (
          <>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-[#8B5CF6]/15 hover:bg-[#8B5CF6]/25 border border-[#8B5CF6]/30 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5 group/btn"
              >
                <span>View Project</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            ) : (
              <Link
                to={`/projects/${project.id}`}
                className="flex-1 py-2 px-3 rounded-xl bg-[#8B5CF6]/15 hover:bg-[#8B5CF6]/25 border border-[#8B5CF6]/30 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5 group/btn"
              >
                <span>View Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            )}

            <Link
              to={`/projects/${project.id}`}
              className="py-2 px-3 rounded-xl bg-[#171D35] hover:bg-[#1C2442] border border-[#8B5CF6]/20 text-[#A5AEC5] hover:text-white text-xs font-semibold transition-colors flex items-center gap-1"
              title="View Project Architecture & Details"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Details</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
