import React, { useEffect } from 'react';

interface ProjectImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
}

const ProjectImageModal: React.FC<ProjectImageModalProps> = ({ isOpen, onClose, title, images }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md transition-opacity duration-300">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl bg-white rounded-[32px] overflow-hidden flex flex-col shadow-2xl animate-fade-in-up max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-100">
          <div>
            <span className="text-[12px] font-black uppercase tracking-widest text-[#0033FF] opacity-60 mb-1 block">Project Works</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
              {title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-all shadow-sm"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 hide-scrollbar bg-slate-50/30">
          <div className="space-y-12">
            {images.map((image, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0033FF] to-[#60A5FA] rounded-[24px] blur opacity-5 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-[20px] overflow-hidden shadow-lg border border-slate-100">
                  <img 
                    src={image} 
                    alt={`${title} work ${index + 1}`}
                    className="w-full h-auto object-contain block mx-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 bg-white border-t border-slate-100 text-center">
          <p className="text-sm text-slate-400 font-medium">실제 작업물 이미지입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectImageModal;
