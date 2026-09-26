import { FileText, MapPin, GraduationCap, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { profile } from '../../data/profile';

export default function AboutMe() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-28 border-b border-white/10 bg-neutral-950/60">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>03 / About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-100 leading-[1.05] break-words">
            Curious by nature.
            <br />
            <span className="text-neutral-500 font-light">Built to make things work.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            I enjoy the intersection of machine learning, backend architecture and interface design—where technical theory becomes software people can actually interact with.
          </p>
        </div>

        {/* 2-Column Split: Narrative on Left, 4 Factual Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Narrative Story */}
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-neutral-300 leading-relaxed">
            {profile.about.map((paragraph, idx) => (
              <p key={idx} className="font-normal text-neutral-400">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href={profile.contact.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-all shadow-md w-full sm:w-auto"
              >
                <FileText className="w-3.5 h-3.5 text-neutral-800" />
                <span>Download Résumé</span>
              </a>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-full border border-white/15 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-medium transition-all w-full sm:w-auto"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* 4 Factual Info Cards */}
          <div className="lg:col-span-6 rounded-3xl border border-white/10 bg-neutral-900/40 divide-y divide-white/10 overflow-hidden shadow-xl">
            <div className="p-4 sm:p-6 flex items-start gap-3.5 sm:gap-4">
              <span className="text-xs font-mono text-cyan-400 p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/20 shrink-0">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                  Location
                </span>
                <span className="text-sm font-semibold text-white block">
                  {profile.location.display}
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Available remotely for domestic and international engagements.
                </span>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4">
              <span className="text-xs font-mono text-emerald-400 p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 shrink-0">
                <GraduationCap className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                  Academics
                </span>
                <span className="text-sm font-semibold text-white block">
                  B.Tech in CSE — Artificial Intelligence & Machine Learning
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Supreme Knowledge Foundation Group of Institutions · Expected 2027
                </span>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4">
              <span className="text-xs font-mono text-violet-400 p-2 rounded-xl bg-violet-950/40 border border-violet-500/20 shrink-0">
                <Code2 className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                  Technical Focus
                </span>
                <span className="text-sm font-semibold text-white block">
                  AI Systems + Python Backend + Modern Web
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Real-time video analytics, microservices, REST APIs and responsive frontends.
                </span>
              </div>
            </div>

            <div className="p-6 flex items-start gap-4">
              <span className="text-xs font-mono text-amber-400 p-2 rounded-xl bg-amber-950/40 border border-amber-500/20 shrink-0">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                  Experience & Verification
                </span>
                <span className="text-sm font-semibold text-white block">
                  Smart India Hackathon & JIS Tech Hackathon
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  IIT Hub Patna Artificial Intelligence Course Certification.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
