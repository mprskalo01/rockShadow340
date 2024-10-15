import React from 'react'
import { useColor } from '../context/ColorContext'

const Hero: React.FC = () => {
  const { isColorized } = useColor()
  return (
    <div className="mx-6 mb-2 mt-4 flex h-[80vh] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className={`${isColorized ? 'color-title' : 'title'}`}>
          Developing the Frontend
        </h1>
      </div>
      <div className="text-center">
        <h2 className={`${isColorized ? 'color-subtitle' : 'subtitle'}`}>
          with Backend integration
        </h2>
      </div>
      <div className="mt-4 text-center md:w-1/2">
        <p className={`${isColorized ? 'color-about' : 'about'}`}>
          Computer Science graduate with 3 years of dedicated web development
          learning experience. Specialized in frontend technologies with backend
          proficiency. Built on a strong foundation in computer science
          principles, I'm passionate about continuous learning and growth. Eager
          to apply my skills, contribute to innovative projects, and launch my
          professional career in web development.
          <h6 className={`${isColorized ? 'color-about' : 'about'}`}>
            mario.prskalo5@gmail.com
          </h6>
        </p>
      </div>
    </div>
  )
}

export default Hero
