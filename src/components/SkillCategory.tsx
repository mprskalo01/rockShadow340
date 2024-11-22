import React from 'react'
import { useColor } from '../context/ColorContext'

interface Skill {
  name: string
  icon: React.ReactNode
}

interface SkillCategoryProps {
  title: string
  skills: Skill[]
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  const { isColorized } = useColor()

  const gridClasses =
    title === 'Optimization'
      ? 'grid grid-cols-2 gap-4'
      : 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'

  return (
    <div
      className={`rounded-3xl border-b border-t p-6 shadow-lg ${
        isColorized
          ? 'bg-gradient-to-t from-cyan-200 to-cyan-600'
          : 'border-zinc-400 bg-zinc-800'
      } flex h-full flex-col`}
    >
      <h2
        className={`title mb-4 text-center text-xl font-semibold ${
          isColorized ? 'color-skill-title' : 'title'
        }`}
      >
        {title}
      </h2>
      <div className={`rounded-xl pb-4 ${gridClasses} flex-grow`}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center justify-between rounded-xl border p-4 shadow-lg transition-all duration-500 hover:scale-110 ${
              isColorized
                ? 'border-black bg-gradient-to-t from-pink-200 to-pink-600'
                : 'border-zinc-400'
            } ${title === 'Optimization' && index === 2 ? 'col-span-2' : ''}`}
          >
            <div className="mb-2 h-12 w-12 transition-all duration-500 group-hover:scale-125">
              {skill.icon}
            </div>
            <h3
              className={`transition-all group-hover:scale-110 ${
                isColorized ? 'color-skill-name' : 'skill-name'
              }`}
            >
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCategory
