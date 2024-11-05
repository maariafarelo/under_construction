import React from 'react';
import './Tools.css'; 

function Tools() {
  return (
    <div className="tools-container">
      <h2 className="tools-title">my tools</h2>
      <div className="tools">
        <div className="column">
          <h3 className="column-title">Languages & Frameworks</h3>
          <ul>
            <p>JavaScript</p>
            <p>Python</p>
            <p>React</p>
            <p>Node.js</p>
            <p>CSS</p>
          </ul>
        </div>
        <div className="column">
          <h3 className="column-title">Tools</h3>
          <ul>
            <p>Git</p>
            <p>Docker</p>
            <p>VS Code</p>
            <p>Postman</p>
            <p>Webpack</p>
          </ul>
        </div>
        <div className="column">
          <h3 className="column-title">Miscellaneous</h3>
          <ul>
            <p>Figma</p>
            <p>Slack</p>
            <p>Trello</p>
            <p>Zoom</p>
            <p>Notion</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tools;
