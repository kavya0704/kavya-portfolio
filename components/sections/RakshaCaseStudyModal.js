import { useState } from 'react';
import Link from 'next/link';
import { 
  X, 
  ExternalLink, 
  FolderGit2, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Radio, 
  Layers, 
  Eye, 
  Workflow, 
  CheckCircle2,
  AlertTriangle,
  Flame,
  ArrowRight
} from 'lucide-react';
import { projects } from '../../data/projects';

export default function RakshaCaseStudyModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('architecture');
  const raksha = projects.find((p) => p.slug === 'raksha-ai');

  if (!isOpen || !raksha) return null;

  return (
    <div
      className="fixed inset-0 z-[190] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="raksha-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl border border-white/15 bg-neutral-950 text-neutral-100 shadow-2xl overflow-y-auto flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-neutral-950/95 backdrop-blur-xl">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="p-2 rounded-xl bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                SIH26187 Case Study
              </div>
              <h2 id="raksha-modal-title" className="text-sm sm:text-lg font-bold tracking-tight text-white truncate sm:overflow-visible">
                {raksha.title} <span className="hidden sm:inline">— Intelligent Video Analytics</span>
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-4 sm:px-6 pt-3 sm:pt-4 border-b border-white/10 overflow-x-auto text-xs font-medium no-scrollbar">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 border-b-2 transition-all shrink-0 ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`pb-3 border-b-2 transition-all shrink-0 ${
              activeTab === 'pipeline'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Vision & Edge AI
          </button>
          <button
            onClick={() => setActiveTab('offline')}
            className={`pb-3 border-b-2 transition-all shrink-0 ${
              activeTab === 'offline'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Offline Store & Forward
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-3 border-b-2 transition-all shrink-0 ${
              activeTab === 'gallery'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Tactical UI Gallery
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-6">
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 rounded-2xl border border-white/10 bg-neutral-900/60">
                <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-cyan-400" />
                  <span>End-to-End Pipeline Visualization</span>
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  RAKSHA AI 2.0 operates as an edge-first surveillance retrofit. Rather than transmitting heavy continuous video over unreliable border links, processing occurs locally near the camera, dispatching lightweight event records only when breach criteria are satisfied.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 mt-4">
                  {raksha.architecture.map((step) => (
                    <div
                      key={step.step}
                      className="p-3 rounded-xl border border-white/10 bg-neutral-950/80"
                    >
                      <div className="text-[10px] font-mono text-cyan-400 mb-1">{step.step}</div>
                      <div className="text-xs font-semibold text-neutral-200">{step.name}</div>
                      <div className="text-[11px] text-neutral-400 mt-1 leading-snug">{step.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-white/10 bg-neutral-900/40">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-mono">
                    Problem Statement (SIH26187)
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Passive CCTV setups induce extreme sentry visual fatigue over hours of continuous observation. Furthermore, frequent false alarms from wildlife (camels, stray dogs, cattle) degrade operational readiness, while intermittent network links cause alert loss.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-neutral-900/40">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-mono">
                    Engineering Solution
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Camera-agnostic software-only retrofit executing YOLOv8 model inference at the edge, applying CLAHE atmospheric de-fogging, filtering wildlife into silent safe tags, and maintaining an offline-first SQLite buffer with MQTT synchronization.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pipeline' && (
            <div className="space-y-4 animate-fade-in text-xs text-neutral-300">
              <div className="p-4 rounded-2xl border border-white/10 bg-neutral-900/50 space-y-3">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Computer Vision & Classification Layers</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl border border-white/10 bg-neutral-950">
                    <div className="font-semibold text-neutral-100 mb-1">Atmospheric CLAHE</div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Contrast-limited adaptive histogram equalization executed in LAB color space to penetrate high-altitude fog and dust storms without blowing out highlights.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-white/10 bg-neutral-950">
                    <div className="font-semibold text-neutral-100 mb-1">YOLOv8 Detection</div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Optimized Ultralytics YOLOv8 inference running locally on video frames to detect and bound humans, vehicles, and wildlife.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-white/10 bg-neutral-950">
                    <div className="font-semibold text-neutral-100 mb-1">Euclidean Tracking</div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Maintains object centroid permanence across sequential video frames, calculating velocity vectors and directional perimeter crossing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-neutral-900/50">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-mono">
                  Wildlife False-Positive Suppression
                </h4>
                <p className="leading-relaxed text-neutral-400">
                  Detected non-threat fauna (cattle, camels, dogs, horses) are categorized and flagged with safe non-alarm metadata. Sentries are not distracted with blaring sirens for harmless animal grazing, while genuine human incursion vectors immediately trigger high-priority alerts.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'offline' && (
            <div className="space-y-4 animate-fade-in text-xs text-neutral-300">
              <div className="p-4 rounded-2xl border border-white/10 bg-neutral-900/50 space-y-3">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span>Resilient Store-and-Forward Architecture</span>
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  Remote border outposts frequently experience severed telecommunication lines. RAKSHA AI 2.0 is designed from the ground up to never lose an alert.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl border border-white/10 bg-neutral-950">
                    <div className="font-semibold text-neutral-100 mb-1">Encrypted Edge SQLite Store</div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Every incursion event, timestamp, frame coordinate, and thumbnail evidence is written immediately to a local SQLite database on the edge node.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl border border-white/10 bg-neutral-950">
                    <div className="font-semibold text-neutral-100 mb-1">MQTT Asynchronous Sync</div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      A background MQTT worker monitors broker reachability. When connectivity returns, it flushes queued incidents with accurate latency tags.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-4 animate-fade-in">
              <div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900">
                <img
                  src={raksha.images.dashboard}
                  alt="RAKSHA AI 2.0 Command Center Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 text-[11px] text-neutral-400 font-mono border-t border-white/10">
                  Command Center Dashboard: Real-Time Tactical Video Wall Matrix with Sub-millisecond Zulu Mission Clock.
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900">
                  <img
                    src={raksha.images.thermal}
                    alt="Thermal Incursion Detection"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 text-[11px] text-neutral-400 font-mono border-t border-white/10">
                    LWIR Thermal Incursion Tracking & Reticle HUD
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900">
                  <img
                    src={raksha.images.hud}
                    alt="Tactical Detection HUD"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 text-[11px] text-neutral-400 font-mono border-t border-white/10">
                    Live Bounding Reticle & Monitored Sterile Zone Geometry
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 border-t border-white/10 bg-neutral-950/95 backdrop-blur-xl">
          <div className="flex items-center justify-center sm:justify-start">
            <Link
              href="/projects/raksha-ai"
              className="text-xs font-semibold text-cyan-300 hover:text-white transition-colors inline-flex items-center gap-1.5 py-1"
            >
              <span>View Full Case Study Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <a
              href={raksha.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 rounded-xl bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-lg text-center"
            >
              <span>Launch Live Prototype</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={raksha.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 rounded-xl border border-white/15 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-semibold transition-colors text-center"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>GitHub Source</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
