
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-paper">
              Srilakshmi Seshadri
            </p>
            <p className="text-xs text-white/50 mt-1">
              Computer Science Engineering · AI & Machine Learning
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 text-sm text-white/60">
            <a
              href="mailto:srilakshmiseshadri11@gmail.com"
              className="inline-flex items-center gap-2 hover:text-paper transition-colors"
            >
              <Mail size={15} />
              Email
              <ArrowUpRight size={12} />
            </a>

            <a
              href="https://www.linkedin.com/in/srilakshmi-seshadri-757515298/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-paper transition-colors"
            >
              <Linkedin size={15} />
              LinkedIn
              <ArrowUpRight size={12} />
            </a>

            <a
              href="https://github.com/Srilakshmi1110"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-paper transition-colors"
            >
              <Github size={15} />
              GitHub
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-7 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {year} Srilakshmi Seshadri. All rights reserved.
          </p>

          <a
            href="#top"
            className="text-xs text-white/50 hover:text-paper transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
