import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Command, 
  ArrowUpRight 
} from 'lucide-react';
import { profile } from '../../data/profile';

export default function Navbar({ onOpenCommandPalette, toggleTheme, isDark }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();

  // Handle scroll state & active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = ['work', 'services', 'about', 'skills', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <>
      <header className="fixed top-3 sm:top-4 inset-x-0 z-[120] pointer-events-none transition-all duration-300">
        <div className="site-container flex items-center justify-between pointer-events-auto">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-neutral-950/70 hover:bg-neutral-900/90 text-neutral-100 backdrop-blur-xl transition-all shadow-lg"
          >
            <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/20 text-[10px] font-semibold tracking-wider font-mono text-cyan-300 overflow-hidden">
              <span>{profile.initials}</span>
              <span className="absolute inset-0 rounded-full border border-cyan-400/40 animate-spin-slow pointer-events-none" />
            </span>
            <span className="text-xs font-semibold tracking-tight pr-1 group-hover:text-white transition-colors">
              {profile.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 bg-neutral-950/70 backdrop-blur-xl shadow-lg"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-neutral-400 hover:text-neutral-100 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Command Palette, Theme, Contact */}
          <div className="flex items-center gap-2">
            {/* Quick Command Trigger (⌘K) */}
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-neutral-950/70 hover:bg-neutral-900 text-neutral-400 hover:text-neutral-100 backdrop-blur-xl text-xs transition-all shadow-md group"
              aria-label="Open command palette"
              title="Search commands (Ctrl+K or ⌘K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400 transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline text-[11px] font-mono opacity-80">⌘K</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 bg-neutral-950/70 hover:bg-neutral-900 text-neutral-400 hover:text-neutral-100 backdrop-blur-xl transition-all shadow-md"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
              )}
            </button>

            {/* Direct Let's Talk CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-300 hover:text-cyan-200 text-xs font-semibold backdrop-blur-xl transition-all shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-white/10 bg-neutral-950/70 hover:bg-neutral-900 text-neutral-200 backdrop-blur-xl transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          {/* Tap-outside Backdrop */}
          <div 
            className="fixed inset-0 z-[118] bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-x-4 top-20 z-[119] lg:hidden rounded-2xl border border-white/15 bg-neutral-950/95 backdrop-blur-2xl shadow-2xl p-4 animate-fade-in max-h-[calc(100svh-6rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-neutral-600 font-mono">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-white text-neutral-950 text-xs font-semibold tracking-wide uppercase shadow-lg transition-transform active:scale-95"
                >
                  Discuss a Project
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full text-center py-2 rounded-xl border border-white/10 text-neutral-400 text-xs flex items-center justify-center gap-2"
                >
                  <Command className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open Command Palette</span>
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
