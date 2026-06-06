interface SkillCategoryProps {
  index: number // 1-based, drives the display number (01, 02, …)
  title: string
  skills: string[]
}

export default function SkillCategory({ index, title, skills }: SkillCategoryProps) {
  const num = String(index).padStart(2, '0')
  return (
    <div className="matrix__row">
      <div className="matrix__cat">
        <span className="matrix__cat-num" aria-hidden="true">
          {num}
        </span>
        <span className="matrix__cat-name">{title}</span>
      </div>
      <div className="matrix__skills">
        {skills.map((s) => (
          <span className="skill" key={s}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
