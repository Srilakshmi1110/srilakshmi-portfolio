import { FileText, Download } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="max-w-6xl mx-auto px-6 py-20">
      <div className="rounded-2xl border border-line bg-surface p-10 sm:p-14 text-center">
        <FileText size={32} className="mx-auto text-blueprint" />
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-4">
          Want the full picture?
        </h2>
        <p className="text-muted mt-2 max-w-md mx-auto">
          View or download the complete resume as a PDF.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium rounded-full px-6 py-2.5 hover:bg-blueprint transition-colors"
          >
            <FileText size={16} /> View Resume
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-ink/15 text-ink text-sm font-medium rounded-full px-6 py-2.5 hover:border-ink transition-colors"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
