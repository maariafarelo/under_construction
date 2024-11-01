import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="name">Maria Farelo</h2>
      </div>
      <div className="navbar-right">
        <a
          href="https://www.linkedin.com/in/your-linkedin" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/your-github" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:your-email@example.com">Email</a> {/* Replace with your email */}
      </div>
    </nav>
  );
}

export default NavBar;
