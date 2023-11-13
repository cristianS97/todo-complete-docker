
export const NewTodoForm = ({newTodo, setnewTodo, addNewTodo}) => {
    return (
        <div className="row">
            <input
                type="text"
                id="input-box"
                placeholder="Agrega una tarea"
                className='addTodo'
                value={newTodo}
                onChange={e => setnewTodo(e.target.value)}
            />
            <button
                onClick={addNewTodo}
            >Agregar</button>
        </div>
    );
}