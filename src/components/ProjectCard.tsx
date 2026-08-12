import { Github, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../data/resumeData'
import Modal from './Modal'

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <article
        className={`rounded-2xl border bg-surface transition-shadow flex flex-col ${
          project.flagship
            ? 'border-amber/50 shadow-[0_1px_0_0_rgba(232,163,61,0.4)] md:col-span-2'
            : 'border-line hover:shadow-md'
        }`}
      >
        <div className="p-6 sm:p-8 flex flex-col flex-1">
          {project.flagship && (
            <span className="inline-block w-fit font-mono text-[10px] uppercase tracking-wider text-amber bg-amber/10 rounded-full px-2.5 py-1 mb-4">
              Flagship Project
            </span>
          )}

          <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug">
            {project.title}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
            {project.description}
          </p>

          {project.metrics.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-6">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-2xl font-semibold text-blueprint">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-medium text-ink bg-paper border border-line rounded-md px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6 flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-paper bg-ink rounded-full px-4 py-2 hover:bg-blueprint transition-colors"
            >
              <Maximize2 size={14} /> View Details
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
            )}
          </div>
        </div>
      </article>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div className="p-6 sm:p-8">
            {project.flagship && (
              <span className="inline-block w-fit font-mono text-[10px] uppercase tracking-wider text-amber bg-amber/10 rounded-full px-2.5 py-1 mb-4">
                Flagship Project
              </span>
            )}

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-snug pr-8">
              {project.title}
            </h3>

            <p className="mt-4 text-base text-muted leading-relaxed">
              {project.description}
            </p>

            {project.metrics.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-6 border-y border-line py-5">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-3xl font-semibold text-blueprint">
                      {m.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <h4 className="font-mono text-[11px] uppercase tracking-wider text-amber mt-6 mb-3">
              How it was built
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-sm sm:text-base text-ink leading-relaxed flex gap-3">
                  <span className="text-amber font-mono text-xs mt-1">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h4 className="font-mono text-[11px] uppercase tracking-wider text-amber mt-7 mb-3">
              Tech stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-ink bg-paper border border-line rounded-md px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium rounded-full px-5 py-2.5 hover:bg-blueprint transition-colors"
              >
                <Github size={16} /> View Repository
              </a>
            )}
          </div>
        </Modal>
      )}
    </>
  )
}
