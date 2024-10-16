import React from 'react'
import { useColor } from '../context/ColorContext'

const Hero: React.FC = () => {
  const { isColorized } = useColor()
  return (
    <div className="mx-6 mb-16 mt-4 flex h-[80vh] flex-col items-center justify-center">
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
      <div className="mt-12 flex flex-col gap-4 text-center">
        <a href="/MarioPrskaloResume.pdf" download>
          <button
            className={`rounded-lg px-4 py-2 font-extrabold transition-all duration-500 hover:scale-105 ${
              isColorized
                ? 'bg-zinc-800 text-white'
                : 'bg-zinc-200 text-zinc-800'
            }`}
          >
            Download CV
          </button>
        </a>
        <a
          href="mailto:mario.prskalo5@gmail.com?subject=Interested%20in%20Your%20Work"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`rounded-lg px-4 py-2 font-extrabold transition-all duration-500 hover:scale-105 ${
              isColorized
                ? 'bg-zinc-700 text-white'
                : 'bg-zinc-100 text-zinc-800'
            }`}
          >
            Contact me
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero
