import { useState, useEffect } from 'react'
import useTranslation from '../../hooks/useTranslation'
import LanguageSelector from '../ui/LanguageSelector'
import ThemeToggleButton from '../ui/ThemeToggleButton'

export default function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="header__logo" href="#intro">
          Mario Prskalo
        </a>
        <nav className="header__nav" aria-label="Primary">
          <a className="text-link" href="#work">
            {t('nav.work')}
          </a>
          <a className="text-link" href="#about">
            {t('nav.about')}
          </a>
          <a className="text-link" href="#contact">
            {t('nav.contact')}
          </a>
        </nav>
        <div className="header__controls">
          <LanguageSelector />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  )
}
