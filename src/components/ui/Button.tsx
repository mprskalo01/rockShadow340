interface ButtonBaseProps {
  variant?: 'primary' | 'ghost'
  children: React.ReactNode
  className?: string
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button'
  onClick?: () => void
  href?: never
  target?: never
  rel?: never
}

interface ButtonAsAnchor extends ButtonBaseProps {
  as: 'a'
  href: string
  target?: string
  rel?: string
  onClick?: never
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const base =
  'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] focus-visible:outline-[var(--color-accent)]',
  ghost:
    'border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)]',
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (props.as === 'a') {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={props.onClick} className={classes}>
      {children}
    </button>
  )
}
