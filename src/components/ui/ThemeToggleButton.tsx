import useTheme from '../../hooks/useTheme'
import { SunIcon, MoonIcon } from '../icons/ThemeIcons'

export default function ThemeToggleButton() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className={`theme-toggle__icon${isDark ? ' is-active' : ''}`}>
        <SunIcon />
      </span>
      <span className={`theme-toggle__icon${isDark ? '' : ' is-active'}`}>
        <MoonIcon />
      </span>
    </button>
  )
}
