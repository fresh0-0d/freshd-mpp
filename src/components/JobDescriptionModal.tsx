import { useEffect } from 'react';

const JobDescriptionModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
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

  const sections = [
    {
      title: '홍보 및 미디어 커뮤니케이션',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      tasks: [
        { main: 'SNS 채널 운영 및 콘텐츠 제작', sub: '홈페이지, 블로그, 인스타그램, 유튜브 기획 및 업로드' },
        { main: "사보 '충무마당' 총괄", sub: '편집회의 운영, 원고 검토 및 배포 프로세스 관리' },
        { main: '방송 및 언론 대응', sub: '의료진 방송 출연·인터뷰 조율 및 촬영 현장 밀착 지원' },
        { main: '외부 촬영 행정 지원', sub: '영화·드라마·CF 촬영 협조 및 관련 인허가 행정 업무' },
        { main: '홍보 기사 작성', sub: '병원 주요 행사 및 성과 관련 보도자료 작성 및 배포' },
      ]
    },
    {
      title: '홍보 콘텐츠 및 브랜드 디자인',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      tasks: [
        { main: '홍보물 디자인 및 제작', sub: '리플렛, 포스터, 배너, 현수막 등 인쇄물 관리' },
        { main: '디지털 콘텐츠 운영', sub: '키오스크 화면 디자인 및 DID 영상 콘텐츠 제작·송출' },
        { main: '공간 사이니지 관리', sub: '병동 및 부서 신설 시 간판/안내물 디자인 기획 및 시공' },
        { main: '대외 광고 운영', sub: '택시, 신문 광고 등 대외 매체 광고 디자인 및 집행' },
        { main: '브랜딩 굿즈 기획', sub: '연간 달력, 병원 답례품 등 브랜드 아이덴티티 굿즈 제작' },
      ]
    },
    {
      title: '병원 행사 및 내부 커뮤니케이션',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      tasks: [
        { main: '사내외 행사 기획', sub: '명절 행사, 직원 참여 프로그램 등 사내 이벤트 운영' },
        { main: '대외 협약 및 의전', sub: 'MOU 협약식 준비 및 주요 내빈 의전 지원' },
        { main: '행사 운영 관리', sub: '행사 홍보물 제작 및 현장 운영 전반 총괄' },
        { main: '조직문화 활성화', sub: '사내 커뮤니케이션 강화를 위한 캠페인 기획 및 홍보' },
        { main: '직원 소통 콘텐츠', sub: '내부 공지 및 조직문화 관련 콘텐츠 정기 제작' },
      ]
    },
    {
      title: '환자 경험 관리 및 서비스 개선',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      tasks: [
        { main: '고객 만족도 조사', sub: '환자 경험 평가 대응 및 모바일 설문 시스템 구축·운영' },
        { main: '서비스 개선 활동', sub: '환자 의견 수집 및 데이터 기반 서비스 프로세스 개선 추진' },
        { main: '현장 모니터링', sub: '환자 접점 부서 서비스 모니터링 및 피드백' },
        { main: '직원 CS 교육', sub: '전 직원 대상 친절 교육 기획 및 전문 강의 직접 진행' },
        { main: '환자 중심 환경 조성', sub: '설명 유인물 개선 등 PX(Patient Experience) 강화 활동' },
      ]
    }
  ];

  const fullWidthSection = {
    title: '홍보 운영 및 대외 협력',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    columns: [
      [
        { main: '채널 및 자산 관리', sub: '병원 홈페이지 콘텐츠 최신화 및 홍보물 제작 요청 관리' },
        { main: '계약 및 행정', sub: '홍보 관련 협력업체 관리 및 용역 계약 행정 프로세스 수행' },
      ],
      [
        { main: '대외 협력 및 벤치마킹', sub: '한국병원홍보협회 활동 및 타 병원 우수 사례 벤치마킹' },
        { main: 'PPT 및 자료 관리', sub: '병원 소개 프레젠테이션 자료 기획 및 최신화' },
      ]
    ]
  };

  const competencies = [
    { title: '콘텐츠 기획 및 제작', icon: 'fa-photo-film' },
    { title: '브랜딩 및 디자인 관리', icon: 'fa-palette' },
    { title: '환자 경험(CX) 개선', icon: 'fa-hospital-user' },
    { title: '병원 내/외부 커뮤니케이션', icon: 'fa-comments' },
    { title: '병원홍보 네트워크 활동', icon: 'fa-network-wired' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative w-full h-full sm:h-[90vh] max-w-4xl bg-[#F8F9FA] sm:rounded-[24px] overflow-hidden flex flex-col shadow-2xl animate-fade-in-up mx-auto">
        
        {/* Header */}
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
        <div className="flex-1 overflow-y-auto pb-12 hide-scrollbar">
          
          <div className="pt-16 pb-10 px-8 bg-gradient-to-b from-blue-50 to-[#F8F9FA] border-b border-blue-100/30">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] tracking-tight mb-2">JOB DESCRIPTION</h1>
                <p className="text-lg text-slate-600 font-bold">병원홍보직무기술서</p>
              </div>
              <div className="hidden md:block text-right">
                <a
                  href="/job-description.pdf"
                  download="job-description.pdf"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors mb-2 bg-blue-50 px-2 py-1 rounded-md border border-blue-100"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  직무기술서 내려받기
                </a>
                <div className="text-xs font-bold text-blue-600 tracking-widest opacity-60">PROFESSIONAL PORTFOLIO</div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group">
                  <div className="flex items-center gap-3 mb-5 py-2.5 px-4 bg-[#1e3a8a] rounded-xl text-white shadow-sm">
                    <div className="p-1.5 bg-white/10 rounded-lg text-white">
                      {section.icon}
                    </div>
                    <h3 className="font-bold text-[15px]">{section.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {section.tasks.map((task, tidx) => (
                      <li key={tidx} className="relative pl-4 border-b border-slate-50 pb-3 last:border-0">
                        <div className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                        <strong className="block text-[13.5px] text-[#1e3a8a] mb-0.5">{task.main}</strong>
                        <p className="text-[14px] text-slate-500 leading-relaxed">{task.sub}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex items-center gap-3 mb-5 py-2.5 px-4 bg-[#1e3a8a] rounded-xl text-white shadow-sm">
                  <div className="p-1.5 bg-white/10 rounded-lg text-white">
                    {fullWidthSection.icon}
                  </div>
                  <h3 className="font-bold text-[15px] underline decoration-white/20 decoration-2 underline-offset-4">{fullWidthSection.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {fullWidthSection.columns.map((col, cidx) => (
                    <ul key={cidx} className="space-y-4">
                      {col.map((task, tidx) => (
                        <li key={tidx} className="relative pl-4 border-b border-slate-50 pb-3 last:border-0 group">
                          <div className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-slate-400 rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
                          <strong className="block text-[13.5px] text-slate-700 mb-0.5">{task.main}</strong>
                          <p className="text-[14px] text-slate-500 leading-relaxed">{task.sub}</p>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>

              {/* Core Competencies */}
              <div className="col-span-1 md:col-span-2 bg-slate-100/50 p-6 rounded-2xl border border-slate-200/50">
                <div className="flex items-center gap-3 mb-6 py-2 px-4">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-black text-[16px] text-[#1e3a8a] tracking-tight">핵심 수행 역량 (Core Competencies)</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {competencies.map((comp, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 to-indigo-500" />
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <i className={`fa-solid ${comp.icon}`}></i>
                      </div>
                      <span className="text-[12px] font-bold text-blue-900 leading-tight break-keep">{comp.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10 text-center">
              <p className="text-xs text-slate-400 tracking-wider">
                실무 수행 내용을 바탕으로 작성된 직무기술서입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionModal;
