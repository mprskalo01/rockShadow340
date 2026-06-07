import useTranslation from '../../hooks/useTranslation'
import useIntersection from '../../hooks/useIntersection'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'
import { archive } from '../../data/archive'

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
        <div ref={moreRef} className="work__archive reveal">
          <div className="work__archive-head">
            <span className="work__archive-label">{t('work.archive')}</span>
          </div>
          <ul className="archive">
            {archive.map((entry) => (
              <li key={entry.name} className="archive__cell">
                <a
                  className="archive__link"
                  href={entry.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="archive__name">{entry.name}</span>
                  <span className="archive__note">{entry.note}</span>
                  <span className="archive__meta">
                    {entry.tech} · {entry.year} <span className="arrow">↗</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="archive__cell archive__cell--more">
              <a
                className="archive__link archive__link--more"
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="archive__name">{t('work.more')}</span>
                <span className="archive__meta">
                  GitHub <span className="arrow">↗</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
