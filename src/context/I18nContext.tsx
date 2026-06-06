import { useState, useEffect, type ReactNode } from 'react'
import type { Language, TranslationMap } from '../types'
import { en } from '../i18n/en'
import { de } from '../i18n/de'
import { hr } from '../i18n/hr'
import { I18nContext } from './i18n-context'

const maps: Record<Language, TranslationMap> = { en, de, hr }

function getInitialLang(): Language {
  const stored = localStorage.getItem('lang')
  if (stored === 'en' || stored === 'de' || stored === 'hr') return stored
  return 'en'
}

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLang)

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  function t(key: string): string {
    let node: unknown = maps[lang]
    for (const part of key.split('.')) {
      if (node && typeof node === 'object' && part in node) {
        node = (node as Record<string, unknown>)[part]
      } else {
        return key // fall back to the key so missing strings are visible
      }
    }
    return typeof node === 'string' ? node : key
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  )
}
