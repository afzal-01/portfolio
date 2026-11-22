import React, { useEffect } from 'react';
import { X, Play, BarChart3, Maximize2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoSrc,
  title,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#10152A] border border-[#8B5CF6]/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/60 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#8B5CF6]/20 bg-[#080B18]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 text-[#C084FC] flex items-center justify-center border border-[#8B5CF6]/30">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>{title}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#8B5CF6]/20 text-[#C084FC] border border-[#8B5CF6]/30">
                  Power BI Walkthrough
                </span>
              </h3>
              <p className="text-[11px] text-[#A5AEC5]">
                Full interactive dashboard demo & KPI exploration
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#A5AEC5] hover:text-white hover:bg-[#171D35] border border-transparent hover:border-[#8B5CF6]/30 transition-all"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Canvas */}
        <div className="relative bg-black flex items-center justify-center p-2 sm:p-4">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full max-h-[68vh] rounded-xl object-contain shadow-2xl"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Bottom Details Footer */}
        <div className="px-5 py-3 border-t border-[#8B5CF6]/20 bg-[#080B18]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#A5AEC5]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-medium">8,500+ rows analysed in Excel • Dynamic DAX KPI measures</span>
          </div>
          <button
            onClick={onClose}
            className="self-end sm:self-auto px-4 py-1.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-xs transition-colors"
          >
            Close Video
          </button>
        </div>
      </div>
    </div>
  );
};
