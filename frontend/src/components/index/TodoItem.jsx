
export const TodoItem = ({changeState, todo, deleteTodoClick}) => {
    return (
        <li
            onClick={() => changeState(todo)}
            className={todo.complete ? 'checked' : ''}
        >{todo.title}
            <span
                onClick={() => deleteTodoClick(todo)}
            >x
        </span></li>
    );
}
