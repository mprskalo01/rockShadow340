import type { MouseEvent } from 'react'
import useTranslation from '../../hooks/useTranslation'
import useScrollSpy from '../../hooks/useScrollSpy'

const SECTIONS = [
  { id: 'intro', num: '00', labelKey: 'nav.intro' },
  { id: 'work', num: '01', labelKey: 'nav.work' },
  { id: 'about', num: '02', labelKey: 'nav.about' },
  { id: 'contact', num: '03', labelKey: 'nav.contact' },
] as const

const IDS = SECTIONS.map((s) => s.id)

export default function SectionRail() {
  const { t } = useTranslation()
  const active = useScrollSpy(IDS)

  // The intro is the first section: scroll to the true top (0) rather than to
  // the `#intro` anchor, which `scroll-padding-top` would offset by the header.
  // preventDefault stops the browser updating the hash, so set it ourselves
  // (pushState doesn't scroll, so it won't fight the scrollTo above).
  function handleClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    if (id !== 'intro') return
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.pushState(null, '', '#intro')
  }

  return (
    <nav className="rail" aria-label="Section index">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          className={`rail__item${active === s.id ? ' is-active' : ''}`}
          href={`#${s.id}`}
          onClick={(event) => handleClick(event, s.id)}
        >
          <span className="rail__label">{t(s.labelKey)}</span>
          <span className="rail__bar" aria-hidden="true" />
          <span className="rail__num" aria-hidden="true">
            {s.num}
          </span>
        </a>
      ))}
    </nav>
  )
}
