
import {
  Code2,
  BrainCircuit,
  Globe,
  Database,
  Wrench,
  Layers3,
} from 'lucide-react'
import { skills } from '../data/resumeData'

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code2,
  'ML / AI': BrainCircuit,
  'Web & Frameworks': Globe,
  'Web Development': Globe,
  Data: Database,
  'Data & Analytics': Database,
  Tools: Wrench,
  Concepts: Layers3,
}

export default function Skills() {
  const entries = Object.entries(skills)

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-12">
        <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
          01 / Technical Expertise
        </p>

        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
          Skills & Toolkit
        </h2>

        <p className="text-muted mt-3 max-w-2xl leading-relaxed">
          Technologies, frameworks, and concepts I use to build intelligent
          applications and solve real-world problems.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map(([category, items], index) => {
          const Icon = categoryIcons[category] || Layers3

          return (
            <article
              key={category}
              className="bg-surface border border-line rounded-2xl p-6 hover:border-blueprint/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-paper border border-line flex items-center justify-center text-blueprint">
                  <Icon size={19} />
                </div>

                <div>
                  <p className="font-mono text-[10px] text-muted tracking-widest">
                    CATEGORY {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-semibold text-ink mt-0.5">
                    {category}
                  </h3>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink bg-paper border border-line rounded-lg px-3 py-1.5 hover:border-blueprint/60 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
