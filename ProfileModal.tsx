import { useEffect, useRef, useState } from 'react';

const ProfileModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 20);
    }
  };

  const scrollToEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  };
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Revert back
      setShowContact(false); // 모달이 닫히면 연락처 표시 상태 초기화
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 승수
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const hardSkills = [
    { name: 'Generative AI (GPT, Gemini, NotebookLM)', level: 98, label: '상' },
    { name: 'Vibe Coding (AI-Assisted)', level: 97, label: '상' },
    { name: 'PowerPoint', level: 97, label: '상' },
    { name: 'Photoshop', level: 96, label: '상' },
    { name: 'Illustrator', level: 96, label: '상' },
    { name: 'Premiere Pro', level: 96, label: '상' },
    { name: 'After Effects', level: 80, label: '중상' },
    { name: '3D MAX', level: 65, label: '중' },
  ];

  const coreCompetencies = [
    { title: '커뮤니케이션', desc: '다양한 이해관계자와의\n원활한 소통 및 조율', tag: 'Communication' },
    { title: '병원실무이해', desc: '종합병원 홍보팀 재직을 통한\n현장 프로세스 숙달', tag: 'Hospital' },
    { title: '디자인툴 능숙', desc: '포토샵, 일러스트 등 홍보물\n제작 전문성', tag: 'Design' },
    { title: 'AI활용능력', desc: 'GPT, Gemini 등 생성형 AI\n활용한 업무효율화', tag: 'Generative AI' },
    { title: '정부사업경험', desc: '수출바우처 홍보·광고 지원 분야\n정산 검수 및 사업 운영 지원', tag: 'Government' },
  ];

  const certifications = [
    '정보기기운용기능사',
    '컴퓨터그래픽스운용기능사',
    'CS강사 1급',
    'ITQ 엑셀, 파워포인트, 한글, 인터넷 A등급',
    '워드프로세서 1급',
    '컴퓨터활용능력 2급',
  ];

  const milestones = [
    { title: '한국의약품안전관리원 주관 영상공모전 최우수상 수상' },
    { title: '영서의료재단 모범사원 표창' },
    { title: '영서의료재단 친절사원 표창' },
    { title: '충청남도교육감 업무지원 표창' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300">
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative w-full h-full sm:h-[90vh] max-w-2xl lg:max-w-3xl bg-[#F8F9FA] sm:rounded-[32px] overflow-hidden flex flex-col shadow-2xl animate-fade-in-up mx-auto">
        
        {/* Header (Close Button) */}
        <div className="absolute top-4 right-4 z-20">
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/50 backdrop-blur border border-white/80 rounded-full flex items-center justify-center text-slate-600 hover:bg-white transition-all shadow-sm"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-32 hide-scrollbar">
          
          {/* 1. Hero Section */}
          <div className="pt-20 pb-12 px-8 bg-gradient-to-b from-blue-50 to-[#F8F9FA] relative">
            <h1 className="text-3xl font-extrabold text-[#334155] leading-snug mb-4">
              <span className="text-[#0033FF]">병원현장의 경험</span>을 바탕으로<br/> 
              환자와 콘텐츠를 연결하는 마케터를 꿈꿉니다.
            </h1>
            <div className="flex items-center gap-4 mt-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl border-4 border-white shadow-md">
                신
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">신선룡</h2>
                <p className="text-blue-600 font-medium">Hospital Content Marketer Appliant</p>
              </div>
            </div>
          </div>

          {/* 2. About Me */}
          <div className="px-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 opacity-50" />
              <h3 className="text-sm font-bold tracking-wider text-[#0033FF] mb-3 relative z-10">ABOUT ME</h3>
              <p className="text-slate-600 leading-relaxed text-[15px] relative z-10">
                광고홍보학 전공과 종합병원 홍보팀 재직 경험을 바탕으로 <span className="font-bold text-[#0033FF] bg-blue-50 px-1 rounded">고객 경험과 서비스 개선</span>에 관심을 가져왔습니다.
                홍보 업무와 함께 <strong>CS 관련 업무</strong>에도 참여하며 환자와 보호자의 경험(MOT)을 개선하기 위한 아이디어를 고민하고 실행해 왔습니다. 이러한 경험을 바탕으로 <strong>병원 콘텐츠 마케팅 분야</strong>에서 환자 중심의 브랜드 가치를 전달하는 역량을 지속적으로 배우고 발전시키고자 합니다.
              </p>
            </div>
          </div>

          {/* 3. 역량 및 스킬 */}
          <div className="px-6 mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0033FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              핵심 역량
            </h3>
            
            {/* Competency Cards (Horizontal Scroll) */}
            <div className="mb-8 -mx-6 relative group">
              {/* Right Scroll Hint (Visible when not at end) */}
              {!isAtEnd && (
                <div 
                  onClick={scrollToEnd}
                  className="absolute right-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer animate-pulse transition-all hover:scale-110 active:scale-95 hidden sm:flex flex-col items-center"
                >
                  <div className="bg-blue-600/10 backdrop-blur-sm p-3 rounded-full border border-blue-600/20 shadow-lg hover:bg-blue-600/20 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 mt-2 tracking-tighter uppercase">Click to Slide</span>
                </div>
              )}

              {/* Left Scroll Button (Visible when at end) */}
              {isAtEnd && (
                <div 
                  onClick={scrollToStart}
                  className="absolute left-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer animate-bounce-horizontal-left transition-all hover:scale-110 active:scale-95 hidden sm:flex flex-col items-center"
                >
                  <div className="bg-blue-600/10 backdrop-blur-sm p-3 rounded-full border border-blue-600/20 shadow-lg hover:bg-blue-600/20 transition-colors">
                    <svg className="w-6 h-6 text-blue-600 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 mt-2 tracking-tighter uppercase">Back to Start</span>
                </div>
              )}

              {/* Gradient Fade Overlay (Visible when not at end) */}
              <div className={`absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none transition-opacity duration-500 ${isAtEnd ? 'opacity-0' : 'opacity-100'}`} />

              <div 
                ref={scrollRef}
                onScroll={checkScroll}
                className={`flex overflow-x-auto gap-4 px-6 pb-4 snap-x hide-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ scrollbarWidth: 'none' }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {coreCompetencies.map((skill, i) => (
                  <div key={i} className="min-w-[280px] w-[280px] h-[160px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 snap-center shrink-0 flex flex-col pointer-events-none" style={{ userSelect: 'none' }}>
                    <span className="text-xs font-bold text-[#0033FF] mb-2">{skill.tag}</span>
                    <h4 className="font-bold text-slate-800 mb-2 leading-snug">{skill.title}</h4>
                    <p className="text-sm text-slate-500 mt-auto whitespace-pre-line">{skill.desc}</p>
                  </div>
                ))}
                <div className="min-w-[20px] shrink-0" />
              </div>
            </div>

            {/* Hard Skills (Bars) */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="text-xs font-semibold text-slate-400 mb-5">HARD SKILLS</h4>
              <div className="space-y-4">
                {hardSkills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-slate-400 text-xs">{skill.label}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-[#0033FF] rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* 5. Milestones */}
          <div className="px-6 mb-10">
            <h3 className="text-xl font-bold text-slate-800 mb-6">성장 발자취</h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-slate-600 leading-relaxed text-base mb-6 pb-4 border-b border-slate-50 italic break-keep">
                "업무에 도움이 되는 역량을 능동적으로 찾아 배우고 실제 업무에 활용해 왔습니다. 디자인 툴을 공부해 홍보물 제작에 활용했으며 이후 영상 편집도 익혀 업무에 적용했습니다. 현재는 AI 활용 역량을 공부하며 업무 효율을 높일 수 있는 방법을 탐색하고 있으며, 앞으로도 필요한 기술을 꾸준히 배우고 업무에 적용하며 성장해 나가겠습니다."
              </p>
              <div className="relative border-l-2 border-slate-100 ml-3 space-y-6">
                {milestones.map((m: any, i) => (
                  <div key={i} className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#0033FF]" />
                    <div className="flex flex-col">
                      {m.date && <span className="text-sm font-bold text-[#0033FF] mb-1">{m.date}</span>}
                      <span className="font-semibold text-slate-700 text-[15px]">{m.title}</span>
                      {m.subtitle && <span className="text-sm text-slate-500 mt-0.5">{m.subtitle}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6. Certifications */}
          <div className="px-6 mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0033FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              자격사항 (Certifications)
            </h3>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <ul className="space-y-3">
                {certifications.map((cert: any, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-[15px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* 6. 하단 고정 바 (Call to Action) */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-200 z-30 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] flex flex-col">
          {/* 연락처 정보 표시 영역 (토글) */}
          {showContact && (
            <div className="bg-[#0033FF]/5 backdrop-blur-xl px-6 py-8 flex flex-col items-center justify-center border-b border-blue-100 animate-fade-in-up">
              <div className="text-center mb-6">
                <span className="text-[10px] font-bold text-[#0033FF] tracking-[0.2em] uppercase mb-1 block">Contact Information</span>
                <h3 className="text-xl font-bold text-slate-800">연락처를 확인해 주세요</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl px-4">
                <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm flex items-center justify-between group hover:border-[#0033FF]/30 transition-all">
                  <div className="flex items-center gap-4 pr-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0033FF] shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div className="pr-2">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-0.5">Email</p>
                      <p className="text-[15px] font-bold text-slate-700">fresh3.3d@gmail.com</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText('fresh3.3d@gmail.com');
                      alert('이메일 주소가 복사되었습니다.');
                    }}
                    className="p-2.5 text-slate-300 hover:text-[#0033FF] hover:bg-blue-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 shrink-0"
                    title="Copy Email"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm flex items-center justify-between group hover:border-[#0033FF]/30 transition-all">
                  <div className="flex items-center gap-4 pr-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0033FF] shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div className="pr-2">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-0.5">Phone</p>
                      <p className="text-[15px] font-bold text-slate-700">010-2304-5065</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText('010-2304-5065');
                      alert('전화번호가 복사되었습니다.');
                    }}
                    className="p-2.5 text-slate-300 hover:text-[#0033FF] hover:bg-blue-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 shrink-0"
                    title="Copy Phone"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="p-4 sm:p-5 flex gap-3">
            <a
              href="/병원컨텐츠마케터 신선룡.pdf"
              download="병원컨텐츠마케터 신선룡.pdf"
              className="flex-1 py-3.5 bg-slate-100 text-slate-700 font-bold rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 hover:bg-slate-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              이력서
            </a>
            <button 
              onClick={() => setShowContact(!showContact)}
              className="flex-[2] py-3.5 bg-[#0033FF] text-white font-bold rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              {showContact ? '닫기' : '면접 제안하기'}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileModal;
