import { Button } from '@wise/components'
import React from 'react';
import './App.css';
import ResetButton from './components/ResetButton'
import logo from './logo.svg';
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Site - B</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Button>버튼</Button>
          <ResetButton>Reset 버튼</ResetButton>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
