import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Front-End',
    skills: [
      { name: 'React', iconKey: 'React' },
      { name: 'TypeScript', iconKey: 'TypeScript' },
      { name: 'Next.js', iconKey: 'Next' },
      { name: 'HTML', iconKey: 'Html' },
      { name: 'CSS', iconKey: 'CSS' },
      { name: 'JavaScript', iconKey: 'JavaScript' },
    ],
  },
  {
    title: 'Back-End',
    skills: [
      { name: 'Node.js', iconKey: 'Node' },
      { name: 'Express', iconKey: 'Express' },
      { name: 'MongoDB', iconKey: 'MongoDB' },
      { name: 'PostgreSQL', iconKey: 'PostgreSQL' },
      { name: 'Docker', iconKey: 'Docker' },
      { name: 'NestJS', iconKey: 'NestJS' },
    ],
  },
  {
    title: 'Optimization',
    skills: [
      { name: 'Performance', iconKey: 'Performance' },
      { name: 'SEO', iconKey: 'SEO' },
      { name: 'Responsive', iconKey: 'Responsive' },
    ],
  },
]
