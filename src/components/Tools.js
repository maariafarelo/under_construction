import React from 'react';
import './Tools.css'; 

function Tools() {
  return (
    <div className="tools-container">
      <h2 className="tools-title">My Tools</h2>
      <div className="tools">
        <div className="column">
          <h3 className="column-title">Languages</h3>
          <ul className="image-grid">
            <img src="path/to/javascript-logo.png" alt="JavaScript" />
            <img src="path/to/java-logo.png" alt="Java" />
            <img src="path/to/python-logo.png" alt="Python" />
            <img src="path/to/cplusplus-logo.png" alt="C++" />
            <img src="path/to/dart-logo.png" alt="Dart" />
            <img src="path/to/html-css-logo.png" alt="CSS & HTML" />
          </ul>

          <h3 className="column-title">Frameworks</h3>
          <ul className="image-grid">
            <img src="path/to/flutter-logo.png" alt="Flutter" />
            <img src="path/to/react-logo.png" alt="React" />
          </ul>
        </div>

        <div className="column">
          <h3 className="column-title">Tools</h3>
          <ul className="image-grid">
            <img src="path/to/git-logo.png" alt="Git" />
            <img src="path/to/jetbrains-logo.png" alt="JetBrains Tools" />
            <img src="path/to/vscode-logo.png" alt="VS Code" />
            <img src="path/to/microsoft-tools-logo.png" alt="Microsoft Tools" />
          </ul>
        </div>

        <div className="column">
          <h3 className="column-title">Miscellaneous</h3>
          <ul className="image-grid">
            <img src="path/to/figma-logo.png" alt="Figma" />
            <img src="path/to/slack-logo.png" alt="Slack" />
            <img src="path/to/netlify-logo.png" alt="Netlify" />
            <img src="path/to/meet-logo.png" alt="Google Meet" />
            <img src="path/to/notion-logo.png" alt="Notion" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tools;
