import type { ReactNode } from 'react'

interface TextLinkProps {
  href: string
  children: ReactNode
  external?: boolean
}

export default function TextLink({ href, children, external }: TextLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a className="text-link" href={href} {...externalProps}>
      {children}
    </a>
  )
}
