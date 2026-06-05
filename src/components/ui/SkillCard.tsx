import { techIconMap } from '../icons/TechIcons'

interface SkillCardProps {
  name: string
  iconKey: string
}

export default function SkillCard({ name, iconKey }: SkillCardProps) {
  const IconComponent = techIconMap[iconKey]

  return (
    <div className="group flex flex-col items-center gap-2 rounded-xl border border-[var(--color-border)] p-3 transition-colors duration-200 hover:border-[var(--color-accent)]">
      <div className="h-8 w-8">
        {IconComponent ? <IconComponent /> : null}
      </div>
      <span className="text-center font-mono text-xs text-[var(--color-muted)] transition-colors duration-200 group-hover:text-[var(--color-text)]">
        {name}
      </span>
    </div>
  )
}
