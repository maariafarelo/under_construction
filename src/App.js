import React from "react";
import NavBar from "./components/NavBar"; 
import Intro from "./components/Intro";
import CustomCursor from "./components/CustomCursor"; // Ensure this path is correct

import "./global.css";

function App() {
  return (
    <div className="App">
      <NavBar> </NavBar>
      <Intro> </Intro>
      <CustomCursor></CustomCursor>
    </div>
  );
}

export default App;
