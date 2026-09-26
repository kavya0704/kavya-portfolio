import { useState } from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { profile } from '../../data/profile';

export default function Footer({ onCopyEmail }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-neutral-950/80 backdrop-blur-xl text-neutral-400 py-14 overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-white/10">
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/20 text-[10px] font-semibold tracking-wider font-mono text-cyan-300">
                {profile.initials}
              </span>
              <span className="text-sm font-semibold text-neutral-100 tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-neutral-500 max-w-md leading-relaxed">
              Third-year B.Tech CSE (AI/ML) student at Supreme Knowledge Foundation Group of Institutions. Building practical AI prototypes, Python APIs, and modern responsive web experiences.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-neutral-400 font-medium">
                {profile.availability.status}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-2">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Freelance Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Toolkit & Skills
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Learning & Hackathons
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Direct Connect */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 mb-2">
              Connect
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-neutral-300" />
                <span>GitHub @kavya0704</span>
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn /kavya-shaw</span>
              </a>
              <button
                type="button"
                onClick={onCopyEmail}
                className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors text-left group"
              >
                <Mail className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span className="group-hover:underline break-all">{profile.contact.email}</span>
                <Copy className="w-3 h-3 text-neutral-500 group-hover:text-neutral-300 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <div>
            <span>© {currentYear} Kavya Shaw. Designed & built with care.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <span className="font-mono text-[11px] text-neutral-600">
              Kolkata, India • Next.js & Tailwind CSS
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
