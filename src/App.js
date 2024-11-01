import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;