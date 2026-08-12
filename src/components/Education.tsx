import { education } from '../data/resumeData'

export default function Education() {
  return (
    <section id="education" className="bg-grid-paper border-y border-line py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
          Academics
        </p>
        <h2 className="font-display text-3xl font-semibold text-ink mb-10">Education</h2>

        <div className="space-y-0">
          {education.map((e, i) => (
            <div
              key={e.degree}
              className={`grid sm:grid-cols-[140px_1fr_auto] gap-2 sm:gap-6 py-6 ${
                i !== education.length - 1 ? 'border-b border-line' : ''
              }`}
            >
              <span className="font-mono text-xs text-muted">{e.years}</span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{e.degree}</h3>
                <p className="text-sm text-muted mt-0.5">{e.school}</p>
              </div>
              <span className="font-display text-lg font-semibold text-blueprint sm:text-right">
                {e.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
