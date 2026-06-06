import useTranslation from '../../hooks/useTranslation'
import useIntersection from '../../hooks/useIntersection'
import TextLink from '../ui/TextLink'

const EMAIL = 'mario.prskalo5@gmail.com'
const GITHUB = 'https://github.com/mprskalo01'
const LINKEDIN = 'https://www.linkedin.com/in/mprskalo01/'

export default function Contact() {
  const { t } = useTranslation()
  const ref = useIntersection<HTMLDivElement>()

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <header className="section__head">
          <span className="section__index" aria-hidden="true">
            03
          </span>
          <h2 className="section__title">{t('contact.title')}</h2>
        </header>
        <div ref={ref} className="contact__body reveal">
          <p className="contact__line">{t('contact.line')}</p>
          <TextLink href={`mailto:${EMAIL}`}>
            <span className="contact__email">{EMAIL}</span>
          </TextLink>
          <div className="contact__socials">
            <TextLink href={GITHUB} external>
              GitHub <span className="arrow">↗</span>
            </TextLink>
            <TextLink href={LINKEDIN} external>
              LinkedIn <span className="arrow">↗</span>
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  )
}
