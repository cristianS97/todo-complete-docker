import { combineReducers, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { todoReducer } from '../reducers/todo';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    todo: todoReducer
});

export const store = configureStore({
    reducer: reducers
}, composeEnhancers(applyMiddleware(thunk)));
