import React from "react";
import NavBar from "./components/NavBar"; 
import Intro from "./components/Intro";
import AboutMe from "./components/About";
import Tools from "./components/Tools";
import PetProjects from "./components/PetProjects"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"; 

import "./global.css";

function App() {
   // Function to generate stars
  const createStars = (numberOfStars = 50) => { 
    const stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      // Randomize the position and size of the stars
      const size = Math.random() * 4 + 8; // Tamaño aleatorio entre 8px y 12px
      const style = {
        left: `${Math.random() * 100}vw`, // Posición horizontal aleatoria
        top: `${Math.random() * 100}vh`,  // Posición vertical aleatoria
        width: `${size}px`, // Usar el tamaño aleatorio aquí
        height: `${size}px`, // Usar el tamaño aleatorio aquí
      };
      stars.push(<div key={i} className="star" style={style} />); // Agregar estrella al array
    }
    return stars; // Devolver el array de estrellas
  };

  return (
    <div className="App">
      {/* Star background */}
      <div className="star-background">
        {createStars(100)} 
      </div>
      <NavBar />
      <Intro />
      <AboutMe/>
      <Tools/>
      <PetProjects/>
      <Footer/>
      <CustomCursor />
    </div>
  );
}

export default App;
