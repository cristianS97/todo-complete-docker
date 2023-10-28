import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doLogin } from '../hooks/loginHook';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(login && email !== '' && password !== '')
        {
            doLogin(email, password, setToken);
        } else {
            setLogin(false);
            setToken('');
        }
    }, [login, email, password]);

    useEffect(() => {
        if(login && token !== '') {
            navigate('/')
        }
    }, [login, token, navigate]);

    const makeLogin = (e) => {
        e.preventDefault();
        setLogin(!login);
    }

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="container">
                    <div className="left"></div>
                    <div className="right">
                        <h1 className="title">Login {login ? 'Si' : 'No'}</h1>
                        <div className="formBox">
                            <form action="">
                                <p>Usuario</p>
                                <input type="text" name="" placeholder="Usuario" onChange={e => setEmail(e.target.value)} />
                                <p>Contraseña</p>
                                <input type="password" name="" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                                <input type="submit" value="Ingresar" onClick={makeLogin} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}