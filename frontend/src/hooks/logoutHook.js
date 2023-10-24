
export const doLogout = (token) => {
    var requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`
        },
        redirect: 'follow'
    };

    fetch("http://localhost:8000/auth/logout", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
