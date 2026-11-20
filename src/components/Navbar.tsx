
import { useEffect, useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { profile } from '../data/resumeData'

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#publication', label: 'Research' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#volunteering', label: 'Volunteering' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-line shadow-sm'
          : 'bg-paper/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <a href="#top" className="font-display font-bold text-lg text-ink shrink-0">
          {profile.name}
          <span className="text-blueprint">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-muted hover:text-blueprint transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink border border-ink/15 rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        <button
          className="lg:hidden text-ink p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-paper border-t border-line px-6 py-5 flex flex-col gap-5 shadow-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink hover:text-blueprint"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blueprint"
          >
            <FileText size={16} />
            View Resume
          </a>
        </div>
      )}
    </header>
  )
}
