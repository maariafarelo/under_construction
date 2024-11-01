import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="name">Maria Farelo</h2>
      </div>
      <div className="navbar-right">
        <a
          href="https://www.linkedin.com/in/mariafareloiglesias/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/maariafarelo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:maria190504@gmail.com">Email</a>
      </div>
    </nav>
  );
}

export default NavBar;
