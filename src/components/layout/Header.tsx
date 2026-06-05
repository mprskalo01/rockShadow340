import { useState, useEffect } from 'react'
import ThemeToggleButton from '../ui/ThemeToggleButton'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-bold tracking-tight text-[var(--color-text)] transition-colors duration-150 hover:text-[var(--color-accent)]"
        >
          Mario
        </button>

        <nav className="flex items-center gap-6">
          <a
            href="#skills"
            className="hidden text-sm text-[var(--color-muted)] transition-colors duration-150 hover:text-[var(--color-text)] sm:block"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hidden text-sm text-[var(--color-muted)] transition-colors duration-150 hover:text-[var(--color-text)] sm:block"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hidden text-sm text-[var(--color-muted)] transition-colors duration-150 hover:text-[var(--color-text)] sm:block"
          >
            Contact
          </a>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  )
}
