import React from "react";
import { useColor } from "../context/ColorContext";

const ColorizeButton: React.FC = () => {
  const { setBackgroundColor, isColorized, setIsColorized } = useColor();

  const handleClick = () => {
    if (!isColorized) {
      setBackgroundColor("bg-lime-300 transiton-colors duration-500");
      setIsColorized(true);
    } else {
      setBackgroundColor("bg-zinc-800 transiton-colors duration-500");
      setIsColorized(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-lg font-extrabold py-2 px-4 transition-all duration-500 ${
        isColorized
          ? "bg-zinc-800 text-white"
          : "animate-rainbow-text hover:scale-90"
      }`}
    >
      {isColorized ? "Minimize" : "Colorize"}
    </button>
  );
};

export default ColorizeButton;
