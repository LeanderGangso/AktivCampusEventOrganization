import logo from './logo.svg';
import './App.css';

import Header from './components/Header'

function App() {
  const test = true

  return (
    <div className="App">
      {/* use component from components folder, with props */}
      <Header title='Passed in prop title' />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* if statement based on variable above */}
        <p>Are we still testing? ({test ? 'Yes' : 'No'})</p> 
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
