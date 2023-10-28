import { doLogin } from "../../hooks/loginHook";
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

const login = (user) => ({
    type: types.LOGIN_LOGIN_SUCCESS,
    payload: user
});

const loginError = (error) => ({
    type: types.LOGIN_LOGIN_ERROR,
    payload: error
});

export const getAllTodos = () => {
    return async (dispatch) => {
        dispatch(downloadTodos());
    };
};

const downloadTodos = () => ({
    type: types.TODO_GET_ALL_START,
    payload: true
});