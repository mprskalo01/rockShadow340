import React, { useState, useEffect } from 'react'
import { useColor } from '../context/ColorContext'

const ColorizeButton: React.FC = () => {
  const { isColorized, setIsColorized } = useColor()
  const [isDisabled, setIsDisabled] = useState(false)

  const handleClick = () => {
    if (!isDisabled) {
      setIsColorized(!isColorized)
      setIsDisabled(true)
    }
  }

  useEffect(() => {
    if (isDisabled) {
      const timer = setTimeout(() => {
        setIsDisabled(false)
      }, 1000) // 1000 milliseconds = 1 second

      return () => clearTimeout(timer) // Cleanup on unmount
    }
  }, [isDisabled])

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`rounded-lg px-4 py-2 font-extrabold hover:scale-90 ${
        isColorized
          ? 'border border-white bg-zinc-800 text-white'
          : 'animate-rainbow-text border border-zinc-600'
      }`}
    >
      {isColorized ? 'Minimize' : 'Colorize'}
    </button>
  )
}

export default ColorizeButton
