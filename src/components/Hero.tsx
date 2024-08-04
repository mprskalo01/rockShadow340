import React from 'react'
import { useColor } from '../context/ColorContext'

const Hero: React.FC = () => {
  const { isColorized } = useColor()
  return (
    <div className="mx-6 mb-2 mt-4 flex h-[80vh] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className={`${isColorized ? 'color-title' : 'title'}`}>
          Developing the Front-End
        </h1>
      </div>
      <div className="text-center">
        <h2 className={`${isColorized ? 'color-subtitle' : 'subtitle'}`}>
          with Back-End integration
        </h2>
      </div>
    </div>
  )
}

export default Hero
