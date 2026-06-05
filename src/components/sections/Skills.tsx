import { skillCategories } from '../../data/skills'
import SkillCategoryCard from '../ui/SkillCategoryCard'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          What I work with
        </p>
        <h2 className="mb-14 text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
          Skills
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
