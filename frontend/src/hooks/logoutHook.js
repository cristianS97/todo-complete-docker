
export const doLogout = (token) => {
    var requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`
        },
        redirect: 'follow'
    };

    return fetch("http://localhost:8000/auth/logout/", requestOptions);
}
