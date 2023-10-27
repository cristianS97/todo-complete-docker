import './App.css';
import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import { getData } from './hooks/getDataHook';
import { doLogout } from './hooks/logoutHook';
import { Login } from './components/login';

function App() {
  const [token, setToken] = useState('');
  const [logout, setLogout] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    if(data) {
      getData(token, setData);
    }
  }, [data, token]);

  useEffect(() => {
    if(logout) {
      doLogout(token);
    }
  }, [logout, token]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setData(true)}>Data</button>
      </header>
    </div>
  );
}

export default App;
