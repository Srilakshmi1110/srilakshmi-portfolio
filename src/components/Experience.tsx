
import { Briefcase, CalendarDays } from 'lucide-react'
import { experience } from '../data/resumeData'

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
        Professional Journey
      </p>

      <h2 className="font-display text-3xl font-semibold text-ink mb-10">
        Work Experience
      </h2>

      <div className="space-y-8">
        {experience.map((item, index) => (
          <div
            key={`${item.organization}-${index}`}
            className="rounded-2xl border border-line bg-surface p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blueprint/10 flex items-center justify-center shrink-0">
                  <Briefcase className="text-blueprint" size={22} />
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.role}
                  </h3>

                  <p className="text-sm text-ink/70 mt-1">
                    {item.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-ink/60">
                <CalendarDays size={15} />
                {item.period}
              </div>
            </div>

            <ul className="space-y-3">
              {item.highlights.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-ink/75 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blueprint mt-2 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
