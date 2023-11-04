
export const updateData = (todo, token) => {
    var requestOptions = {
        method: 'PUT',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo),
        redirect: 'follow'
    };

    return fetch(`http://localhost:8000/api/todo/update/${todo.id}`, requestOptions);
}