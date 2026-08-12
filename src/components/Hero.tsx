import { Mail, Phone, MapPin, Github, Linkedin, FileText, ArrowRight } from 'lucide-react'
import { profile } from '../data/resumeData'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid-paper border-b border-line">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div className="fade-up">
          <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-5">
            [ x: computer&nbsp;vision, y: full-stack&nbsp;ai ]
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-muted font-medium">{profile.title}</p>

          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Mail size={15} /> {profile.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={15} /> {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} /> {profile.location}
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium rounded-full px-5 py-2.5 hover:bg-blueprint transition-colors"
            >
              <FileText size={16} /> View My Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-ink/15 text-ink text-sm font-medium rounded-full px-5 py-2.5 hover:border-ink transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink/15 text-ink text-sm font-medium rounded-full px-5 py-2.5 hover:border-ink transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink/15 text-ink text-sm font-medium rounded-full px-5 py-2.5 hover:border-ink transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-blueprint px-2 py-2.5 hover:underline"
            >
              Contact Me
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-4 gap-4 max-w-lg border-t border-line pt-6">
            {profile.heroStats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {s.label}
                </dt>
                <dd className="font-display text-xl sm:text-2xl font-semibold text-ink mt-1">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden md:flex justify-center items-center">
          <HeroVisual className="w-full max-w-sm" />
        </div>
      </div>
    </section>
  )
}
