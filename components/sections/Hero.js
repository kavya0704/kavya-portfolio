import { ArrowRight, ArrowUpRight, FileText, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import HeroCanvas from '../ui/HeroCanvas';
import { profile } from '../../data/profile';

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] lg:min-h-screen flex items-center justify-center overflow-hidden border-b border-white/10 pt-20 pb-16">
      {/* Background Neural Strand Canvas Animation */}
      <HeroCanvas />

      {/* Atmospheric Radial Dim & Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-black/70 via-transparent to-black/85" 
        aria-hidden="true" 
      />
      <div 
        className="absolute w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full border border-white/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[2] shadow-[0_0_140px_rgba(124,232,255,0.06)] animate-pulse-glow" 
        aria-hidden="true" 
      />

      <div className="site-container relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-neutral-950/80 backdrop-blur-xl mb-6 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-neutral-300">
            {profile.availability.status}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight leading-[1.08] sm:leading-[0.98] text-neutral-100 break-words">
          Building intelligent software
          <br className="hidden xs:inline" />
          <span className="text-neutral-500 font-light"> and modern web experiences.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal">
          {profile.heroBio}
        </p>

        {/* Call to Actions */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full">
          <a
            href="#work"
            className="btn-magnetic inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full bg-neutral-100 text-neutral-950 text-xs sm:text-sm font-semibold tracking-wide hover:bg-white shadow-xl hover:shadow-cyan-500/10 w-full sm:w-auto"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="btn-magnetic inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full border border-white/15 bg-neutral-950/70 text-neutral-200 text-xs sm:text-sm font-medium hover:border-white/30 hover:bg-neutral-900/90 backdrop-blur-md w-full sm:w-auto"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

        {/* Verified Social Proof & Résumé Shortcuts */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-neutral-400">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
          <span className="text-neutral-700 hidden sm:inline">•</span>
          <a
            href={profile.contact.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>Résumé</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>

      {/* Viewport Bottom Metadata Bar */}
      <div className="relative mt-10 sm:mt-14 lg:absolute lg:bottom-5 lg:mt-0 inset-x-0 pointer-events-none z-10">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-neutral-500 uppercase tracking-widest text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-neutral-600" />
            <span>{profile.location.display} · Remote worldwide</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>Scroll to explore</span>
            <span className="w-8 h-px bg-white/20 relative overflow-hidden">
              <span className="absolute inset-0 bg-cyan-400 animate-dataflow" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
