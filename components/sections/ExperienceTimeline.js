import { GraduationCap, Award, Trophy, Bookmark } from 'lucide-react';
import { profile } from '../../data/profile';

export default function ExperienceTimeline() {
  return (
    <section id="journey" className="relative py-16 sm:py-24 lg:py-28 border-b border-white/10 bg-neutral-950/60">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>05 / Learning & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-100 leading-[1.05] break-words">
            Still learning.
            <br />
            <span className="text-neutral-500 font-light">Always building.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            A concise view of academic milestones, hackathons, and certifications that ground my practical engineering work.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10 sm:space-y-12 max-w-3xl">
          {/* Item 1: B.Tech */}
          <div className="relative group">
            <span className="absolute -left-[37px] sm:-left-[53px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-950 border border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(124,232,255,0.4)]">
              <GraduationCap className="w-3.5 h-3.5" />
            </span>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                Education · Current
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                Expected 2027
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white">
              B.Tech in Computer Science & Engineering — AI & ML
            </h3>
            <div className="text-xs font-medium text-neutral-300 mt-0.5">
              Supreme Knowledge Foundation Group of Institutions, Kolkata
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              Third-year undergraduate specializing in Artificial Intelligence & Machine Learning. Coursework and practical lab work in data structures, algorithms, computer vision pipelines, database management, and software design.
            </p>
          </div>

          {/* Item 2: Smart India Hackathon */}
          <div className="relative group">
            <span className="absolute -left-[37px] sm:-left-[53px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-950 border border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(128,247,167,0.4)]">
              <Trophy className="w-3.5 h-3.5" />
            </span>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                National Hackathon
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                Problem ID: SIH26187
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white">
              Smart India Hackathon (SIH 2025/2026)
            </h3>
            <div className="text-xs font-medium text-neutral-300 mt-0.5">
              Ministry of Home Affairs · Smart Automation Theme
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              Designed and engineered <strong>RAKSHA AI 2.0</strong>, a software-first intelligent video analytics system for border perimeter surveillance. Architected edge AI inference, CLAHE atmospheric de-fogging, animal false-positive suppression, and offline SQLite synchronization over MQTT.
            </p>
          </div>

          {/* Item 3: IIT Hub Patna AI Certification */}
          <div className="relative group">
            <span className="absolute -left-[37px] sm:-left-[53px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-950 border border-violet-400 text-violet-300 shadow-[0_0_12px_rgba(167,139,250,0.4)]">
              <Award className="w-3.5 h-3.5" />
            </span>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-violet-400">
                Certification
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                Verified Program
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white">
              Artificial Intelligence Course — IIT Hub Patna
            </h3>
            <div className="text-xs font-medium text-neutral-300 mt-0.5">
              IIT Hub Patna
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              Completed intensive training covering machine learning foundations, predictive algorithms, neural network design, and hands-on Python model implementation.
            </p>
          </div>

          {/* Item 4: JIS Tech Hackathon */}
          <div className="relative group">
            <span className="absolute -left-[37px] sm:-left-[53px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-950 border border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.4)]">
              <Bookmark className="w-3.5 h-3.5" />
            </span>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                Hackathon Experience
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                Collaborative Build
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white">
              JIS Tech Hackathon
            </h3>
            <div className="text-xs font-medium text-neutral-300 mt-0.5">
              Team Prototype Sprint
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              Collaborated in an engineering team to architect and build a working functional prototype under strict time constraints, presenting to industry judges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
