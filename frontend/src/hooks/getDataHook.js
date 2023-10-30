
export const getData = (token) => {
    var requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`
        },
        redirect: 'follow'
    };

    return fetch("http://localhost:8000/api/todos", requestOptions);
}
