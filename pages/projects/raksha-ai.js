import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  FolderGit2, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Radio, 
  Eye, 
  Workflow, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Clock,
  Terminal,
  Server
} from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SpotlightTracker from '../../components/ui/SpotlightTracker';
import Toast from '../../components/ui/Toast';
import CommandPalette from '../../components/ui/CommandPalette';
import { useState } from 'react';
import { projects } from '../../data/projects';
import { profile } from '../../data/profile';

export default function RakshaProjectPage({ toggleTheme, isDark }) {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const raksha = projects.find((p) => p.slug === 'raksha-ai');

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setToast({
      type: 'success',
      message: `Copied ${profile.contact.email} to clipboard!`
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Head>
        <title>RAKSHA AI 2.0 — Intelligent Video Analytics | Kavya Shaw</title>
        <meta
          name="description"
          content="RAKSHA AI 2.0 is an edge-first intelligent video analytics prototype by Kavya Shaw combining YOLOv8 computer vision, OpenCV, FastAPI, MQTT, WebSockets and a React monitoring dashboard."
        />
        <meta property="og:title" content="RAKSHA AI 2.0 — Intelligent Video Analytics | Kavya Shaw" />
        <meta
          property="og:description"
          content="Edge-first video analytics platform for border surveillance prototype (SIH26187). Local inference, CLAHE atmospheric de-fogging, animal false-positive suppression, and offline SQLite synchronization over MQTT."
        />
        <meta property="og:type" content="article" />
      </Head>

      <SpotlightTracker />
      <Navbar
        onOpenCommandPalette={() => setIsCommandOpen(true)}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />

      <main className="pt-28 pb-20">
        <div className="site-container max-w-4xl">
          {/* Back to Home Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Selected Work</span>
            </Link>
          </div>

          {/* Header Title & Badges */}
          <div className="space-y-4 pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 font-mono text-[11px] uppercase tracking-wider">
                SIH26187 · Ministry of Home Affairs
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-neutral-900 text-neutral-400 font-mono text-[11px] uppercase tracking-wider">
                Edge-First Prototype
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">
              RAKSHA AI 2.0
              <span className="block text-2xl sm:text-3xl text-neutral-500 font-light mt-1">
                रक्षा AI — Intelligent Video Analytics Platform
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl">
              An edge-first video analytics architecture engineered to upgrade existing CCTV infrastructure with localized YOLOv8 computer vision, CLAHE atmospheric de-fogging, animal false-positive suppression, resilient offline SQLite synchronization, and a real-time command dashboard.
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href={raksha.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-all shadow-xl text-center w-full sm:w-auto"
              >
                <span>Launch Live Prototype</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={raksha.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 rounded-full border border-white/15 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs sm:text-sm font-medium transition-all text-center w-full sm:w-auto"
              >
                <FolderGit2 className="w-4 h-4 text-neutral-400" />
                <span>View GitHub Source</span>
              </a>
            </div>
          </div>

          {/* Main Screenshot Showcase */}
          <div className="my-12 rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-950">
            <img
              src={raksha.images.dashboard}
              alt="RAKSHA AI 2.0 Command Center Dashboard"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 border-t border-white/10 bg-neutral-900/60 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>BSF Sentinel-AI Command Center Dashboard Matrix</span>
              <span className="text-cyan-400">Zulu Mission Clock Active</span>
            </div>
          </div>

          {/* Case Study Detailed Breakdown */}
          <div className="space-y-16 text-neutral-300 leading-relaxed">
            {/* 01 / Operational Challenge */}
            <section className="space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                01 / The Operational Challenge
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Passive Monitoring & Frontier Link Constraints
              </h2>
              <p className="text-sm sm:text-base text-neutral-400">
                India shares over 15,000 km of international borders spanning dense mountain passes, riverine marshlands, and arid desert terrain. While thousands of CCTV cameras exist under modernization initiatives, they operate primarily as passive recorders.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl border border-white/10 bg-neutral-900/40">
                  <div className="text-xs font-mono text-rose-400 uppercase mb-2">Traditional Vulnerability</div>
                  <ul className="space-y-2 text-xs text-neutral-400">
                    <li>• Sentry fatigue causes visual detection lapses after long shifts.</li>
                    <li>• Harmless wildlife (cattle, camels, dogs) triggers constant false sirens.</li>
                    <li>• Remote communication cuts cause alerts to fail silently in the cloud.</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl border border-white/10 bg-neutral-900/40">
                  <div className="text-xs font-mono text-cyan-400 uppercase mb-2">RAKSHA AI 2.0 Solution</div>
                  <ul className="space-y-2 text-xs text-neutral-400">
                    <li>• Edge-first YOLOv8 autonomous object inference near the camera feed.</li>
                    <li>• Non-alerting safe tags for verified harmless animal grazing.</li>
                    <li>• Local SQLite store-and-forward buffers all incidents during link drops.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 02 / Computer Vision & Image Enhancement */}
            <section className="space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                02 / Computer Vision Pipeline
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Atmospheric De-Noising & Sub-second Detection
              </h2>
              <p className="text-sm sm:text-base text-neutral-400">
                High-altitude border posts regularly face dense fog, dust storms, and low-light conditions. RAKSHA AI 2.0 incorporates a specialized image enhancement pre-processing pipeline:
              </p>
              <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/50 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-xl bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Eye className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">CLAHE in LAB Color Space</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Contrast-Limited Adaptive Histogram Equalization operates on the luminance channel (L) while preserving chromaticity (A, B). This reveals camouflaged movement in heavy fog without washing out scene colors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">YOLOv8 & Centroid Tracking</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Ultralytics YOLOv8 nano models run frame-by-frame inference. Centroid trackers assign persistent IDs to detected entities, tracking entry angle, velocity vectors, and virtual tripwire crossings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Thermal & HUD Visuals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-950">
                  <img
                    src={raksha.images.thermal}
                    alt="Thermal Incursion Detection"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 text-[11px] font-mono text-neutral-400 border-t border-white/10">
                    LWIR Thermal Incursion Tracking & Reticle HUD
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-950">
                  <img
                    src={raksha.images.hud}
                    alt="Tactical Detection HUD"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 text-[11px] font-mono text-neutral-400 border-t border-white/10">
                    Live Bounding Reticle & Sterile Zone Geometry
                  </div>
                </div>
              </div>
            </section>

            {/* 03 / Offline Store-and-Forward */}
            <section className="space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                03 / Resilient Networking
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Offline-First SQLite Buffer & MQTT Sync
              </h2>
              <p className="text-sm sm:text-base text-neutral-400">
                Cloud-dependent security systems fail when cables are cut or weather disables satellite uplinks. RAKSHA AI 2.0 adopts an offline-first architecture:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl border border-white/10 bg-neutral-900/40">
                  <div className="text-xs font-mono text-neutral-500 mb-1">01 / LOCAL BUFFER</div>
                  <h4 className="text-sm font-semibold text-white mb-2">Encrypted SQLite</h4>
                  <p className="text-xs text-neutral-400">
                    Every incident timestamp, coordinate boundary, snapshot, and classification is committed locally to disk first.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-white/10 bg-neutral-900/40">
                  <div className="text-xs font-mono text-neutral-500 mb-1">02 / MESSAGE BROKER</div>
                  <h4 className="text-sm font-semibold text-white mb-2">MQTT Transport</h4>
                  <p className="text-xs text-neutral-400">
                    Lightweight MQTT pub/sub transmission queues and guarantees packet delivery even over low-bandwidth tactical radio links.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border border-white/10 bg-neutral-900/40">
                  <div className="text-xs font-mono text-neutral-500 mb-1">03 / REAL-TIME PUSH</div>
                  <h4 className="text-sm font-semibold text-white mb-2">FastAPI WebSockets</h4>
                  <p className="text-xs text-neutral-400">
                    The centralized monitoring backend ingests synced incidents and broadcasts updates directly into active browser sessions.
                  </p>
                </div>
              </div>
            </section>

            {/* 04 / Technical Stack */}
            <section className="space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-violet-400">
                04 / Technical Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Technologies Employed
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {raksha.technologies.map((t) => (
                  <div
                    key={t}
                    className="p-4 rounded-xl border border-white/10 bg-neutral-900/60 text-center"
                  >
                    <span className="text-sm font-mono font-medium text-white">{t}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 05 / Engineering Reflections */}
            <section className="space-y-4 pb-8">
              <div className="text-[11px] font-mono uppercase tracking-widest text-amber-400">
                05 / Key Takeaways
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                What Building RAKSHA AI 2.0 Taught Me
              </h2>
              <div className="space-y-3 text-sm text-neutral-400">
                <p>
                  <strong>System Design over Isolated Models:</strong> Training or downloading a machine learning model is only 20% of an operational system. Building the edge capture, atmospheric image pre-processing, persistent tracking, local database queuing, and responsive operations dashboard demanded genuine full-stack architecture.
                </p>
                <p>
                  <strong>Designing for Unreliable Conditions:</strong> Developing for frontier outposts forced me to think through connectivity loss, graceful store-and-forward synchronization, and low false-alarm thresholds to preserve human focus.
                </p>
              </div>
            </section>
          </div>

          {/* Bottom Navigation */}
          <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors py-2 sm:py-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio Home</span>
            </Link>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href={raksha.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 sm:py-2.5 rounded-full bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-lg text-center"
              >
                Launch Prototype
              </a>
              <a
                href={raksha.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 sm:py-2.5 rounded-full border border-white/15 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-medium transition-colors text-center"
              >
                GitHub Code
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer onCopyEmail={copyEmail} />
      <Toast toast={toast} onClose={() => setToast(null)} />
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onCopyEmail={copyEmail}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
    </div>
  );
}
