import type { ReactNode } from 'react';
type ProfileCardProps = {
  title: string;
  items: string[];
  icon: ReactNode;
  delay: string;
};
const ProfileCard = ({ title, items, icon, delay }: ProfileCardProps) => {
  return (
    <div className={`bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group animate-scale-up ${delay}`}>
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0033FF] transition-colors duration-500">
        <div className="text-[#0033FF] group-hover:text-white transition-colors duration-500">
          {icon}
        </div>
      </div>
      <h4 className="text-2xl font-bold text-[#334155] mb-6 group-hover:text-[#0033FF] transition-colors">
        {title}
      </h4>
      <ul className="space-y-4">
      {items.map((item: string, i: number) => (
          <li key={i} className="flex items-center text-slate-600 font-medium">
            <span className="w-1.5 h-1.5 bg-[#0033FF] rounded-full mr-3 opacity-40 group-hover:opacity-100 transition-opacity" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Profile = () => {
  const pillars = [
    {
      title: "병원현장에 대한 깊은 이해",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-3h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
      ),
      items: ["진료과 특성 이해", "병원 내부 문화", "환자 여정 분석", "이해관계자 소통"],
      delay: "stagger-1"
    },
    {
      title: "다재다능한 실무역량",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      items: ["기획력", "디자인 능력", "영상 제작", "행사 기획"],
      delay: "stagger-2"
    }
  ];

  return (
    <section id="profile" className="px-6 lg:px-20 py-32 bg-[#F8F9FA] relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0033FF] mb-6 animate-reveal">Profile & Experience</h2>
          <p className="text-4xl md:text-5xl font-bold text-[#334155] leading-tight animate-reveal stagger-1">
            현장의 언어를 데이터로 번역하고, <br />
            <span className="text-[#0033FF]">가치를 시각화</span>하는 힘을 가졌습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pillars.map((pillar, index) => (
            <ProfileCard key={index} {...pillar} />
          ))}
        </div>

        {/* Floating element for visual interest */}
        <div className="mt-20 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm animate-scale-up stagger-3 flex flex-wrap items-center justify-between gap-8">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center font-bold text-[#0033FF]">01</div>
            <div>
              <p className="font-bold text-[#334155]">기획부터 디자인까지</p>
              <p className="text-sm text-slate-500">병원의 가치를 높이는 지원자</p>
            </div>
          </div>
          <div className="h-px w-full md:w-24 bg-slate-100 hidden md:block" />
          <p className="text-2xl font-bold text-[#334155]">신선룡입니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
