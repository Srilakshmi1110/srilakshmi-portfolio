
import { education } from '../data/resumeData'

export default function Education() {
  return (
    <section id="education" className="bg-grid-paper border-y border-line py-24">
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
          Academic Background
        </p>

        <h2 className="font-display text-3xl font-semibold text-ink mb-12">
          Education
        </h2>

        <div className="space-y-0">

          {education.map((e, i) => (
            <div
              key={e.degree}
              className={`grid sm:grid-cols-[140px_1fr_auto] gap-3 sm:gap-6 py-7 ${
                i !== education.length - 1 ? 'border-b border-line' : ''
              }`}
            >

              <span className="font-mono text-xs text-muted pt-1">
                {e.years}
              </span>

              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {e.degree}
                </h3>

                <p className="text-sm text-muted mt-1">
                  {e.school}
                </p>

                {'coursework' in e && e.coursework && (
                  <div className="mt-5">
                    <p className="font-mono text-xs uppercase tracking-wider text-blueprint mb-2">
                      Relevant Coursework
                    </p>

                    <p className="text-sm text-muted leading-relaxed">
                      {e.coursework}
                    </p>
                  </div>
                )}
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
