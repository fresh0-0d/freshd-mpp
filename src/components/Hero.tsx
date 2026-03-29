import { useState } from 'react';
import ProfileModal from './ProfileModal';
import JobDescriptionModal from './JobDescriptionModal';

const Hero = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);

  return (
    <section 
      className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-20 py-20 overflow-hidden bg-white"
      style={{
        backgroundImage: 'url("/images/hero-natural-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dynamic Background Elements - Commented out for natural image background review */}
      {/* 
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#0033FF] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#EEF2FF] opacity-[0.4] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-blue-50 opacity-[0.3] rounded-full blur-[80px] pointer-events-none animate-float" />
      */}
      
      <div className="relative z-10 max-w-6xl">
        <div className="inline-block mb-6 animate-fade-in-up">
          <span className="text-lg md:text-xl font-bold text-[#0033FF] opacity-90 tracking-wide">
            병원 현장에서의 경험을 바탕으로 환자 니즈를 분석하고 콘텐츠로 연결하는 마케터입니다.
          </span>
          <div className="h-[2px] w-16 bg-[#0033FF] mt-3 opacity-40" />
        </div>

        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#334155] mb-12 animate-fade-in-up delay-100"
          style={{ lineHeight: 1.3 }}
        >
            <span style={{ lineHeight: 1.4 }}>
              <span className="inline-block whitespace-nowrap">의료 트렌드와 환자 데이터를 기반으로</span><br />
              <span className="inline-block whitespace-nowrap">콘텐츠 성과를 만들어내는</span><br />
              <span className="text-[#0033FF] relative inline-block whitespace-nowrap">
                병원 콘텐츠 마케터로 성장하겠습니다.
              </span>
            </span>
        </h1>

        <div className="flex flex-wrap gap-4 md:gap-6 animate-fade-in-up delay-500">
          <button 
            onClick={() => setIsProfileOpen(true)}
            className="group relative px-8 md:px-10 py-4 md:py-5 bg-[#0033FF] text-white font-semibold rounded-full overflow-hidden transition-all hover:shadow-blue-500/25 hover:shadow-2xl hover:-translate-y-1"
          >
            <span className="relative z-10">프로필보기</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <a href="#projects" className="flex items-center justify-center px-8 md:px-10 py-4 md:py-5 border-2 border-slate-200 text-[#334155] font-semibold rounded-full transition-all hover:border-[#0033FF] hover:text-[#0033FF] hover:bg-slate-50">
            프로젝트 보기
          </a>
          <button 
            onClick={() => setIsJobModalOpen(true)}
            className="flex items-center gap-2 justify-center px-8 md:px-10 py-4 md:py-5 border-2 border-slate-200 text-[#334155] font-semibold rounded-full transition-all hover:border-[#0033FF] hover:text-[#0033FF] hover:bg-slate-50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            직무기술서 보기
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-12 bg-[#334155]" />
      </div>

      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <JobDescriptionModal isOpen={isJobModalOpen} onClose={() => setIsJobModalOpen(false)} />
    </section>
  );
};

export default Hero;
