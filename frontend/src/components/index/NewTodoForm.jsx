import { useSelector } from 'react-redux';

export const NewTodoForm = ({newTodo, setnewTodo, addNewTodo, confirmEdit}) => {
    const selector = useSelector(state => state.todo);

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
            {!selector.editingTodo ?
                <button
                    onClick={addNewTodo}
                >Agregar</button>
            :
                <button
                    onClick={() => confirmEdit()}
                >Editar</button>
            }
        </div>
    );
}