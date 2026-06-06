import { useContext } from 'react'
import { I18nContext } from '../context/i18n-context'

export default function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useTranslation must be used inside I18nProvider')
  return ctx
}
