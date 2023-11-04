import './App.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, startLogout } from './redux/actions/todo';
import { changeTodoState } from './redux/actions/todo';
import { createTodo } from './redux/actions/todo';

function App() {
  const [logout, setLogout] = useState(false);
  const [newTodo, setnewTodo] = useState('');

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

  const changeState = (todo) => {
    dispatch(changeTodoState({...todo, complete: !todo.complete}, selector.token));
  }

  const addNewTodo = () => {
    if(newTodo !== "") {
      let data = {
        "title": newTodo,
        "creator": selector.user,
        "relevance": 3,
        "complete": false
      };
      dispatch(createTodo(data, selector.token));
      setnewTodo("");
    }
  }

  return (
    <div className="App">
        <div className="containerIndex">
          <div className="todo-app">
              <div className="app-title">
                  <h2>To-do app</h2>
                  <h5 style={{'cursor': 'pointer'}} onClick={() => setLogout(true)}>Cerrar sesión</h5>
              </div>
              <div className="row">
                  <input type="text" id="input-box" placeholder="Agrega una tarea" className='addTodo' value={newTodo} onChange={e => setnewTodo(e.target.value)} />
                  <button onClick={addNewTodo}>Agregar</button>
              </div>
              <ul id="list-container">
                {selector.todos.length > 0 && selector.todos.map((todo, idx) => (
                  <li onClick={() => changeState(todo)} className={todo.complete ? 'checked' : ''} key={idx}>{todo.title}<span>x</span></li>
                ))}
              </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
