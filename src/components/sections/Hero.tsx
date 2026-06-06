import { useEffect, useState } from 'react'
import useTranslation from '../../hooks/useTranslation'

const PLACE = '45.8°N 15.9°E' // geographic constant — not translated

function formatClock(): string {
  try {
    return (
      new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Europe/Zagreb',
      }).format(new Date()) + ' CET'
    )
  } catch {
    return new Date().toTimeString().slice(0, 8)
  }
}

export default function Hero() {
  const { t } = useTranslation()
  const [clock, setClock] = useState(formatClock)

  useEffect(() => {
    const id = window.setInterval(() => setClock(formatClock()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="hero" id="intro">
      <div className="container">
        <div className="hero__masthead load-headline">
          <span className="status">
            <span className="status__dot" aria-hidden="true" />
            {/* <span>{t('hero.status')}</span> */}
          </span>
          <div className="hero__masthead-group">
            <span>{PLACE}</span>
            <span className="hero__clock">{clock}</span>
          </div>
        </div>

        <div className="hero__kicker load-headline">
          <span className="hero__kicker-num" aria-hidden="true">
            00
          </span>
          <span>{t('hero.kicker')}</span>
        </div>

        <div className="hero__inner">
          <h1 className="hero__headline load-headline">{t('hero.headline')}</h1>
          <dl className="hero__meta load-subtext">
            <div className="hero__meta-row">
              <dt className="hero__meta-label">{t('hero.roleLabel')}</dt>
              <dd className="hero__meta-value">{t('hero.role')}</dd>
            </div>
            <div className="hero__meta-row">
              <dt className="hero__meta-label">{t('hero.locationLabel')}</dt>
              <dd className="hero__meta-value">{t('hero.location')}</dd>
            </div>
            <div className="hero__meta-row">
              <dt className="hero__meta-label">{t('hero.statusLabel')}</dt>
              <dd className="hero__meta-value">{t('hero.status')}</dd>
            </div>
          </dl>
        </div>

        <div className="hero__rule load-rule" />
        <div className="hero__cue load-cue">
          <span className="hero__cue-line" aria-hidden="true" />
          <span>{t('hero.cue')}</span>
        </div>
      </div>
    </section>
  )
}
