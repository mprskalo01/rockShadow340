import type { CSSProperties } from 'react'
import useIntersection from '../../hooks/useIntersection'
import useTranslation from '../../hooks/useTranslation'
import ProjectMedia from './ProjectMedia'
import TechTag from './TechTag'
import TextLink from './TextLink'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  index: number // 1-based
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation()
  const ref = useIntersection<HTMLElement>()
  const num = String(index).padStart(2, '0')
  // CSS custom property feeds the scroll-reveal stagger; not in CSSProperties typings.
  const style = { '--card-index': index - 1 } as CSSProperties

  return (
    <article ref={ref} className="project reveal" style={style}>
      <div className="project__media" aria-hidden="true">
        <ProjectMedia visual={project.visual} />
      </div>
      <span className="project__index" aria-hidden="true">
        {num}
      </span>
      <div className="project__main">
        <p className="project__tagline">{project.tagline}</p>
        <h3 className="project__title">{project.title}</h3>
        <dl className="project__meta">
          <div className="project__meta-item">
            <dt className="project__meta-label">{t('work.roleLabel')}</dt>
            <dd className="project__meta-value">{project.role}</dd>
          </div>
          <div className="project__meta-item">
            <dt className="project__meta-label">{t('work.yearLabel')}</dt>
            <dd className="project__meta-value">{project.year}</dd>
          </div>
        </dl>
        <p className="project__desc">{project.description}</p>
        <ul className="project__tags">
          {project.stack.map((s) => (
            <TechTag key={s} label={s} />
          ))}
        </ul>
        <div className="project__links">
          {project.liveUrl && (
            <TextLink href={project.liveUrl} external>
              {t('work.viewProject')} →
            </TextLink>
          )}
          <TextLink href={project.githubUrl} external>
            {t('work.source')} →
          </TextLink>
        </div>
      </div>
    </article>
  )
}
