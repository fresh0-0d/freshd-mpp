

type SkillCategoryProps = {
  title: string;
  skills: string[];
  level: string;
  description: string;
};

const SkillCategory = ({ title, skills, level, description }: SkillCategoryProps) => {
  return (
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl group flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <h4 className="text-xl font-bold text-[#334155] leading-tight break-keep">{title}</h4>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#0033FF] bg-blue-50 px-2 py-1 rounded-md shrink-0 ml-2">
          {level}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
       {skills.map((skill: string, i: number) => (
          <span key={i} className="px-3 py-1.5 bg-white rounded-lg border border-slate-100 text-slate-600 text-sm font-medium group-hover:border-[#0033FF] transition-colors duration-300">
            {skill}
          </span>
        ))}
      </div>
      <p className="text-sm text-slate-400 mt-auto leading-relaxed break-keep">
        {description}
      </p>
    </div>
  );
};

const SkillMatrix = () => {
  const categories = [
    {
      title: "Design & Visual Content",
      skills: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "3D MAX"],
      level: "STRONG",
      description: "홍보 콘텐츠 제작 및 영상 편집 가능한 디자인 툴"
    },
    {
      title: "Business & Documentation",
      skills: ["Excel", "PowerPoint", "HWP", "Process Documentation"],
      level: "RELIABLE",
      description: "업무 보고, 자료 제작 및 문서 정리 역량"
    },
    {
      title: "AI & Productivity",
      skills: ["ChatGPT", "Gemini", "NotebookLM", "AI Prompt Engineering"],
      level: "EXPLORING",
      description: "AI 기반 업무 효율화 및 정보 분석 활용"
    },
    {
      title: "Tech & Workflow",
      skills: ["Vibe Coding", "AI Workflow Automation"],
      level: "EXPLORING",
      description: "새로운 기술을 활용한 업무 자동화 및 생산성 개선 탐색"
    }
  ];

  return (
    <section className="px-6 lg:px-20 py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0033FF] mb-4 text-center md:text-left">Skill Matrix</h2>
          <p className="text-3xl md:text-4xl font-bold text-[#334155] text-center md:text-left break-keep">
            다양한 도구와 기술을 활용해 <br className="hidden md:block" /> 업무를 효율적으로 수행하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <SkillCategory key={index} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMatrix;
