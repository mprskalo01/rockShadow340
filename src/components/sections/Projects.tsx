import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Selected work
        </p>
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
          Projects
        </h2>
        <p className="mb-14 text-sm text-[var(--color-muted)]">
          Detailed breakdown in each GitHub readme.
        </p>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
