
export const deleteTodoPost = (todo, token) => {
    var requestOptions = {
        method: 'DELETE',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo),
        redirect: 'follow'
    };

    return fetch(`http://localhost:8000/api/todo/delete/${todo.id}`, requestOptions);
}