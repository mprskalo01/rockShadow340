import React from 'react'
import { useColor } from '../context/ColorContext'

const Hero: React.FC = () => {
  const { isColorized } = useColor()
  return (
    <div className="mx-6 mb-10 flex h-[80vh] flex-col items-center justify-center md:mb-16">
      <div className="text-center">
        {/* <h1 className="sronly">
          Mario Prskalo | Experienced Web Developer Specializing in Frontend
          Development and Modern Web Technologies
        </h1> */}
        <h2 className={`${isColorized ? 'color-title' : 'title'}`}>
          Developing the front end
        </h2>
      </div>
      <div className="text-center">
        <h2 className={`${isColorized ? 'color-subtitle' : 'subtitle'}`}>
          with back-end integration
        </h2>
      </div>
      <div className="mt-12 flex flex-col gap-4 text-center">
        <a href="/MarioPrskaloResume.pdf" download>
          <button
            className={`w-32 rounded-lg py-2 font-extrabold shadow-lg transition-all duration-500 hover:scale-105 ${
              isColorized
                ? 'border border-zinc-400 bg-white text-black'
                : 'border border-zinc-400 bg-zinc-700 text-white'
            }`}
          >
            View CV
          </button>
        </a>
        <a
          href="mailto:mario.prskalo5@gmail.com?subject=Interested%20in%20Your%20Work"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`w-32 rounded-lg py-2 font-extrabold shadow-lg transition-all duration-500 hover:scale-105 ${
              isColorized
                ? 'border border-zinc-400 bg-white text-black'
                : 'border border-zinc-400 bg-zinc-700 text-white'
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
