import React from 'react'
import SocialIcons from '../assets/icons/SocialIcons'
import { useColor } from '../context/ColorContext'

const Footer: React.FC = () => {
  const { isColorized } = useColor()
  return (
    <footer className="py-0">
      <div className="mt-44 flex min-h-fit">
        <div className="footer-container">
          <a
            href="https"
            className="transition-all duration-500 hover:scale-125"
          >
            <SocialIcons.LinkedinIcon />
          </a>
          <a
            href="https"
            className="transition-all duration-500 hover:scale-125"
          >
            <SocialIcons.MailIcon />
          </a>
          <a
            href="https"
            className="transition-all duration-500 hover:scale-125"
          >
            <SocialIcons.UpworkIcon />
          </a>
          <a
            href="https"
            className="transition-all duration-500 hover:scale-125"
          >
            <SocialIcons.GithubIcon />
          </a>
        </div>
      </div>
      <h3
        className={`pb-4 pt-24 text-center text-sm font-bold transition-all duration-500 md:text-lg xl:pt-44 ${
          isColorized ? 'color-gradient-text' : 'gradient-text'
        } `}
      >
        Designed and Developed by © Mario
      </h3>
    </footer>
  )
}

export default Footer
