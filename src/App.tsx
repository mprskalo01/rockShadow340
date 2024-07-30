import React from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ColorProvider, useColor } from "./context/ColorContext";
import Footer from "./components/Footer";

const AppContent: React.FC = () => {
  const { isColorized } = useColor();

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isColorized ? "bg-lime-300" : "bg-zinc-800"
      }`}
    >
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ColorProvider>
      <AppContent />
    </ColorProvider>
  );
};

export default App;