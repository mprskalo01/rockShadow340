import React from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
