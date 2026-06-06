import { useEffect, useRef } from 'react'

/**
 * Single shared IntersectionObserver reused across every revealed element.
 * On first intersect it adds `.is-visible` (CSS owns the transition) then
 * unobserves — no re-animation on scroll back up.
 */
let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )
  }
  return observer
}

export default function useIntersection<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = getObserver()
    obs.observe(el)
    return () => obs.unobserve(el)
  }, [])

  return ref
}
