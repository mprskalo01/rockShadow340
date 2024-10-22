import './styles/App.css'
import './styles/globals.css'
import React, { useEffect, Suspense } from 'react'
import { ColorProvider, useColor } from './context/ColorContext'

const Header = React.lazy(() => import('./components/Header'))
const Hero = React.lazy(() => import('./components/Hero'))
const Skills = React.lazy(() => import('./components/Skills'))
const Projects = React.lazy(() => import('./components/Projects'))
const Footer = React.lazy(() => import('./components/Footer'))
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'))

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
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
        <ScrollToTop />
      </Suspense>
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
