import { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, 
  FolderGit2, 
  ShieldCheck, 
  ArrowUpRight, 
  Layers, 
  Activity, 
  Cpu, 
  Workflow, 
  Sparkles,
  Info,
  Maximize2,
  Radio
} from 'lucide-react';
import { projects } from '../../data/projects';
import RakshaCaseStudyModal from './RakshaCaseStudyModal';

export default function SelectedWork() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rakshaView, setRakshaView] = useState('diagram'); // 'diagram' | 'screenshot'

  const raksha = projects.find((p) => p.slug === 'raksha-ai');
  const careerAi = projects.find((p) => p.slug === 'career-ai');
  const drowsi = projects.find((p) => p.slug === 'drowsiguard');

  // Gentle 3D Tilt Hook for Flagship card (desktop only with fine pointer)
  const cardRef = useRef(null);
  const handlePointerMove = (e) => {
    if (typeof window !== 'undefined' && (window.innerWidth < 1024 || window.matchMedia('(hover: none)').matches)) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty('--ry', `${nx * 3.5}deg`);
    card.style.setProperty('--rx', `${ny * -2.5}deg`);
    card.style.setProperty('--px', `${(nx + 0.5) * 100}%`);
    card.style.setProperty('--py', `${(ny + 0.5) * 100}%`);
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--ry', '0deg');
    card.style.setProperty('--rx', '0deg');
  };

  return (
    <section id="work" className="relative py-16 sm:py-24 lg:py-28 border-b border-white/10 overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 grid-pattern-bg opacity-30 pointer-events-none" aria-hidden="true" />
      
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>01 / Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-100 leading-[1.05]">
            Ideas, made real.
            <br />
            <span className="text-neutral-500 font-light">Systems that move.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            Projects spanning real-time computer vision, distributed backends, messaging and responsive interfaces. Practical engineering built to solve real operational problems.
          </p>
        </div>

        {/* ====================================================================
            FLAGSHIP 01: RAKSHA AI 2.0 (Full-Width Showcase)
            ==================================================================== */}
        {raksha && (
          <article
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="tilt-card relative rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-neutral-950 overflow-hidden shadow-2xl transition-all mb-12 group"
          >
            {/* Top Bar / Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                  {raksha.badge}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-lg border border-white/10 bg-neutral-950 p-0.5 text-[11px] font-mono">
                  <button
                    type="button"
                    onClick={() => setRakshaView('diagram')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      rakshaView === 'diagram' ? 'bg-white/15 text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Architecture Flow
                  </button>
                  <button
                    type="button"
                    onClick={() => setRakshaView('screenshot')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      rakshaView === 'screenshot' ? 'bg-white/15 text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Live Screen
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>
              </div>
            </div>

            {/* Split Content: Left Information / Right Interactive Diagram */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
              {/* Left Column: Project Copy */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 mb-2">
                    01 / {raksha.category}
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">
                    {raksha.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-neutral-300 mb-4">
                    {raksha.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {raksha.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 space-y-2.5 text-xs text-neutral-300">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">↳</span>
                      <span><strong>Edge AI:</strong> Local video inference with YOLOv8 & OpenCV.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">↳</span>
                      <span><strong>False-Positive Suppression:</strong> Safely filters wildlife alarms.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-violet-400 font-mono">↳</span>
                      <span><strong>Offline Resilience:</strong> Encrypted SQLite store with MQTT sync.</span>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-8">
                    {raksha.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full border border-white/10 bg-neutral-950/80 text-[10px] font-mono uppercase tracking-wide text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project CTAs */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <a
                    href={raksha.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-magnetic inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-all shadow-lg w-full sm:w-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={raksha.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-magnetic inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-medium transition-all w-full sm:w-auto"
                  >
                    <FolderGit2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>View Source</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="btn-magnetic inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 text-xs font-medium transition-all w-full sm:w-auto"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive Diagram OR Screenshot Preview */}
              <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[500px] flex items-center justify-center p-4 sm:p-8 bg-neutral-950/90 overflow-hidden">
                {rakshaView === 'diagram' ? (
                  <>
                    {/* MOBILE PIPELINE VIEW (< sm screen phones): zero overlap, clear stacked cards */}
                    <div className="sm:hidden w-full space-y-2.5 py-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          <span>Tactical Signal Pipeline</span>
                        </span>
                        <span className="text-[9px] text-neutral-500">SIH26187 Edge Flow</span>
                      </div>

                      {/* Step 1: Input */}
                      <div className="p-3 rounded-2xl border border-white/10 bg-neutral-900/90 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-mono text-neutral-400">01</span>
                          <div>
                            <div className="text-[9px] font-mono text-neutral-500 uppercase">Input</div>
                            <div className="text-xs font-semibold text-white">Camera / RTSP</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">CCTV Stream</span>
                      </div>

                      {/* Step 2: Edge AI */}
                      <div className="p-3 rounded-2xl border border-cyan-500/30 bg-neutral-900/90 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-[10px] font-mono text-cyan-400">02</span>
                          <div>
                            <div className="text-[9px] font-mono text-cyan-400 uppercase">Edge Inference</div>
                            <div className="text-xs font-semibold text-white">YOLOv8 + CLAHE</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-300">De-Fogging</span>
                      </div>

                      {/* Step 3: Central MQTT Hub */}
                      <div className="p-3.5 rounded-2xl border border-cyan-400/50 bg-cyan-950/40 flex items-center justify-between shadow-lg">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                            <Radio className="w-3.5 h-3.5 animate-pulse" />
                          </span>
                          <div>
                            <div className="text-[9px] font-mono text-cyan-300 uppercase">Core Broker</div>
                            <div className="text-xs font-bold text-white">MQTT Sync Engine</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-300 font-semibold">Pub / Sub</span>
                      </div>

                      {/* Step 4: Local SQLite Buffer */}
                      <div className="p-3 rounded-2xl border border-white/10 bg-neutral-900/90 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-[10px] font-mono text-emerald-400">04</span>
                          <div>
                            <div className="text-[9px] font-mono text-emerald-400 uppercase">Resilience</div>
                            <div className="text-xs font-semibold text-white">Local SQLite Store</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400">Zero Loss</span>
                      </div>

                      {/* Step 5: Monitoring UI */}
                      <div className="p-3 rounded-2xl border border-white/10 bg-neutral-900/90 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-violet-950/50 border border-violet-500/30 flex items-center justify-center text-[10px] font-mono text-violet-400">05</span>
                          <div>
                            <div className="text-[9px] font-mono text-violet-400 uppercase">Command Telemetry</div>
                            <div className="text-xs font-semibold text-white">React Dashboard</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">FastAPI WS</span>
                      </div>
                    </div>

                    {/* TABLET & DESKTOP ECOSYSTEM VIEW (sm: and above): expansive 2D circular diagram */}
                    <div className="hidden sm:flex relative w-full h-full min-h-[380px] items-center justify-center">
                      {/* Background Grid Accent */}
                      <div className="absolute inset-0 grid-pattern-bg opacity-20 pointer-events-none" />

                      {/* Center Core: MQTT Broker & Event Flow */}
                      <div className="relative z-10 flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-cyan-400/40 bg-neutral-950 shadow-[0_0_50px_rgba(124,232,255,0.15)] group-hover:border-cyan-400 transition-colors">
                        <span className="absolute inset-2 rounded-full border border-dashed border-cyan-400/30 animate-spin-slow pointer-events-none" />
                        <span className="absolute inset-5 rounded-full border border-dashed border-white/20 animate-spin-reverse pointer-events-none" />
                        <Radio className="w-5 h-5 text-cyan-400 mb-1" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-200 font-bold text-center leading-tight">
                          MQTT<br />SYNC
                        </span>
                      </div>

                      {/* Node 1: Video Input */}
                      <div className="absolute top-[8%] left-[6%] sm:left-[10%] p-3 rounded-xl border border-white/15 bg-neutral-900/90 shadow-xl backdrop-blur-md max-w-[140px] animate-float-gentle">
                        <div className="text-[10px] font-mono text-neutral-400 uppercase">Input</div>
                        <div className="text-xs font-semibold text-white">Camera / RTSP</div>
                        <div className="text-[9px] text-neutral-400 mt-0.5">Existing CCTV stream</div>
                      </div>

                      {/* Node 2: Edge AI */}
                      <div 
                        className="absolute top-[6%] right-[6%] sm:right-[10%] p-3 rounded-xl border border-white/15 bg-neutral-900/90 shadow-xl backdrop-blur-md max-w-[140px] animate-float-gentle"
                        style={{ animationDelay: '-1.2s' }}
                      >
                        <div className="text-[10px] font-mono text-cyan-400 uppercase">Edge AI</div>
                        <div className="text-xs font-semibold text-white">YOLOv8 + CLAHE</div>
                        <div className="text-[9px] text-neutral-400 mt-0.5">Atmospheric de-fog</div>
                      </div>

                      {/* Node 3: Local SQLite Store */}
                      <div 
                        className="absolute bottom-[8%] left-[6%] sm:left-[10%] p-3 rounded-xl border border-white/15 bg-neutral-900/90 shadow-xl backdrop-blur-md max-w-[140px] animate-float-gentle"
                        style={{ animationDelay: '-2.4s' }}
                      >
                        <div className="text-[10px] font-mono text-emerald-400 uppercase">Resilience</div>
                        <div className="text-xs font-semibold text-white">Local SQLite</div>
                        <div className="text-[9px] text-neutral-400 mt-0.5">Zero alert loss</div>
                      </div>

                      {/* Node 4: Monitoring UI */}
                      <div 
                        className="absolute bottom-[8%] right-[6%] sm:right-[10%] p-3 rounded-xl border border-white/15 bg-neutral-900/90 shadow-xl backdrop-blur-md max-w-[140px] animate-float-gentle"
                        style={{ animationDelay: '-1.8s' }}
                      >
                        <div className="text-[10px] font-mono text-violet-400 uppercase">Telemetry</div>
                        <div className="text-xs font-semibold text-white">React Dashboard</div>
                        <div className="text-[9px] text-neutral-400 mt-0.5">FastAPI WebSockets</div>
                      </div>

                      {/* Connecting Data Flow Lines */}
                      <div className="absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <line x1="22%" y1="20%" x2="44%" y2="44%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                          <line x1="78%" y1="20%" x2="56%" y2="44%" stroke="rgba(124,232,255,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                          <line x1="22%" y1="80%" x2="44%" y2="56%" stroke="rgba(128,247,167,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                          <line x1="78%" y1="80%" x2="56%" y2="56%" stroke="rgba(167,139,250,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  /* High-Resolution Screenshot Gallery Preview */
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900 group/img">
                      <img
                        src={raksha.images.dashboard}
                        alt="RAKSHA AI 2.0 Command Center Dashboard"
                        className="w-full h-auto object-cover transform transition-transform duration-500 group-hover/img:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <p className="text-[11px] font-mono text-neutral-300">
                          Live Tactical Video Wall & Zulu Mission Clock
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        )}

        {/* ====================================================================
            PROJECTS 02 & 03: CareerAI Copilot & DrowsiGuard Pro (2-Column Grid)
            ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 02: CareerAI Copilot */}
          {careerAi && (
            <article className="tilt-card flex flex-col justify-between rounded-3xl border border-white/10 bg-neutral-950/70 p-6 sm:p-8 hover:border-white/20 transition-all shadow-xl group">
              <div>
                {/* Visual Header / Mockup */}
                <div className="relative h-44 rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 overflow-hidden mb-6 p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>JOB DISCOVERY & TAILORING</span>
                    </span>
                    <span>FASTAPI MICROSERVICE</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 w-3/4 rounded-lg bg-white/5 border border-white/10 animate-pulse" />
                    <div className="h-4 w-1/2 rounded-md bg-white/5" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-2 border-t border-white/5">
                    <span>Jaccard Similarity Index</span>
                    <span className="text-emerald-400">Outreach SMTP Ready</span>
                  </div>
                  {/* Subtle scanline animation */}
                  <span className="absolute inset-x-0 h-px bg-cyan-400/40 animate-scanline pointer-events-none" />
                </div>

                <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 mb-2">
                  02 / {careerAi.category}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                  {careerAi.title}
                </h3>
                <div className="text-xs font-medium text-neutral-400 mb-3">
                  {careerAi.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {careerAi.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {careerAi.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full border border-white/10 bg-neutral-900 text-[10px] font-mono text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={careerAi.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-magnetic inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 hover:text-white hover:bg-emerald-500/20 transition-all text-center w-full sm:w-auto"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={careerAi.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-magnetic inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-neutral-900/60 text-xs text-neutral-300 hover:text-white transition-all text-center w-full sm:w-auto"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>GitHub Source</span>
                </a>
              </div>
            </article>
          )}

          {/* Project 03: DrowsiGuard Pro */}
          {drowsi && (
            <article className="tilt-card flex flex-col justify-between rounded-3xl border border-white/10 bg-neutral-950/70 p-6 sm:p-8 hover:border-white/20 transition-all shadow-xl group">
              <div>
                {/* Visual Header / Mockup */}
                <div className="relative h-44 rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 overflow-hidden mb-6 p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>FACIAL LANDMARK RADAR</span>
                    </span>
                    <span>468 POINTS</span>
                  </div>
                  {/* Subtle Face Geometry Vector Outline */}
                  <div className="relative w-20 h-24 mx-auto my-auto border border-white/20 rounded-[48%_48%_44%_44%] flex items-center justify-center">
                    <span className="w-8 h-2 border-t border-white/60 rounded-full" />
                    <span className="absolute inset-2 border border-dashed border-cyan-400/30 rounded-full animate-spin-slow" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-2 border-t border-white/5">
                    <span>EAR / MAR Metric Tracking</span>
                    <span className="text-amber-400">Privacy Safe Mode</span>
                  </div>
                  {/* Subtle scanline animation */}
                  <span className="absolute inset-x-0 h-px bg-amber-400/40 animate-scanline pointer-events-none" style={{ animationDelay: '-1.5s' }} />
                </div>

                <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 mb-2">
                  03 / {drowsi.category}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                  {drowsi.title}
                </h3>
                <div className="text-xs font-medium text-neutral-400 mb-3">
                  {drowsi.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {drowsi.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {drowsi.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full border border-white/10 bg-neutral-900 text-[10px] font-mono text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={drowsi.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-magnetic inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 hover:text-white hover:bg-amber-500/20 transition-all text-center w-full sm:w-auto"
                >
                  <span>Launch Live System</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={drowsi.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-magnetic inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-neutral-900/60 text-xs text-neutral-300 hover:text-white transition-all text-center w-full sm:w-auto"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>GitHub Source</span>
                </a>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* Flagship Case Study Interactive Modal */}
      <RakshaCaseStudyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
