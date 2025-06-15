import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <span className="loading loading-spinner text-3xl text-primary"></span>
    }

    if (user) {
        return children
    }

    return <Navigate to={"/login"} state={location.pathname}></Navigate>
};

export default PrivateRoute;