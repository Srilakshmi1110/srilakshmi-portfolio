
import { FileText, Download, ArrowUpRight } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="max-w-6xl mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8 sm:p-14 text-center">
        <div className="absolute inset-0 bg-grid-paper opacity-30 pointer-events-none" />

        <div className="relative">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-paper border border-line flex items-center justify-center text-blueprint">
            <FileText size={27} />
          </div>

          <p className="font-mono text-xs tracking-widest uppercase text-blueprint mt-6">
            [ Resume ]
          </p>

          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-3">
            Want to know more?
          </h2>

          <p className="text-muted mt-3 max-w-md mx-auto leading-relaxed">
            Explore my academic background, technical skills, projects,
            research publication, and experience in my complete resume.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium rounded-full px-6 py-3 hover:bg-blueprint transition-colors"
            >
              <FileText size={16} />
              View Resume
              <ArrowUpRight size={15} />
            </a>

            <a
              href="/resume.pdf"
              download="Srilakshmi_Seshadri_Resume.pdf"
              className="inline-flex items-center gap-2 border border-ink/20 text-ink text-sm font-medium rounded-full px-6 py-3 hover:border-blueprint hover:text-blueprint transition-colors"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
