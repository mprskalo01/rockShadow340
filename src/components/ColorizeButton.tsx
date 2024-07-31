import React from 'react'
import { useColor } from '../context/ColorContext'

const ColorizeButton: React.FC = () => {
  const { isColorized, setIsColorized } = useColor()

  const handleClick = () => {
    if (!isColorized) {
      setIsColorized(true)
    } else {
      setIsColorized(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`rounded-lg px-4 py-2 font-extrabold transition-all duration-500 ${
        isColorized
          ? 'bg-zinc-800 text-white'
          : 'animate-rainbow-text hover:scale-90'
      }`}
    >
      {isColorized ? 'Minimize' : 'Colorize'}
    </button>
  )
}

export default ColorizeButton
