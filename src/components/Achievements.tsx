import { Award } from 'lucide-react'
import { achievements } from '../data/resumeData'

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
        Recognition
      </p>
      <h2 className="font-display text-3xl font-semibold text-ink mb-10">
        Certifications &amp; Achievements
      </h2>

      <ul className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a) => (
          <li
            key={a}
            className="flex items-start gap-3 rounded-xl border border-line bg-surface p-5"
          >
            <Award size={18} className="text-amber shrink-0 mt-0.5" />
            <span className="text-sm text-ink leading-relaxed">{a}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
