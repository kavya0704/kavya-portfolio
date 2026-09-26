import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import SelectedWork from '../components/sections/SelectedWork';
import Services from '../components/sections/Services';
import FreelanceProcess from '../components/sections/FreelanceProcess';
import FreelanceCTA from '../components/sections/FreelanceCTA';
import AboutMe from '../components/sections/AboutMe';
import TechnicalSkills from '../components/sections/TechnicalSkills';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import ContactSection from '../components/sections/ContactSection';
import SpotlightTracker from '../components/ui/SpotlightTracker';
import CommandPalette from '../components/ui/CommandPalette';
import Toast from '../components/ui/Toast';
import { profile } from '../data/profile';

export default function Home({ toggleTheme, isDark }) {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (toastObj) => {
    setToast(toastObj);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    showToast({
      type: 'success',
      message: `Copied ${profile.contact.email} to clipboard!`
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <Head>
        <title>Kavya Shaw — AI/ML & Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Kavya Shaw, a Computer Science student specializing in AI/ML, building Python applications, computer-vision systems, APIs and modern web experiences."
        />
        <meta name="keywords" content="Kavya Shaw, AI ML Developer, Python Developer, Computer Vision Developer, Web Developer, Kolkata Developer, RAKSHA AI 2.0, SIH26187" />
        <meta name="author" content="Kavya Shaw" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kavya-shaw.vercel.app" />
        <meta property="og:title" content="Kavya Shaw — AI/ML & Web Developer" />
        <meta
          property="og:description"
          content="Building intelligent software and modern web experiences. Explore projects including RAKSHA AI 2.0, CareerAI Copilot, and DrowsiGuard."
        />
        <meta property="og:image" content="/projects/raksha-ai/dashboard.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kavya Shaw — AI/ML & Web Developer" />
        <meta
          name="twitter:description"
          content="Building intelligent software and modern web experiences. Explore projects including RAKSHA AI 2.0, CareerAI Copilot, and DrowsiGuard."
        />
        <meta name="twitter:image" content="/projects/raksha-ai/dashboard.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Global Interactive Pointer Spotlight & Scroll Progress */}
      <SpotlightTracker />

      {/* Sticky Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandOpen(true)}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />

      {/* Main Sections */}
      <main id="top">
        <Hero />
        <SelectedWork />
        <Services />
        <FreelanceProcess />
        <FreelanceCTA onCopyEmail={copyEmail} />
        <AboutMe />
        <TechnicalSkills />
        <ExperienceTimeline />
        <ContactSection onCopyEmail={copyEmail} showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onCopyEmail={copyEmail} />

      {/* Global Modals & Notifications */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onCopyEmail={copyEmail}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />

      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
