import logo from './logo.svg';
import './App.css';
import EmpDir from "./components/EmpDir.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello I am HERE!!!!!!!!!!!!!!!!
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <EmpDir />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
