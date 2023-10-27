
export const Login = () => {
    return (
        <div className="loginContainer">
            <div className="container">
                <div className="left"></div>
                <div className="right">
                    <h1 className="title">Login</h1>
                    <div className="formBox">
                        <form action="">
                            <p>Usuario</p>
                            <input type="text" name="" placeholder="Usuario" />
                            <p>Contraseña</p>
                            <input type="password" name="" placeholder="Contraseña" />
                            <input type="submit" value="Ingresar" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}