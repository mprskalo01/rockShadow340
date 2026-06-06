import { useEffect, useState } from 'react'

/**
 * Tracks which section is centred in the viewport and returns its id.
 * A single IntersectionObserver with a symmetric vertical rootMargin marks a
 * section active while it occupies the middle band of the screen.
 */
export default function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids])

  return active
}
