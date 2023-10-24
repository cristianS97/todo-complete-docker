import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

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
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "username": email,
        "password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8000/auth/login/", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(JSON.parse(result)['token']);
          setToken(JSON.parse(result)['token']);
        })
        .catch(error => console.log('error', error));
    } else {
      setLogin(false);
    }
  }, [login]);

  useEffect(() => {
    if(data) {
      var requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Token ${token}`
        },
        redirect: 'follow'
      };

      fetch("http://localhost:8000/api/todos", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  }, [data]);

  useEffect(() => {
    if(logout) {
      var requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Token ${token}`
        },
        redirect: 'follow'
      };

      fetch("http://localhost:8000/auth/logout", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  }, [logout]);

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
        <button onClick={() => setData(false)}>No data</button>
      </header>
    </div>
  );
}

export default App;
