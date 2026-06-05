import type { ReactNode } from 'react'

interface SocialLinkProps {
  href: string
  label: string
  icon: ReactNode
}

export default function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-[var(--color-muted)] transition-colors duration-150 hover:text-[var(--color-text)]"
    >
      {icon}
    </a>
  )
}
