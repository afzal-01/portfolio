import React, { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { VideoModal } from '../components/VideoModal';
import { Search, ArrowLeft, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoSrc: string;
    title: string;
  }>({
    isOpen: false,
    videoSrc: '',
    title: '',
  });

  const categories = ['All', 'Power BI', 'SQL', 'Python'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tools.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.features.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleOpenVideo = (videoSrc: string, title: string) => {
    setVideoModal({
      isOpen: true,
      videoSrc,
      title,
    });
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back to Home */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#A5AEC5] hover:text-[#C084FC] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <SectionHeading
        icon={Layers}
        title="All Projects & Analytics Case Studies"
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#A5AEC5]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search projects by tool or keyword..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#10152A] border border-[#8B5CF6]/20 text-white placeholder-[#A5AEC5]/50 text-xs focus:outline-none focus:border-[#8B5CF6]"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#8B5CF6] text-white shadow-md shadow-[#8B5CF6]/30'
                  : 'bg-[#10152A] text-[#A5AEC5] hover:text-white border border-[#8B5CF6]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenVideo={handleOpenVideo}
          />
        ))}
      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal((prev) => ({ ...prev, isOpen: false }))}
        videoSrc={videoModal.videoSrc}
        title={videoModal.title}
      />
    </div>
  );
};
