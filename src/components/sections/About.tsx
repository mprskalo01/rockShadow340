import type { CSSProperties } from 'react'
import useTranslation from '../../hooks/useTranslation'
import useIntersection from '../../hooks/useIntersection'
import SkillCategory from '../ui/SkillCategory'
import { skillCategories } from '../../data/skills'

export default function About() {
  const { t } = useTranslation()
  const headRef = useIntersection<HTMLElement>()
  const introRef = useIntersection<HTMLDivElement>()
  const capsRef = useIntersection<HTMLDivElement>()

  return (
    <section className="section about" id="about">
      <div className="container">
        <header ref={headRef} className="section__head reveal">
          <span className="section__index" aria-hidden="true">
            02
          </span>
          <h2 className="section__title">{t('about.title')}</h2>
        </header>
        <div className="about__grid">
          <div ref={introRef} className="about__intro reveal">
            <p className="about__bio">{t('about.bio')}</p>
            <p className="about__note">{t('about.note')}</p>
          </div>
          <div ref={capsRef} className="about__caps reveal" style={{ '--card-index': 1 } as CSSProperties}>
            <p className="matrix__label">{t('about.capabilities')}</p>
            <div className="matrix">
              {skillCategories.map((cat, i) => (
                <SkillCategory key={cat.title} index={i + 1} title={cat.title} skills={cat.skills} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
