import React, { useRef, useState } from 'react';
import ProjectImageModal from './ProjectImageModal';
import ProjectPdfModal from './ProjectPdfModal';


const ProjectCard = ({ title, goal, role, execution, result, tools, index, url, images, pdfUrl, onImageClick, onPdfClick }: any) => {
  const [clickStartX, setClickStartX] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    const diff = Math.abs(e.clientX - clickStartX);
    if (diff < 5) { // 드래그가 아닌 클릭인 경우에만 동작
      if (pdfUrl) {
        onPdfClick(title, pdfUrl);
      } else if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else if (images && images.length > 0) {
        onImageClick(title, images);
      }
    }
  };

  return (
    <div className={`glass p-6 lg:p-7 rounded-[32px] hover:scale-[1.01] transition-all duration-500 glow-blue group w-[75vw] md:w-[48vw] lg:w-[32vw] shrink-0 snap-center flex flex-col ${(url || pdfUrl || (images && images.length > 0)) ? 'cursor-pointer' : ''}`}
         style={{ userSelect: 'none' }} // 드래그 시 텍스트 선택 방지
         onMouseDown={(e) => setClickStartX(e.clientX)}
         onClick={handleClick}
    >
      {/* Header with improved spacing - Fixed height for alignment */}
      <div className="mt-10 mb-6 pointer-events-none flex justify-between items-start gap-4 min-h-[70px] lg:min-h-[85px]">
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-3 py-0.5 rounded-full bg-[#0033FF]/10 text-[#0033FF] text-[12px] font-bold tracking-widest uppercase">
              Project {index + 1}
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight whitespace-pre-line">
            {title}
          </h3>
        </div>
        {(url || pdfUrl || (images && images.length > 0)) && (
          <div className="flex items-center pt-0.5">
            <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#0033FF]/60 group-hover:text-[#0033FF] transition-colors bg-white/50 px-2 py-1 rounded-lg border border-[#0033FF]/10 shadow-sm uppercase tracking-wider">
              {url ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  LINK
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  WORKS
                </>
              )}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col h-full pointer-events-none flex-grow">
        <div className="flex-grow mb-2">
          {/* Content sections above Result - Fixed height for alignment */}
          <div className="space-y-4 min-h-[280px] lg:min-h-[300px] mb-4">
            {/* Section: Goal */}
            <div className="relative pl-7">
              <div className="absolute left-0 top-1 text-[#0033FF] opacity-70">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h4 className="text-[16px] font-black uppercase tracking-[0.1em] text-[#0033FF] mb-1.5">프로젝트 목적</h4>
              <p className="text-[17px] text-slate-600 leading-snug font-medium whitespace-pre-line">{goal}</p>
            </div>
            
            {/* Section: Role */}
            <div className="relative pl-7">
              <div className="absolute left-0 top-1 text-[#0033FF] opacity-70">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h4 className="text-[16px] font-black uppercase tracking-[0.1em] text-[#0033FF] mb-1.5">주요 역할</h4>
              <p className="text-[17px] text-slate-700 leading-snug font-bold whitespace-pre-line">{role}</p>
            </div>

            {/* Section: Execution */}
            <div className="relative pl-7">
              <div className="absolute left-0 top-1 text-[#0033FF] opacity-70">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h4 className="text-[16px] font-black uppercase tracking-[0.1em] text-[#0033FF] mb-1.5">수행 내용</h4>
              <p className="text-[16px] text-slate-600 leading-snug font-medium whitespace-pre-line">{execution}</p>
            </div>
          </div>
          
          {/* Section: Result */}
          <div className="relative pl-7 p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100/30">
            <div className="absolute left-4 top-4 text-[#0033FF]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 12 2 2 4-4"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <h4 className="text-[16px] font-black uppercase tracking-[0.1em] text-[#0033FF] mb-1.5 ml-5">성과</h4>
            <p className="text-[17px] text-[#0033FF] leading-snug font-medium whitespace-pre-line ml-5">{result}</p>
          </div>
        </div>
        
        {/* Tools Section */}
        <div className="pt-4 border-t border-slate-200/60 mt-auto">
          <div className="flex items-center gap-2 mb-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
              <path d="m21 16-4 4-4-4"></path>
              <path d="M17 20V4"></path>
              <path d="m3 8 4-4 4 4"></path>
              <path d="M7 4v16"></path>
            </svg>
            <h4 className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">Tech Stack & Tools</h4>
          </div>
          <div className="flex flex-wrap gap-1.5 pointer-events-auto">
            {tools.map((tool: string, i: number) => (
              <span key={i} className="px-2.5 py-0.5 bg-white/50 border border-slate-200/80 text-slate-600 rounded-lg text-[11px] font-bold shadow-sm transition-transform hover:-translate-y-0.5">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // 마우스 드래그 스크롤을 위한 상태
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // 모달 상태 관리를 위한 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalImages, setModalImages] = useState<string[]>([]);

  // PDF 모달 상태
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [pdfModalTitle, setPdfModalTitle] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const openModal = (title: string, images: string[]) => {
    setModalTitle(title);
    setModalImages(images);
    setIsModalOpen(true);
  };

  const openPdfModal = (title: string, url: string) => {
    setPdfModalTitle(title);
    setPdfUrl(url);
    setIsPdfModalOpen(true);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector('.snap-center');
      if (card) {
        const cardWidth = card.getBoundingClientRect().width;
        container.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -400, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector('.snap-center');
      if (card) {
        const cardWidth = card.getBoundingClientRect().width;
        container.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 400, behavior: 'smooth' });
      }
    }
  };

  // 마우스 이벤트 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPos(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절 승수
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const projects = [
    {
      title: "병원 SNS 콘텐츠 기획 및 운영",
      goal: "병원 브랜드 인지도 제고 및 병원 서비스에 대한 정보 전달 채널 구축",
      role: "SNS 채널 총괄 운영 및 콘텐츠 기획·제작",
      execution: "타깃 환자층을 고려한 카드뉴스 및 건강정보 콘텐츠 기획·제작,\n병원 진료과 및 의료진 강점을 반영한 브랜드 홍보 콘텐츠 정기 발행",
      result: "SNS 채널 운영 체계 구축 및 콘텐츠 정기 발행 기반 마련, 병원 브랜드 노출 확대 및 진료 정보 전달 채널 활성화",
      tools: ["Illustrator", "Photoshop", "SNS Platforms"],
      url: "https://www.instagram.com/achung_jjang?igsh=bTk2cDRpYnoxN2I2"
    },
    {
      title: "병원 홍보물 제작 및 브랜딩 디자인",
      goal: "병원 브랜드 이미지를 일관되게 전달하고 환자들이 쉽게 병원 정보를\n인지할 수 있도록 다양한 홍보 및 안내 콘텐츠 제작",
      role: "온·오프라인 병원 홍보물 기획 및 디자인 제작",
      execution: "병원 안내 리플렛 및 홍보 브로슈어 디자인\n병원 행사 및 캠페인 홍보 포스터 디자인\n병원 동선 안내 사인물 및 내부 안내 디자인 제작\n병원 외부 간판 디자인 및 환경 그래픽 제작\n택시·버스 래핑 광고 디자인 제작",
      result: "병원 홍보 및 안내 콘텐츠를 통합적으로 제작하여\n병원 브랜드 이미지 일관성 강화 및 환자 안내 커뮤니케이션 개선",
      tools: ["Illustrator", "Photoshop", "3D MAX"],
      images: [
        "/projects/project2/sns.png",
        "/projects/project2/promotion.png",
        "/projects/project2/leaflet.png"
      ]
    },
    {
      title: "환자경험관리(CX) 운영 및 서비스 개선 활동",
      goal: "환자경험평가 대응 및 환자 중심 서비스 환경 구축을 통한 병원 서비스 품질 개선",
      role: "환자경험평가 담당, 만족도 조사 및 개선 활동 수행",
      execution: "환자경험평가 대응을 위한 환자 만족도 조사 설계 및 운영\n모바일 및 오프라인 만족도 조사 시스템 구축 및 참여 캠페인 운영\n조사 결과 데이터 분석을 통한 서비스 개선 과제 도출\n의료진 및 직원 대상 CS 교육 및 환자경험 개선 활동 진행\n환자 참여 이벤트 및 병원 내 안내 홍보물 기획·운영",
      result: "환자 의견 수집 체계 구축 및 병원 서비스 개선 프로세스 운영\n환자경험 기반 서비스 개선 활동 정착 및 환자 만족도 관리 체계 강화",
      tools: ["Excel", "Google Forms", "PowerPoint"],
      images: [
        "/projects/project3/lecture1.jpg",
        "/projects/project3/survey1.png",
        "/projects/project3/survey2.png",
        "/projects/project3/survey3.png",
        "/projects/project3/survey4.png"
      ]
    },
    {
      title: "사내 행사 기획 및 내부 커뮤니케이션 운영",
      goal: "임직원 참여 프로그램 운영을 통해 조직문화 활성화 및 내부 커뮤니케이션 강화",
      role: "사내 행사 기획 및 운영 총괄",
      execution: "임직원 참여형 사내 이벤트 및 캠페인 기획·운영\n사내 공모전, 문화행사 등 직원 참여 프로그램 기획\n행사 홍보 포스터 및 내부 커뮤니케이션 콘텐츠 제작\n행사 운영 및 참여자 관리, 결과 보고서 작성",
      result: "임직원 참여 프로그램 운영을 통한 조직 내 참여 문화 활성화\n내부 커뮤니케이션 콘텐츠 제작 및 행사 운영 프로세스 구축",
      tools: ["Illustrator", "Photoshop", "PowerPoint", "Excel", "한글(HWP)", "MS Word"],
      images: [
        "/projects/project4/contest.png",
        "/projects/project4/event_planning.png",
        "/projects/project4/event_pediatrics.png"
      ]
    },
    {
      title: "정부지원사업(수출바우처)\n홍보·광고 지원분야 정산 검수 및 운영 관리",
      goal: "해외 수출바우처 홍보·광고 지원분야 정산요청 건 검수 및 사업 운영 지원",
      role: "수출바우처 사업 홍보·광고 지원분야 정산 검수 및 사업 운영 지원",
      execution: "수행기관 제출 정산요청 건 검수\n(광고성과 확인 및 광고 집행 증빙 등 주요 증빙 서류 대조)\nKOTRA·중진공 수출바우처 정산 가이드 기준 하 검토 및 적용\n민원기업 응대 매뉴얼 수립 및 교육지원\n팀 내 검수 현황 및 인원별 진행 상황 관리\nOpenAI 활용 검수 지원 체계 구축 및 업무 효율화",
      result: "참여기업 응대 매뉴얼 구축을 통한 정산 문의 대응 체계 정비\n팀 내 검수 진행 현황 관리로 검수 운영 체계 안정화\nAI 기반 검수 지원 체계 활용을 통한 업무 효율성 개선",
      tools: ["Excel", "OpenAI (AI 기반 검수 지원 체계 구축)"],
      pdfUrl: "/voucher_manual.pdf"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-24 bg-[#F1F5F9] overflow-hidden flex flex-col justify-center min-h-[90vh]">
      <div className="max-w-[100vw]">
        <div className="px-6 lg:px-20 mb-10 lg:mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0033FF] mb-4">Selected Work</h2>
            <p className="text-4xl lg:text-5xl font-bold text-[#334155] leading-snug lg:leading-normal">
              전문성과 실행력으로 <br /> 실질적인 변화를 만듭니다.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center hover:bg-[#0033FF] hover:border-[#0033FF] hover:text-white transition-all text-slate-500 bg-white shadow-sm"
              aria-label="이전 프로젝트"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center hover:bg-[#0033FF] hover:border-[#0033FF] hover:text-white transition-all text-slate-500 bg-white shadow-sm"
              aria-label="다음 프로젝트"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className={`relative z-10 flex overflow-x-auto gap-8 px-6 lg:px-20 pt-14 pb-4 touch-pan-x hide-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab snap-x snap-mandatory'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {projects.map((project, index) => (
             <ProjectCard 
               key={index} 
               {...project} 
               index={index} 
               onImageClick={openModal} 
               onPdfClick={openPdfModal}
             />
          ))}
          {/* 패딩을 주기 위한 더미 요소 추가 */}
          <div className="shrink-0 w-[4vw] md:w-[2vw]"></div>
        </div>
        
        {/* 데스크탑/모바일 공통 가이드 (드래그 기능 추가로 안내 문구 렌더링 유지) */}
        <div className="text-center text-slate-400 text-lg font-medium animate-pulse mt-10 mb-4 relative z-0">
           좌우로 스와이프하거나 빈 공간을 마우스로 드래그하여 더 보기
        </div>
        
        {/* Project Image Modal */}
        <ProjectImageModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalTitle}
          images={modalImages}
        />

        {/* Project PDF Modal */}
        <ProjectPdfModal 
          isOpen={isPdfModalOpen}
          onClose={() => setIsPdfModalOpen(false)}
          title={pdfModalTitle}
          pdfUrl={pdfUrl}
        />
      </div>
    </section>
  );
};

export default Projects;
