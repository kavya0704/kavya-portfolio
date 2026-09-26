import { useEffect } from 'react';

/**
 * SpotlightTracker
 * Tracks pointer motion to drive the radial specular highlight and scroll progress bar.
 * Respects `prefers-reduced-motion` and touch screen environments.
 */
export default function SpotlightTracker() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scroll progress update
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      root.style.setProperty('--progress', progress.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (reduceMotion) {
      return () => window.removeEventListener('scroll', handleScroll);
    }

    // Cursor position smoothing
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let targetX = cx;
    let targetY = cy;
    let rafId;

    const handlePointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    };

    const loop = () => {
      cx += (targetX - cx) * 0.12;
      cy += (targetY - cy) * 0.12;
      root.style.setProperty('--cx', `${cx}px`);
      root.style.setProperty('--cy', `${cy}px`);
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress-bar" aria-hidden="true" />
      <div className="cursor-spotlight hidden md:block" aria-hidden="true" />
    </>
  );
}
