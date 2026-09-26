import { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

/**
 * Toast Notification Component
 * Displays lightweight micro-feedback for actions like copying email or form responses.
 */
export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, toast.duration || 3500);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />,
    info: <Info className="w-4 h-4 text-cyan-400 shrink-0" />
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-[200] max-w-sm flex items-center gap-3 px-4 py-3 rounded-xl border border-white/15 bg-neutral-900/95 text-neutral-100 shadow-2xl backdrop-blur-xl animate-fade-in"
    >
      {icons[toast.type || 'info']}
      <p className="text-xs font-medium tracking-wide pr-2">{toast.message}</p>
      <button
        type="button"
        onClick={onClose}
        className="text-neutral-400 hover:text-white transition-colors p-1"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
