import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export const PrivateRoute = ({children}) => {
    const selector = useSelector(state => state.todo);

    return selector.token ? children : <Navigate to='/login' />;
}
