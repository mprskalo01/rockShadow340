import ThemeProvider from './context/ThemeContext'
import I18nProvider from './context/I18nContext'
import Frame from './components/layout/Frame'
import SectionRail from './components/layout/SectionRail'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Work from './components/sections/Work'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import ScrollToTop from './components/ui/ScrollToTop'

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Frame />
        <SectionRail />
        <Header />
        <main>
          <Hero />
          <Work />
          <About />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </I18nProvider>
    </ThemeProvider>
  )
}
