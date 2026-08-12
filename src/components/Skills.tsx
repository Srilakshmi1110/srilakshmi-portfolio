import { skills } from '../data/resumeData'

export default function Skills() {
  const entries = Object.entries(skills)

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
            Technical Skills
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink">Toolkit</h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
        {entries.map(([category, items]) => (
          <div key={category} className="bg-surface p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-amber mb-4">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-ink bg-paper border border-line rounded-md px-2.5 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
