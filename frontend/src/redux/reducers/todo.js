import { types } from "../types/types";

const initialState = {
    token: null,
    todos: [],
    error: null,
    loading: false,
    download: false,
    login: false,
    user: null,
    editingTodo: null
};

export const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.LOGIN_DO_LOGIN:
            return {
                ...state,
                loading: true,
                login: false
            };
        case types.LOGIN_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                login: true,
                user: action.payload.id
            };
        case types.LOGIN_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                login: false
            };
        case types.LOGOUT_DO_LOGOUT:
            return {
                ...state,
                todos: [],
                token: null,
                login: false,
                user: null,
                editingTodo: null
            }
        case types.TODO_GET_ALL:
            return {
                ...state,
                loading: action.payload
            };
        case types.TODO_GET_ALL_START:
            return {
                ...state,
                download: action.payload
            };
        case types.TODO_GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                download: false,
                todos: [
                    ...action.payload
                ]
            };
        case types.TODO_GET_ALL_ERROR:
            return {
                ...state,
                loading: false,
                download: false,
                error: action.payload
            };
        case types.TODO_CHANGE_COMPLETE_STATE:
            return {
                ...state,
                todos: [
                    ...state.todos.filter(todo => todo.id !== action.payload.id),
                    {
                        ...action.payload
                    }
                ]
            };
        case types.TODO_CREATE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            };
        case types.TODO_DELETE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.filter(todo => todo.id !== action.payload.id)
                ]
            };
        case types.TODO_EDIT_TODO:
            return {
                ...state,
                editingTodo: action.payload
            }
        case types.TODO_CONFIRM_EDIT:
            return {
                ...state,
                editingTodo: null,
                todos: [
                    ...state.todos.filter(todo => todo.id !== action.payload.id),
                    action.payload
                ]
            }
        default:
            return state;
    }
}
