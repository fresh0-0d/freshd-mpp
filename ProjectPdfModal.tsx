import React, { useEffect } from 'react';

interface ProjectPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

const ProjectPdfModal: React.FC<ProjectPdfModalProps> = ({ isOpen, onClose, title, pdfUrl }) => {
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 bg-slate-900/80 backdrop-blur-md transition-opacity duration-300">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative w-full h-full sm:h-[95vh] max-w-6xl bg-white sm:rounded-[32px] overflow-hidden flex flex-col shadow-2xl animate-fade-in-up">
        
        {/* Header */}
        <div className="p-4 md:p-6 flex items-center justify-between border-b border-slate-100 bg-white/80 backdrop-blur-sm z-10">
          <div>
            <span className="text-[12px] font-black uppercase tracking-widest text-[#0033FF] opacity-60 mb-0.5 block">Project Document</span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight leading-tight">
              {title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-all shadow-sm"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 w-full h-full bg-slate-100">
          <iframe 
            src={`${pdfUrl}#toolbar=0`}
            className="w-full h-full border-none"
            title={title}
          />
        </div>

        {/* Mobile-only close button area if needed, but the top button is usually enough */}
        <div className="sm:hidden p-4 bg-white border-t border-slate-100 text-center">
             <button 
                onClick={onClose}
                className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl"
             >
                닫기
             </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPdfModal;
