import { createContext } from 'react'
import type { Language } from '../types'

export interface I18nContextValue {
  lang: Language
  setLang: (lang: Language) => void
  /** Resolve a dot-path against the active map, e.g. t('nav.work'). */
  t: (key: string) => string
}

export const I18nContext = createContext<I18nContextValue | undefined>(undefined)
