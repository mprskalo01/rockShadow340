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
            href="https://www.linkedin.com/in/mprskalo01/"
            className="transition-all duration-500 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcons.LinkedinIcon />
          </a>
            <a
            href="mailto:mario.prskalo5@gmail.com"
            className="transition-all duration-500 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
            >
            <SocialIcons.MailIcon />
            </a>
          {/* <a
            href="https"
            className="transition-all duration-500 hover:scale-125"
          >
            <SocialIcons.UpworkIcon />
          </a> */}
          <a
            href="https://github.com/mprskalo01"
            className="transition-all duration-500 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
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
        Designed and Developed by © Mario Prskalo
      </h3>
    </footer>
  )
}

export default Footer
