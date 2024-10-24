import React from 'react'
import ProjectItem from './ProjectItem'
import { useColor } from '../context/ColorContext'

const Projects: React.FC = () => {
  const { isColorized } = useColor()
  const projects = [
    {
      imageUrl: '/images/fainanceProject.webp',
      title: 'FAInance',
      description: 'React | Node | Express | Tensorflow | MongoDB ',
      githubLink: 'https://github.com/mprskalo01/financeMERN',
    },
    {
      imageUrl: '/images/carProject.webp',
      title: 'Car Rental',
      description: 'React | Node | Express | MongoDB ',
      githubLink: 'https://github.com/mprskalo01/PZI_2024',
    },
  ]

  return (
    <div className="width-custom mx-auto mt-40">
      <div className="mb-12">
        <h2 className={`text-center ${isColorized ? 'color-title' : 'title'}`}>
          &lt;Projects /&gt;
        </h2>
        <h2
          className={`text-center text-sm ${isColorized ? 'text-black' : 'text-white'}`}
        >
          Detailed project breakdown in the GitHub readme
        </h2>
      </div>

      <div className="flex flex-col gap-16 xl:gap-24">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
