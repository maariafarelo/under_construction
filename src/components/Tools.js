import React from 'react';
import './Tools.css'; 

function Tools() {
  return (
    <div className="tools-container">
      <h2 className="tools-title">my tools</h2>
      <div className="tools">
        <div className="column">

          <h3 className="column-title">Languages</h3>
          <ul>
            <p>JavaScript</p>
            <p>Java</p>
            <p>Python</p>
            <p>C++</p>
            <p>Dart</p>
            <p>CSS & HTML</p>
          </ul>

          <h3 className="column-title">Frameworks</h3>
          <ul>
            <p>Flutter</p>
            <p>React</p>
          </ul>
        </div>

        <div className="column">
          <h3 className="column-title">Tools</h3>
          <ul>
            <p>Git</p>
            <p>JetBrains tools</p>
            <p>VS Code</p>
            <p> Microsoft Tools </p>
          </ul>
        </div>
        <div className="column">
          <h3 className="column-title">Miscellaneous</h3>
          <ul>
            <p>Figma</p>
            <p>Slack</p>
            <p>Netlify</p>
            <p>Meet</p>
            <p>Notion</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tools;
