import React from "react";
import ColorizeButton from "./ColorizeButton";
import { useColor } from "../context/ColorContext";

// import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { isColorized } = useColor();
  return (
    <header
      className={`top-0 sticky z-50 transition-all duration-500 ${
        isColorized ? "bg-lime-300" : "bg-zinc-800"
      }`}
    >
      <div
        className={`h-full container mx-auto flex justify-between items-center width-custom ${
          isColorized ? "color-border-gradient" : "border-gradient"
        }`}
      >
        <div className='text-4xl font-bold'>
          <h1
            className={`hover:scale-90 transition-all duration-500 cursor-pointer ${
              isColorized ? "color-header-main" : "header-main"
            }`}
          >
            Mario
          </h1>
        </div>
        <ColorizeButton />
      </div>
    </header>
  );
};

export default Header;
