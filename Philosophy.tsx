// Removed unused React import

const Philosophy = () => {
  return (
    <section id="profile" className="px-6 lg:px-20 py-32 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0033FF] mb-10">My Philosophy</h2>
        
        <blockquote className="text-4xl lg:text-5xl font-bold text-[#334155] leading-tight mb-12">
           "데이터 너머의 <span className="text-[#0033FF]">환자 경험</span>을 연결하는 <br className="hidden md:block" /> 병원 콘텐츠 마케터로 성장하고 싶습니다."
        </blockquote>
        
        <div className="w-20 h-1 bg-[#0033FF] mx-auto mb-12" />
        
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mx-auto italic whitespace-pre-line">
          "콘텐츠 마케팅 전문성을 갖추기 위해 현장의 소리에 귀 기울이고,{'\n'}환자와 병원을 연결하여 가치를 증명하는 마케터가 되겠습니다."
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
