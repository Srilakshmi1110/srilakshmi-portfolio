import { projects } from '../data/resumeData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="bg-ink py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
          Featured Work
        </p>
        <h2 className="font-display text-3xl font-semibold text-paper mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
