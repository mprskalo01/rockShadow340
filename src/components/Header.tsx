import React from 'react'
import ColorizeButton from './ColorizeButton'
import { useColor } from '../context/ColorContext'

// import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { isColorized } = useColor()
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 md:rounded-bl-full md:rounded-br-full ${
        isColorized ? 'bg-orange-300' : 'bg-zinc-800'
      }`}
    >
      <div
        className={`width-custom container mx-auto flex h-full items-center justify-between ${
          isColorized ? 'color-border-gradient' : 'border-gradient'
        }`}
      >
        <div className="text-4xl font-bold">
          <button
            className={`${isColorized ? 'color-header-main' : 'header-main'}`}
            onClick={() => window.location.reload()}
            style={{ cursor: 'pointer' }}
          >
            Mario
          </button>
        </div>

        <ColorizeButton />
      </div>
    </header>
  )
}

export default Header
