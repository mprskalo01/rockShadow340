import React from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
