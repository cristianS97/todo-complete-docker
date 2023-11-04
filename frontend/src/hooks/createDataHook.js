
export const createTodoPost = (todo, token) => {
    var requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo),
        redirect: 'follow'
    };

    return fetch('http://localhost:8000/api/todo/create', requestOptions);
}