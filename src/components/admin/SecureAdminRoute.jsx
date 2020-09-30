import React from "react";
import { Route, Redirect } from "react-router-dom";

const SecureAdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => { 
            if (localStorage.getItem("adminToken")) {
                return <Component {...props} />
            } else { 
                return <Redirect to="/adminlogin" />
            }
        }}
        />
    )
}
 
export default SecureAdminRoute;