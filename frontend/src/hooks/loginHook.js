
export const doLogin = (email, password, setToken) => {
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

    fetch("http://localhost:8000/auth/login/", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(JSON.parse(result)['token']);
            setToken(JSON.parse(result)['token']);
        })
        .catch(error => console.log('error', error));
}
