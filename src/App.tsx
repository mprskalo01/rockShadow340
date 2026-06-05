import ThemeProvider from './context/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import ScrollToTop from './components/ui/ScrollToTop'

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}
