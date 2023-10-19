import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return;
    }

    if(user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"/>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;