import './App.css';
import EmpDir from "./components/EmpDir.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Directory</h1>
        <p>Click on the "Name" column to sort employees by name, or use the search box:</p>
      </header>
      <EmpDir />
    </div>
  );
}

export default App;
