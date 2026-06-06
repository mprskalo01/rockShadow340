import { createContext } from 'react'
import type { Theme } from '../types'

export interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
