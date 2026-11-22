import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { VideoModal } from '../components/VideoModal';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoSrc: string;
    title: string;
  }>({
    isOpen: false,
    videoSrc: '',
    title: '',
  });

  const handleOpenVideo = (videoSrc: string, title: string) => {
    setVideoModal({
      isOpen: true,
      videoSrc,
      title,
    });
  };

  const handleCloseVideo = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="projects" className="py-4 sm:py-5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference */}
        <SectionHeading
          icon={Layers}
          title="Featured Projects"
          actionText="View All Projects"
          actionHref="/projects"
        />

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenVideo={handleOpenVideo}
            />
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        videoSrc={videoModal.videoSrc}
        title={videoModal.title}
      />
    </section>
  );
};
