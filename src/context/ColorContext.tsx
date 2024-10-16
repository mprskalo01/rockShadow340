import React, { createContext, useState, useContext, useEffect } from 'react'

type ColorContextType = {
  isColorized: boolean
  setIsColorized: (isColorized: boolean) => void
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isColorized, setIsColorized] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('isColorized')
    return savedMode ? JSON.parse(savedMode) : false
  })

  useEffect(() => {
    localStorage.setItem('isColorized', JSON.stringify(isColorized))
  }, [isColorized])

  return (
    <ColorContext.Provider
      value={{
        isColorized,
        setIsColorized,
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

export const useColor = () => {
  const context = useContext(ColorContext)
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider')
  }
  return context
}
