
import { languages } from '../data/resumeData'

export default function Languages() {
  return (
    <section id="languages" className="max-w-6xl mx-auto px-6 py-20">

      <div className="mb-10">
        <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
          Communication
        </p>

        <h2 className="font-display text-3xl font-semibold text-ink">
          Languages
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {languages.map((language) => (
          <div
            key={language.name}
            className="bg-surface border border-line rounded-xl p-6 hover:border-blueprint transition-colors"
          >
            <h3 className="font-display text-lg font-semibold text-ink mb-2">
              {language.name}
            </h3>

            <p className="font-mono text-xs uppercase tracking-wider text-blueprint">
              {language.level}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}
