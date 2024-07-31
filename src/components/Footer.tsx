import React from "react";
import SocialIcons from "../assets/SocialIcons";
import { useColor } from "../context/ColorContext";

const Footer: React.FC = () => {
  const { isColorized } = useColor();
  return (
    <footer className='py-0'>
      <div className='min-h-fit mt-44 flex'>
        <div className='footer-container'>
          <a
            href='https'
            className='hover:scale-125 transition-all duration-500'
          >
            <SocialIcons.LinkedinIcon />
          </a>
          <a
            href='https'
            className='hover:scale-125 transition-all duration-500'
          >
            <SocialIcons.MailIcon />
          </a>
          <a
            href='https'
            className='hover:scale-125 transition-all duration-500'
          >
            <SocialIcons.UpworkIcon />
          </a>
          <a
            href='https'
            className='hover:scale-125 transition-all duration-500'
          >
            <SocialIcons.GithubIcon />
          </a>
        </div>
      </div>
      <h3
        className={`text-center pt-24 xl:pt-44 pb-4 font-bold text-sm md:text-lg transition-all duration-500 ${
          isColorized ? "color-gradient-text" : "gradient-text"
        } `}
      >
        Designed and Developed by © Mario
      </h3>
    </footer>
  );
};

export default Footer;
