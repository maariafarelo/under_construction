import React from 'react';
import './Tools.css';

function Tools() {
  return (
    <div className="tools-container">
      <h2 className="tools-title">my tools</h2>
      <p className="tools-subtitle">continuously learning and refining my 
        skills with these tools: </p>
      <div className="tools">
        <div className="column">
          <h3 className="column-title">Languages</h3>
          <ul className="image-grid">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/javascript.png')} alt="JavaScript" />
            </a>
            <a href="https://www.java.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/java.png')} alt="Java" />
            </a>
            <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/python.png')} alt="Python" />
            </a>
            <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/c-.png')} alt="C++" />
            </a>
            <a href="https://dart.dev" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/Dart.png')} alt="Dart" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/css.webp')} alt="CSS & HTML" />
            </a>
          </ul>

         
        </div>

        <div className="column">
          <h3 className="column-title">Tools</h3>
          <ul className="image-grid">
            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/git.png')} alt="Git" />
            </a>
            <a href="https://www.jetbrains.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/intellj.png')} alt="Intellj IDEA" />
            </a>
            <a href="https://www.jetbrains.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/pycharm.webp')} alt="Pycharm" />
            </a>
            <a href="https://www.jetbrains.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/webstorm.png')} alt="Webstorm" />
            </a>
            <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/code.png')} alt="VS Code" />
            </a>
            <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/windows.png')} alt="Microsoft Tools" />
            </a>
          </ul>
        </div>

        <div className="column">
          <h3 className="column-title">Miscellaneous</h3>
          <ul className="image-grid">
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/figma.png')} alt="Figma" />
            </a>
            <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/slack.png')} alt="Slack" />
            </a>
            <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/netlify.png')} alt="Netlify" />
            </a>
            <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/workspacde.png')} alt="Google Meet" />
            </a>
            <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/notion.png')} alt="Notion" />
            </a>
          </ul>
        </div>
        <div className="column"> 
      <h3 className="column-title">Frameworks</h3>
          <ul className="image-grid">
            <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/flutter.png')} alt="Flutter" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <img src={require('../assets/react.png')} alt="React" />
            </a>
          </ul>
      </div>
      </div>
      
      
    </div>
  );
}

export default Tools;
