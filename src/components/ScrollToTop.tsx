import React, { useState, useEffect } from 'react'
import { useColor } from '../context/ColorContext'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { isColorized } = useColor()
  const toggleVisibility = () => {
    if (window.scrollY > 800) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-52 right-4 md:right-24">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`rounded-full p-2 opacity-90 shadow-2xl transition-all duration-300 hover:scale-105 ${isColorized ? 'bg-white' : 'bg-zinc-700'}`}
        >
          <svg
            fill={`${isColorized ? '#000' : '#fff'}`}
            height="12px"
            width="12px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 330 330"
            className="md:h-6 md:w-6"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                id="XMLID_224_"
                d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
                stroke={`${isColorized ? '#000' : '#fff'}`}
                strokeWidth="20"
              ></path>{' '}
            </g>
          </svg>
        </button>
      )}
    </div>
  )
}

export default ScrollToTop
