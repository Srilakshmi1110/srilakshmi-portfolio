
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  ArrowRight,
} from 'lucide-react'
import { profile } from '../data/resumeData'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid-paper border-b border-line"
    >
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div className="fade-up">
          <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-5">
            [ computer science · artificial intelligence · software development ]
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.05]">
            {profile.name}
          </h1>

          <p className="mt-4 text-lg text-muted font-medium">
            {profile.title}
          </p>

          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 hover:text-blueprint transition-colors"
            >
              <Mail size={15} />
              {profile.email}
            </a>

            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 hover:text-blueprint transition-colors"
              >
                <Phone size={15} />
                {profile.phone}
              </a>
            )}

            <span className="inline-flex items-center gap-2">
              <MapPin size={15} />
              {profile.location}
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium rounded-full px-5 py-3 hover:bg-blueprint transition-colors"
            >
              <FileText size={16} />
              View Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-ink/15 text-ink text-sm font-medium rounded-full px-5 py-3 hover:border-ink transition-colors"
            >
              Explore Projects
              <ArrowRight size={16} />
            </a>

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-ink/15 text-ink text-sm font-medium rounded-full px-5 py-3 hover:border-ink transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            )}

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-ink/15 text-ink text-sm font-medium rounded-full px-5 py-3 hover:border-ink transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            )}
          </div>

          {profile.heroStats?.length > 0 && (
            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-xl border-t border-line pt-6">
              {profile.heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-xl sm:text-2xl font-semibold text-ink mt-1">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="relative hidden md:flex justify-center items-center">
          <HeroVisual className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  )
}
