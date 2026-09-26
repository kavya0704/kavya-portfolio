import { ArrowRight, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

export default function FreelanceCTA({ onCopyEmail }) {
  return (
    <section className="relative py-16 sm:py-24 border-b border-white/10 bg-gradient-to-b from-neutral-950/80 via-neutral-900/40 to-neutral-950 overflow-hidden">
      {/* Background Radial Glow */}
      <div 
        className="absolute w-[450px] h-[450px] rounded-full border border-cyan-500/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 blur-3xl bg-cyan-500/10"
        aria-hidden="true" 
      />

      <div className="site-container relative z-10 text-center max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[10px] font-mono uppercase tracking-widest text-cyan-300 mb-6">
          High-Quality Web Engineering
        </div>

        <h3 className="text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight break-words">
          Have a website idea?
          <br />
          <span className="text-neutral-400 font-light">Let&apos;s build it properly.</span>
        </h3>

        <p className="mt-5 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal">
          Whether you&apos;re launching something new or modernizing an existing website, I can help turn the idea into a clean, responsive and production-ready experience.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-xs sm:max-w-none mx-auto w-full">
          <a
            href="#contact"
            className="btn-magnetic inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-all shadow-xl w-full sm:w-auto"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={onCopyEmail}
            className="btn-magnetic inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 rounded-full border border-white/15 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs sm:text-sm font-medium transition-all w-full sm:w-auto"
          >
            <Mail className="w-4 h-4 text-pink-400" />
            <span>Email Me Directly</span>
          </button>
        </div>
      </div>
    </section>
  );
}
