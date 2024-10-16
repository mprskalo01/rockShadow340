import './styles/App.css'
import './styles/globals.css'
import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { ColorProvider, useColor } from './context/ColorContext'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const AppContent: React.FC = () => {
  const { isColorized } = useColor()

  useEffect(() => {
    const root = document.documentElement
    if (isColorized) {
      root.style.setProperty('color-scheme', 'light')
    } else {
      root.style.setProperty('color-scheme', 'dark')
    }
  }, [isColorized])

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isColorized
          ? 'to bg-amber-200 bg-gradient-to-b from-amber-50'
          : 'bg-zinc-800'
      }`}
    >
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

const App = () => {
  return (
    <ColorProvider>
      <AppContent />
    </ColorProvider>
  )
}

export default App
