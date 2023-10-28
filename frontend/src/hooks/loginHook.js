
export const doLogin = (email, password) => {
    var raw = JSON.stringify({
        "username": email,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: raw,
        redirect: 'follow'
    };

    return fetch("http://localhost:8000/auth/login/", requestOptions);
}
