import { profile } from '../data/resumeData'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-6 text-xs text-white/50">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
            Resume
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
