import type { SkillCategory } from '../../types'
import SkillCard from './SkillCard'

interface SkillCategoryCardProps {
  category: SkillCategory
}

export default function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
        {category.title}
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} iconKey={skill.iconKey} />
        ))}
      </div>
    </div>
  )
}
