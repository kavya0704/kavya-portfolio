import { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  ExternalLink, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { profile } from '../../data/profile';

export default function ContactSection({ onCopyEmail, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Website project',
    budget: '',
    message: '',
    _honeypot: '' // Anti-spam honeypot
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot
    if (formData._honeypot) {
      console.warn('Spam detected via honeypot.');
      setStatus('success');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      setStatus('success');
      showToast({
        type: 'success',
        message: 'Message received! Thank you for reaching out.'
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Website project',
        budget: '',
        message: '',
        _honeypot: ''
      });
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. You can also email me directly.');
    }
  };

  // Graceful fallback to mail client
  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Inquiry from Portfolio — ${formData.projectType || 'Project'}`);
    const body = encodeURIComponent(
      `Hi Kavya,\n\nName: ${formData.name || '—'}\nEmail: ${formData.email || '—'}\nCompany: ${formData.company || '—'}\nProject: ${formData.projectType}\nBudget / Scope: ${formData.budget || '—'}\n\nMessage:\n${formData.message || '—'}\n`
    );
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-28 border-b border-white/10 bg-neutral-950">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-400" />
            <span>06 / Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-100 leading-[1.05] break-words">
            Have an idea
            <br />
            <span className="text-neutral-500 font-light">worth building?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            I&apos;m open to selected freelance projects, collaborations and internship opportunities. Tell me what you&apos;re working on and let&apos;s see what we can build.
          </p>
        </div>

        {/* Split Shell Card */}
        <div className="rounded-3xl border border-white/10 bg-neutral-900/30 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between space-y-8 bg-neutral-950/40">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                Let&apos;s make it happen.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Whether you need a full landing page, a multi-page business website, a custom frontend with Python APIs, or are discussing an internship opportunity, feel free to send a note.
              </p>

              {/* Direct Channels */}
              <div className="mt-8 space-y-3">
                {/* Email with copy */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl border border-white/10 bg-neutral-950/80">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-pink-950/40 border border-pink-500/20 text-pink-400">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${profile.contact.email}`}
                        className="text-xs font-medium text-neutral-200 hover:text-white transition-colors"
                      >
                        {profile.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={onCopyEmail}
                    className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-white/10 bg-neutral-950/80 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-blue-950/40 border border-blue-500/20 text-blue-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                        Professional Network
                      </span>
                      <span className="text-xs font-medium text-neutral-200 group-hover:text-white transition-colors">
                        LinkedIn Profile
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300" />
                </a>

                {/* GitHub */}
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-white/10 bg-neutral-950/80 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300">
                      <GithubIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                        Code Repositories
                      </span>
                      <span className="text-xs font-medium text-neutral-200 group-hover:text-white transition-colors">
                        GitHub @kavya0704
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300" />
                </a>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-2.5 text-xs text-neutral-400 font-mono">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Typical response within 24–48 hours.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10">
            {status === 'success' ? (
              <div className="py-16 text-center space-y-4 animate-fade-in">
                <span className="inline-flex p-3 rounded-2xl bg-emerald-950/50 border border-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </span>
                <h4 className="text-xl font-bold text-white">Message Sent Successfully</h4>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out! I have received your enquiry and will respond to your email as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-magnetic px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from legitimate users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="_honeypot">Leave blank</label>
                  <input
                    type="text"
                    id="_honeypot"
                    name="_honeypot"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData._honeypot}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Your Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-neutral-950 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400/60 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Email Address <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-neutral-950 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Company / Organization <span className="text-neutral-600">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Acme Studio"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-neutral-950 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400/60 transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-neutral-950 text-xs text-white focus:outline-none focus:border-cyan-400/60 transition-colors"
                    >
                      <option value="Landing page">Landing Page</option>
                      <option value="Business website">Business Website</option>
                      <option value="Custom web experience">Custom Web Experience</option>
                      <option value="Internship opportunity">Internship Opportunity</option>
                      <option value="AI / ML collaboration">AI / ML Collaboration</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range (Optional) */}
                <div className="space-y-1.5">
                  <label htmlFor="budget" className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Estimated Budget / Timeline <span className="text-neutral-600">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="e.g. Scope dependent / Within 2-4 weeks"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-neutral-950 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400/60 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Message Details <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me about your product, timeline, or required functionality..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-neutral-950 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400/60 transition-colors resize-none"
                  />
                </div>

                {/* Error Banner with Mailto Fallback */}
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl border border-rose-500/20 bg-rose-950/30 text-rose-300 text-xs flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="px-2.5 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 text-[11px] font-medium transition-colors shrink-0 underline"
                    >
                      Open Email App
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-magnetic inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleMailtoFallback}
                    className="text-[11px] font-mono text-neutral-500 hover:text-neutral-300 transition-colors underline text-center sm:text-right py-1"
                  >
                    Or open directly in mail client ↗
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
