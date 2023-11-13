import './App.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, getAllTodos, startLogout } from './redux/actions/todo';
import { changeTodoState } from './redux/actions/todo';
import { createTodo } from './redux/actions/todo';
import { Header } from './components/index/Header';
import { NewTodoForm } from './components/index/NewTodoForm';
import { TodoList } from './components/index/TodoList';

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

  const deleteTodoClick = (todo) => {
    dispatch(deleteTodo(todo, selector.token));
  }

  return (
    <div className="App">
        <div className="containerIndex">
          <div className="todo-app">
              <Header
                setLogout={setLogout}
              />
              <NewTodoForm
                newTodo={newTodo}
                setnewTodo={setnewTodo}
                addNewTodo={addNewTodo}
              />
              <TodoList
                changeState={changeState}
                deleteTodoClick={deleteTodoClick}
                todos={selector.todos}
              />
          </div>
        </div>
    </div>
  );
}

export default App;
