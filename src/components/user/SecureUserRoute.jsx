import React from "react";
import { Route, Redirect } from "react-router-dom";

const SecureUserRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => { 
            if (localStorage.getItem("userToken")) {
                return <Component {...props} />
            } else { 
                return <Redirect to="/login" />
            }
        }}
        />
    )
}
 
export default SecureUserRoute;