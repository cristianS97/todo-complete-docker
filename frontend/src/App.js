import './App.css';
import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './hooks/getDataHook';
import { startLogout } from './redux/actions/todo';

function App() {
  const [logout, setLogout] = useState(false);
  const [data, setData] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(state => state);

  useEffect(() => {
    if(data) {
      getData(selector.todo.token, setData);
    }
  }, [data, selector.todo.token]);

  useEffect(() => {
    if(logout) {
      dispatch(startLogout(selector.todo.token));
      navigate('/login');
    }
  }, [logout, selector.todo.token, dispatch, navigate]);

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
        <button onClick={() => setLogout(!logout)}>Logout</button>
        <button onClick={() => setData(true)}>Data</button>
      </header>
    </div>
  );
}

export default App;
