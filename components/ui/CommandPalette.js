import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { 
  Search, 
  ExternalLink, 
  Sun, 
  Moon, 
  FileText, 
  FolderGit2, 
  Mail, 
  Copy, 
  Check, 
  Briefcase, 
  Cpu, 
  User, 
  X,
  Compass
} from 'lucide-react';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';

export default function CommandPalette({ isOpen, onClose, onCopyEmail, toggleTheme, isDark }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();

  // Define commands
  const commands = [
    {
      id: 'work',
      category: 'Navigation',
      label: 'Explore Selected Work',
      detail: 'View RAKSHA AI 2.0, CareerAI & DrowsiGuard',
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      action: () => {
        router.push('#work');
        onClose();
      }
    },
    {
      id: 'services',
      category: 'Navigation',
      label: 'Freelance Services (What I Can Build)',
      detail: 'Landing pages, business sites, custom web apps',
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => {
        router.push('#services');
        onClose();
      }
    },
    {
      id: 'about',
      category: 'Navigation',
      label: 'About Kavya Shaw',
      detail: 'B.Tech CSE (AI/ML) & background',
      icon: <User className="w-4 h-4 text-amber-400" />,
      action: () => {
        router.push('#about');
        onClose();
      }
    },
    {
      id: 'skills',
      category: 'Navigation',
      label: 'Technical Toolkit & Skills',
      detail: 'Python, YOLOv8, OpenCV, FastAPI, Next.js',
      icon: <Cpu className="w-4 h-4 text-violet-400" />,
      action: () => {
        router.push('#skills');
        onClose();
      }
    },
    {
      id: 'contact',
      category: 'Navigation',
      label: 'Contact / Discuss a Project',
      detail: 'Open inquiry form & details',
      icon: <Mail className="w-4 h-4 text-pink-400" />,
      action: () => {
        router.push('#contact');
        onClose();
      }
    },
    {
      id: 'raksha-live',
      category: 'Projects',
      label: 'Launch RAKSHA AI 2.0 Prototype',
      detail: 'Live demo of border surveillance video analytics',
      icon: <ExternalLink className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.open('https://raksha20-ten.vercel.app/', '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'raksha-repo',
      category: 'Projects',
      label: 'View RAKSHA AI 2.0 GitHub Source',
      detail: 'Source repository: kavya0704/raksha2.0',
      icon: <FolderGit2 className="w-4 h-4 text-neutral-400" />,
      action: () => {
        window.open('https://github.com/kavya0704/raksha2.0', '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'career-live',
      category: 'Projects',
      label: 'Launch CareerAI Copilot',
      detail: 'Live full-stack job platform demo',
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.open('https://career-ai-web.vercel.app/', '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'drowsi-live',
      category: 'Projects',
      label: 'Launch DrowsiGuard Pro',
      detail: 'Driver drowsiness detection computer-vision system',
      icon: <ExternalLink className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.open('https://deploy-five-theta-92.vercel.app/', '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'resume',
      category: 'Actions',
      label: 'Download / View Résumé',
      detail: 'Kavya Shaw official CV',
      icon: <FileText className="w-4 h-4 text-indigo-400" />,
      action: () => {
        window.open(profile.contact.resumeUrl, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'copy-email',
      category: 'Actions',
      label: `Copy Email (${profile.contact.email})`,
      detail: 'Click to copy address to clipboard',
      icon: <Copy className="w-4 h-4 text-teal-400" />,
      action: () => {
        onCopyEmail();
        onClose();
      }
    },
    {
      id: 'github',
      category: 'Socials',
      label: 'GitHub Profile (@kavya0704)',
      detail: 'github.com/kavya0704',
      icon: <ExternalLink className="w-4 h-4 text-neutral-400" />,
      action: () => {
        window.open(profile.contact.github, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'linkedin',
      category: 'Socials',
      label: 'LinkedIn Profile',
      detail: 'Connect with Kavya Shaw on LinkedIn',
      icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.open(profile.contact.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'toggle-theme',
      category: 'Preferences',
      label: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      detail: 'Toggle aesthetic theme',
      icon: isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        toggleTheme();
        onClose();
      }
    }
  ];

  // Filter commands by query
  const filtered = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.label.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      cmd.detail.toLowerCase().includes(q)
    );
  });

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
      return;
    }

    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1 < filtered.length ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filtered.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[180] flex items-start justify-center pt-14 sm:pt-20 px-3 sm:px-4 bg-black/75 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-white/15 bg-neutral-950/95 text-neutral-100 shadow-2xl overflow-hidden flex flex-col max-h-[82vh] sm:max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-4 h-4 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-neutral-400 border border-white/10 rounded bg-white/5">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-sm text-neutral-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between gap-3 transition-colors ${
                    isSelected
                      ? 'bg-white/10 text-white'
                      : 'text-neutral-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="p-1.5 rounded-lg bg-neutral-900 border border-white/10 shrink-0">
                      {cmd.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-medium tracking-tight truncate">
                        {cmd.label}
                      </div>
                      <div className="text-[11px] text-neutral-400 truncate">
                        {cmd.detail}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 px-2 py-0.5 rounded bg-white/5 shrink-0">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts info */}
        <div className="px-4 py-2.5 bg-neutral-900/60 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">↑↓ to navigate</span>
            <span className="hidden sm:inline">↵ to select</span>
            <span className="sm:hidden">Tap any item to open</span>
          </div>
          <span className="text-[10px] font-mono">⌘K / Ctrl+K</span>
        </div>
      </div>
    </div>
  );
}
