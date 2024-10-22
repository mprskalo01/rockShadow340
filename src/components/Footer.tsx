import React from 'react'
import SocialIcons from '../assets/icons/SocialIcons'
import { useColor } from '../context/ColorContext'

const Footer: React.FC = () => {
  const { isColorized } = useColor()
  return (
    <footer className="py-0 text-center">
      <div className="mt-24 flex min-h-fit flex-col items-center">
        <h2 className={`md:mb-10 ${isColorized ? 'color-title' : 'title'}`}>
          &lt;Contact /&gt;
        </h2>
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
            href="mailto:mario.prskalo5@gmail.com?subject=Reaching%20Out%20from%20Your%20Portfolio"
            target="_blank"
            className="transition-all duration-500 hover:scale-125"
            rel="noopener noreferrer"
          >
            <SocialIcons.MailIcon />
          </a>
          <a
            href="https://github.com/mprskalo01"
            className="transition-all duration-500 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcons.GithubIcon />
          </a>
        </div>
        <p
          className={`mt-2 text-sm font-semibold ${isColorized ? 'color-gradient-text' : 'gradient-text'}`}
        >
          mario.prskalo5@gmail.com
        </p>
      </div>
      <p
        className={`md:text-md mt-8 pb-12 text-center text-xs font-bold transition-all duration-500 xl:mt-16 ${
          isColorized ? 'color-gradient-text' : 'gradient-text'
        } `}
      >
        Designed and Developed by © Mario Prskalo
      </p>
    </footer>
  )
}

export default Footer
