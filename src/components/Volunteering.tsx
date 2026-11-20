
import { volunteering } from '../data/resumeData'

export default function Volunteering() {
  return (
    <section id="volunteering" className="bg-grid-paper border-y border-line py-24">
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
          Beyond Academics
        </p>

        <h2 className="font-display text-3xl font-semibold text-ink mb-4">
          Volunteering & Community Work
        </h2>

        <p className="text-sm text-muted mb-10">
          1.5 Years of Community Engagement · U&I Education Trust
        </p>

        <div className="bg-surface border border-line rounded-xl p-6 md:p-8">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-7">

            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Volunteer — U&I
              </h3>

              <p className="text-sm text-muted mt-1">
                Education Trust · Bengaluru
              </p>
            </div>

            <span className="font-mono text-xs text-blueprint bg-blueprint/10 px-3 py-2 rounded-full w-fit">
              1.5 Years – Present
            </span>

          </div>

          <div className="space-y-5">
            {volunteering.map((item, index) => (
              <div key={index} className="flex items-start gap-4">

                <span className="flex items-center justify-center shrink-0 w-7 h-7 rounded-full bg-blueprint/10 text-blueprint font-mono text-xs">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="text-sm text-muted leading-relaxed">
                  {item}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
