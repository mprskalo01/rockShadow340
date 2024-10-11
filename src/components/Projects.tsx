import React from 'react'
import ProjectItem from './ProjectItem'
import carProjectImage from '../assets/images/carProject.png'
import fainanceProjectImage from '../assets/images/fainanceProject.png'
// todo change the images to color mode if colorozied on
const Projects: React.FC = () => {
  const projects = [
    {
      imageUrl: fainanceProjectImage,
      title: 'FAInance',
      description: 'React | Node | Express | Tensorflow | MongoDB |',
      visitLink: 'https://github.com/mprskalo01',
      githubLink: 'https://github.com/mprskalo01/financeMERN',
    },
    {
      imageUrl: carProjectImage,
      title: 'Car Rental',
      description: 'React | Node | Express | MongoDB |',
      visitLink: 'https://github.com/mprskalo01',
      githubLink: 'https://github.com/mprskalo01/PZI_2024',
    },
  ]

  return (
    <div className="width-custom mx-auto mt-40 flex flex-col items-center justify-center gap-16 xl:gap-24">
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
          visitLink={project.visitLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  )
}

export default Projects
