import React from "react";
import { Link } from "react-router-dom";
function Logout() { 
    return (
      <div>
        <h1>Thank you for visiting us!</h1>
        <h3>
          Click <Link to="/login">here</Link> to log in again
        </h3>
      </div>
    );
}

export default Logout;