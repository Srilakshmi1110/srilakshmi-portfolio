
import { Award, Trophy, GraduationCap } from 'lucide-react'
import { achievements } from '../data/resumeData'

export default function Achievements() {
  return (
    <section id="achievements" className="bg-paper border-y border-line py-24">
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
          Recognition & Learning
        </p>

        <h2 className="font-display text-3xl font-semibold text-ink mb-10">
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {achievements.map((item, index) => {
            const isRank = item.includes('CodeVita')

            return (
              <div
                key={index}
                className="flex items-start gap-4 bg-white border border-line rounded-xl p-6 hover:border-blueprint transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-blueprint/10 flex items-center justify-center shrink-0">
                  {isRank ? (
                    <Trophy className="text-blueprint" size={22} />
                  ) : (
                    <Award className="text-blueprint" size={22} />
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-ink leading-relaxed">
                    {item}
                  </h3>

                  <p className="text-xs text-muted mt-2">
                    {isRank
                      ? 'Competitive Programming Achievement'
                      : 'Certification'}
                  </p>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
