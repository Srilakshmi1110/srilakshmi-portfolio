import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Modal({
  onClose,
  children,
}: {
  onClose: () => void
  children: React.ReactNode
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm animate-[fadeIn_0.18s_ease]"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-surface border border-line shadow-2xl animate-[modalIn_0.22s_ease]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-muted hover:text-ink transition-colors bg-paper border border-line rounded-full p-1.5"
        >
          <X size={18} />
        </button>
        {children}
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeIn_0\\.18s_ease\\], .animate-\\[modalIn_0\\.22s_ease\\] { animation: none; }
        }
      `}</style>
    </div>
  )
}
