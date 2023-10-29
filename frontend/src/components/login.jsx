import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from "../redux/actions/todo";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    useEffect(() => {
        if(login && email !== '' && password !== '')
        {
            document.getElementsByTagName('body')[0].classList.remove('loginBody');
            dispatch(startLogin(email, password));
        } else {
            setLogin(false);
            document.getElementsByTagName('body')[0].classList.add('loginBody');
        }
    }, [login, email, password, dispatch]);

    useEffect(() => {
        if(login && selector.todo.token !== '') {
            navigate('/')
        }
    }, [login, selector.todo.token, navigate]);

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