import { useEffect, useRef } from 'react';

/**
 * HeroCanvas
 * High-performance fiber strand / neural flow-field canvas animation.
 * Replaces generic stock illustrations with an intelligent, elegant motion texture.
 * Automatically halts when `prefers-reduced-motion` is detected.
 */
export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotionQuery.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let time = 0;
    const mouse = { x: 0.5, y: 0.48, targetX: 0.5, targetY: 0.48 };

    const strands = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStrands();
    };

    const buildStrands = () => {
      strands.length = 0;
      const count = Math.max(48, Math.min(96, Math.floor(width / 14)));
      for (let i = 0; i < count; i++) {
        const side = i % 2 === 0 ? -1 : 1;
        strands.push({
          side,
          offset: Math.random(),
          speed: 0.55 + Math.random() * 0.65,
          phase: Math.random() * Math.PI * 2,
          alpha: 0.04 + Math.random() * 0.12,
          width: 0.4 + Math.random() * 0.65
        });
      }
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        mouse.targetX = (e.clientX - rect.left) / width;
        mouse.targetY = (e.clientY - rect.top) / height;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 0.005;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      const centerX = width * (0.5 + (mouse.x - 0.5) * 0.05);
      const centerY = height * (0.48 + (mouse.y - 0.48) * 0.04);

      for (let i = 0; i < strands.length; i++) {
        const st = strands[i];
        ctx.beginPath();
        const points = 72;

        for (let p = 0; p <= points; p++) {
          const t = p / points;
          const from = st.side < 0 ? -width * 0.12 : width * 1.12;
          const xBase = from + (centerX - from) * Math.pow(t, 0.82);
          const pinch = Math.sin(t * Math.PI);
          const wave = Math.sin(t * 8 + st.phase + time * st.speed * 10) * width * 0.007 * (1 - t);
          const curl = Math.sin(t * 2.2 * Math.PI + st.phase * 0.4 + time * 2) * width * 0.045 * pinch;
          const spread = (st.offset - 0.5) * height * 0.62 * (1 - t);
          const y = centerY + spread + Math.sin(t * Math.PI * 1.3 + st.phase) * height * 0.03 + curl * 0.3;
          const x = xBase + wave + curl * st.side;

          if (p === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const grad = ctx.createLinearGradient(st.side < 0 ? 0 : width, 0, centerX, 0);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(0.4, `rgba(124, 232, 255, ${st.alpha * 0.45})`);
        grad.addColorStop(0.85, `rgba(255, 255, 255, ${st.alpha})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0.015)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = st.width;
        ctx.stroke();
      }

      ctx.restore();

      // Soft center ambient glow
      const ambient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.min(width, height) * 0.3
      );
      ambient.addColorStop(0, 'rgba(124, 232, 255, 0.035)');
      ambient.addColorStop(0.4, 'rgba(255, 255, 255, 0.012)');
      ambient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = ambient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-85 z-0"
      aria-hidden="true"
    />
  );
}
