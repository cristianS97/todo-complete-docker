
export const getData = (token, setData) => {
    var requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`
        },
        redirect: 'follow'
    };

    fetch("http://localhost:8000/api/todos", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
        .finally(() => setData(false));
}
