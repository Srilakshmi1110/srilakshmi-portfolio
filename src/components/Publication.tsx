
import { publication } from '../data/resumeData'

export default function Publication() {
  return (
    <section id="publication" className="bg-paper py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
          Research & Academic Work
        </p>

        <h2 className="font-display text-3xl font-semibold text-ink mb-10">
          Publication
        </h2>

        <div className="border border-ink/15 rounded-xl p-7 md:p-10 bg-white">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="font-mono text-xs uppercase tracking-wider bg-blueprint/10 text-blueprint px-3 py-1 rounded-full">
              Published Research
            </span>

            <span className="font-mono text-xs text-ink/60">
              {publication.details}
            </span>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-4">
            {publication.title}
          </h3>

          <p className="text-sm md:text-base text-ink/70 leading-relaxed mb-6">
            {publication.venue}
          </p>

          <div className="border-t border-ink/10 pt-5">
            <p className="font-mono text-xs text-ink/50 uppercase tracking-wider mb-2">
              Paper ID
            </p>

            <p className="font-mono text-sm font-semibold text-ink">
              {publication.paperId}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
