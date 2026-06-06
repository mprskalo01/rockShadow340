import useTranslation from '../../hooks/useTranslation'
import useIntersection from '../../hooks/useIntersection'
import ProjectCard from '../ui/ProjectCard'
import TextLink from '../ui/TextLink'
import { projects } from '../../data/projects'

const GITHUB = 'https://github.com/mprskalo01'

export default function Work() {
  const { t } = useTranslation()
  const headRef = useIntersection<HTMLElement>()
  const moreRef = useIntersection<HTMLDivElement>()
  const count = String(projects.length).padStart(2, '0')

  return (
    <section className="section work" id="work">
      <div className="container">
        <header ref={headRef} className="section__head reveal">
          <span className="section__index" aria-hidden="true">
            01
          </span>
          <h2 className="section__title">{t('work.title')}</h2>
          <span className="section__count">
            {t('work.projects')} [ {count} ]
          </span>
        </header>
        <div className="work__list">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i + 1} />
          ))}
        </div>
        <div ref={moreRef} className="work__more reveal">
          <span>{t('work.archive')}</span>
          <TextLink href={GITHUB} external>
            {t('work.more')} →
          </TextLink>
        </div>
      </div>
    </section>
  )
}
