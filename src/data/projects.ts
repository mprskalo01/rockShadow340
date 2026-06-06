import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'FAInance',
    tagline: 'Case Study — AI / Full-Stack',
    description:
      'AI-powered personal finance tracker with TensorFlow-based spending predictions and a MERN stack backend.',
    role: 'Full-stack',
    year: '2024',
    stack: ['React', 'Node.js', 'Express', 'TensorFlow', 'MongoDB'],
    visual: 'finance', // minimalist finance chart line-art behind the card
    githubUrl: 'https://github.com/mprskalo01/financeMERN',
  },
  {
    title: 'Car Rental',
    tagline: 'Case Study — Full-Stack Platform',
    description:
      'Full-stack car rental management system with booking flows, an admin dashboard, and a persistent data layer.',
    role: 'Full-stack',
    year: '2024',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    visual: 'cars', // minimalist car silhouettes behind the card
    githubUrl: 'https://github.com/mprskalo01/PZI_2024',
  },
]
