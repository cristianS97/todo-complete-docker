import { createTodoPost } from "../../hooks/createDataHook";
import { deleteTodoPost } from "../../hooks/deleteDataHook";
import { getData } from "../../hooks/getDataHook";
import { doLogin } from "../../hooks/loginHook";
import { doLogout } from "../../hooks/logoutHook";
import { updateData } from "../../hooks/updateDataHook";
import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await doLogin(email, password);
        const body = await resp.json();
        if(resp.ok) {
            dispatch(login({...body}));
        } else {
            dispatch(loginError("No se ha podido realizar el login"));
        }
    }
}

export const startLogout = (token) => {
    return async (dispatch) => {
        const resp = await doLogout(token);
        if(resp.ok) {
            dispatch(logout());
        }
    }
}

const login = (user) => ({
    type: types.LOGIN_LOGIN_SUCCESS,
    payload: user
});

const loginError = (error) => ({
    type: types.LOGIN_LOGIN_ERROR,
    payload: error
});

const logout = () => ({
    type: types.LOGOUT_DO_LOGOUT
});

export const getAllTodos = (token) => {
    return async (dispatch) => {
        dispatch(downloadTodos());
        const resp = await getData(token);
        const body = await resp.json();
        if(resp.ok) {
            dispatch(downloadTodosSuccess(body));
        } else {
            dispatch(downloadTodosError("No se han podido descargar las notas"));
        }
    };
};

const downloadTodos = () => ({
    type: types.TODO_GET_ALL_START,
    payload: true
});

const downloadTodosSuccess = (todos) => ({
    type: types.TODO_GET_ALL_SUCCESS,
    payload: todos
});

const downloadTodosError = (msg) => ({
    type: types.TODO_GET_ALL_SUCCESS,
    payload: msg
});

export const changeTodoState = (todo, token) => {
    return async (dispatch) => {
        const resp = await updateData(todo, token);
        if(resp.ok) {
            dispatch(changeTodoAction(todo));
        }
    }
}

const changeTodoAction = (todo) => ({
    type: types.TODO_CHANGE_COMPLETE_STATE,
    payload: todo
});

export const createTodo = (todo, token) => {
    return async (dispatch) => {
        const resp = await createTodoPost(todo, token);
        const body = await resp.json();
        if(resp.ok) {
            dispatch(startCreateTodo(body));
        }
    }
}

const startCreateTodo = (todo) => ({
    type: types.TODO_CREATE_TODO,
    payload: todo
})

export const deleteTodo = (todo, token) => {
    return async (dispatch) => {
        const resp = await deleteTodoPost(todo, token);
        if(resp.ok) {
            dispatch(startDeleteTodo(todo));
        }
    }
}

const startDeleteTodo = (todo) => ({
    type: types.TODO_DELETE_TODO,
    payload: todo
})