
export const Header = ({setLogout}) => {
    return (
        <div
            className="app-title"
        >
            <h2>To-do app</h2>
            <h5
                style={{'cursor': 'pointer'}}
                onClick={() => setLogout(true)}
            >Cerrar sesión</h5>
        </div>
    );
}
