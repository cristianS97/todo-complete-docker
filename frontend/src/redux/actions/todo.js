import { types } from "../types/types";

export const getAllTodos = () => {
    return async (dispatch) => {
        dispatch(downloadTodos());
    };
};

const downloadTodos = () => ({
    type: types.TODO_GET_ALL_START,
    payload: true
});