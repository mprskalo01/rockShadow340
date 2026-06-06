import type { CSSProperties } from 'react'
import useTranslation from '../../hooks/useTranslation'
import type { Language } from '../../types'

const LANGS: Language[] = ['en', 'de', 'hr']

export default function LanguageSelector() {
  const { lang, setLang } = useTranslation()
  const activeIndex = LANGS.indexOf(lang)
  // CSS custom property drives the sliding underline; not part of CSSProperties typings.
  const style = { '--lang-offset': activeIndex } as CSSProperties

  return (
    <div className="lang" style={style}>
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          className={`lang__btn${l === lang ? ' lang__btn--active' : ''}`}
          onClick={() => setLang(l)}
          aria-pressed={l === lang}
        >
          {l.toUpperCase()}
        </button>
      ))}
      <span className="lang__underline" aria-hidden="true" />
    </div>
  )
}
