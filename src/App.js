import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo of Maria Farelo" />
        <h1>
          <code>Hello there!</code> <br />
          This portfolio is still in the <span className="highlight">coding lab</span>, <br />
          good things take time to compile!
        </h1>
        <p className="contact-info">
          <span>Connect with me:</span> <br />
          <a 
            href="https://github.com/maariafarelo" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a> | 
          <a 
            href="https://www.linkedin.com/in/mariafareloiglesias/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a> | 
          <a href="mailto:maria190504@gmail.com">Email</a>
        </p>
      </header>
    </div>
  );
}

export default App;
