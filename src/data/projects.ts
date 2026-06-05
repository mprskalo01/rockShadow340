import type { Project } from '../types'

export const projects: Project[] = [
  {
    imageUrl: '/images/fainanceProject.webp',
    title: 'FAInance',
    description:
      'AI-powered personal finance tracker with TensorFlow-based spending predictions and a MERN stack backend.',
    stack: ['React', 'Node.js', 'Express', 'TensorFlow', 'MongoDB'],
    githubUrl: 'https://github.com/mprskalo01/financeMERN',
  },
  {
    imageUrl: '/images/carProject.webp',
    title: 'Car Rental',
    description:
      'Full-stack car rental management system with booking flows, admin dashboard, and persistent data layer.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/mprskalo01/PZI_2024',
  },
]
