import './App.css';
import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, startLogout } from './redux/actions/todo';

function App() {
  const [logout, setLogout] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.todo);

  useEffect(() => {
    dispatch(getAllTodos(selector.token));
  }, [selector.token, dispatch]);

  useEffect(() => {
    if(logout) {
      dispatch(startLogout(selector.token));
      navigate('/login');
    }
  }, [logout, selector.token, dispatch, navigate]);

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

        <hr />
        {selector.todos.length > 0 && selector.todos.map(todo => (
          <p>{todo.id} | {todo.title} | {todo.description}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
