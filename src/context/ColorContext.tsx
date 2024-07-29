// ColorContext.tsx
import React, { createContext, useState, useContext } from "react";

type ColorContextType = {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  isColorized: boolean;
  setIsColorized: (isColorized: boolean) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("bg-zinc-800");
  const [isColorized, setIsColorized] = useState(false);

  return (
    <ColorContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor,
        isColorized,
        setIsColorized,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
