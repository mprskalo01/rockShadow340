import type { Project } from '../../types'
import { GitHubIcon } from '../icons/SocialIcons'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:gap-12">
      <div className={`overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] xl:flex-[3] ${!isEven ? 'xl:order-2' : ''}`}>
        <img
          src={project.imageUrl}
          alt={`${project.title} project screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      <div className={`flex flex-col justify-center xl:flex-[2] ${!isEven ? 'xl:order-1' : ''}`}>
        <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text)]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] transition-colors duration-150 hover:text-[var(--color-accent)]"
          >
            <GitHubIcon className="h-4 w-4" />
            View on GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--color-muted)] transition-colors duration-150 hover:text-[var(--color-accent)]"
            >
              Live demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
