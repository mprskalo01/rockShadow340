import React from "react";
import ColorizeButton from "./ColorizeButton";
import { useColor } from "../context/ColorContext";

// import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { backgroundColor } = useColor();
  return (
    <header className={`top-0 sticky z-50 ${backgroundColor}`}>
      <div className='h-full container mx-auto flex justify-between items-center border-gradient width-custom'>
        <div className='text-4xl font-bold'>
          <h1 className='header-main hover:scale-90 transition-all duration-500 cursor-pointer'>
            Mario
          </h1>
        </div>
        <ColorizeButton />
      </div>
    </header>
  );
};

export default Header;
