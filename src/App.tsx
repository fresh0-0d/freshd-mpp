// Removed unused React import
import Hero from './components/Hero'
import Projects from './components/Projects'
import Philosophy from './components/Philosophy'
import SkillMatrix from './components/SkillMatrix'

function App() {
  return (
    <main className="min-h-screen">
      {/* Navigation - Enhanced Minimalist */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-50/90 backdrop-blur-xl border-b border-blue-100/50 px-6 lg:px-20 py-5 transition-all duration-300">
        <div className="flex justify-between items-center w-full">
          <div className="text-lg md:text-xl font-bold tracking-tighter text-[#334155] text-left">
            병원 현장의 경험을 바탕으로 환자와 콘텐츠를 연결하는 마케터 <span className="text-[#0033FF]">신선룡</span>입니다.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-[#334155]/60">
            <a href="#projects" className="hover:text-[#0033FF] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#0033FF] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Adjusted padding for fixed nav */}
      <div className="pt-20">
        <Hero />
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Philosophy Section */}
      <Philosophy />

      {/* Skill Matrix Section */}
      <SkillMatrix />

      {/* Contact / Footer */}
      <footer id="contact" className="px-6 lg:px-20 py-32 bg-[#334155] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">배우고, 이해하고, 변화시키겠습니다!</h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              배우는 태도와 성장에 대한 열정을 바탕으로,<br />
              병원의 경험을 환자와 콘텐츠로 연결하고 더 나은 가치를 만들어가는<br />
              <span className="text-white font-bold">병원 콘텐츠 마케터로 성장하겠습니다.</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 text-slate-300">
              <a href="mailto:fresh3.3d@gmail.com" className="flex items-center gap-3 text-xl font-medium hover:text-[#0033FF] transition-colors text-white group">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-[#0033FF] transition-colors">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                fresh3.3d@gmail.com
              </a>
              <div className="flex items-center gap-3 text-xl text-slate-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                010-2304-5065
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-slate-700 text-sm text-slate-500">
          @신선한 공뇽
        </div>
      </footer>
    </main>
  )
}

export default App
