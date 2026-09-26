import { Code2, Cpu, Server, Globe } from 'lucide-react';
import { skillCategories, continuousLearningTicker } from '../../data/skills';

export default function TechnicalSkills() {
  const iconMap = {
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
    Server: <Server className="w-5 h-5 text-violet-400" />,
    Globe: <Globe className="w-5 h-5 text-amber-400" />
  };

  return (
    <section id="skills" className="relative py-16 sm:py-24 lg:py-28 border-b border-white/10 bg-neutral-950/80">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span>04 / Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-100 leading-[1.05] break-words">
            The tools behind
            <br />
            <span className="text-neutral-500 font-light">the work.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            No artificial mastery percentages. Concrete languages, frameworks and libraries actively used across prototypes, backends and interfaces.
          </p>
        </div>

        {/* 4-Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-neutral-900/40 hover:border-white/20 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <span className="p-2 rounded-xl bg-neutral-950 border border-white/10">
                    {iconMap[category.iconName]}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    STACK
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-xl border border-white/10 bg-neutral-950 text-xs font-mono text-neutral-300 hover:border-white/20 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Marquee Ticker */}
        <div 
          className="mt-12 sm:mt-16 pt-8 border-t border-white/10 overflow-hidden relative" 
          aria-hidden="true"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'
          }}
        >
          <div className="flex gap-8 whitespace-nowrap animate-[ticker_35s_linear_infinite]">
            {continuousLearningTicker.concat(continuousLearningTicker).map((item, idx) => (
              <span
                key={idx}
                className="text-xs font-mono tracking-wider uppercase text-neutral-500 flex items-center gap-4"
              >
                <span>{item}</span>
                <span className="text-cyan-400/50">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
