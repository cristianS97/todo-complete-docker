import { TodoItem } from "./TodoItem"

export const TodoList = ({changeState, deleteTodoClick, startEditTodoClick, todos}) => {
    return (
        <ul id="list-container">
            {todos.length > 0 && todos.map((todo, idx) => (
                <TodoItem
                    key={idx}
                    todo={todo}
                    changeState={changeState}
                    deleteTodoClick={deleteTodoClick}
                    startEditTodoClick={startEditTodoClick}
                />
            ))}
        </ul>
    );
}
