import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { doLogin } from './hooks/loginHook';
import { getData } from './hooks/getDataHook';
import { doLogout } from './hooks/logoutHook';

function App() {
  const [token, setToken] = useState('');
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(false);
  const [data, setData] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(login && email !== '' && password !== '')
    {
      doLogin(email, password, setToken);
    } else {
      setLogin(false);
    }
  }, [login, email, password]);

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
        <label>Email</label>
        <input type='email' onChange={(e) => setEmail(e.target.value)} />
        <label>Contraseña</label>
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => {setLogin(true);setLogout(false);}}>Login</button>
        <button onClick={() => {setLogout(true);setLogin(false);}}>Logout</button>
        <button onClick={() => setData(true)}>Data</button>
      </header>
    </div>
  );
}

export default App;
