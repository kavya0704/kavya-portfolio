import { freelanceProcess } from '../../data/services';

export default function FreelanceProcess() {
  return (
    <section className="relative py-16 sm:py-24 border-b border-white/10 bg-neutral-950/80">
      <div className="site-container relative z-10">
        <div className="max-w-xl mb-10 sm:mb-14">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
            Process & Methodology
          </div>
          <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-white break-words">
            From Idea to Launch.
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
            A structured, transparent development approach without agency bloat or unnecessary back-and-forth.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {freelanceProcess.map((step) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl border border-white/10 bg-neutral-900/40 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-light text-cyan-400/80 block mb-3">
                  {step.step}
                </span>
                <h4 className="text-base font-semibold text-white mb-2">
                  {step.name} — {step.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
