import { types } from "../types/types";

const initialState = {
    todos: [],
    error: null,
    loading: false,
    download: false
};

export const todoReducer = (state=initialState, action) => {
    switch(action.type) {
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
        default:
            return state;
    }
}
