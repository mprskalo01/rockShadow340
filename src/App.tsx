import React from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ColorProvider, useColor } from "./context/ColorContext";

const AppContent: React.FC = () => {
  const { backgroundColor } = useColor();

  return (
    <div className={`min-h-screen ${backgroundColor}`}>
      <Header />
      <Hero />
      <Skills />
      <Projects />
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
