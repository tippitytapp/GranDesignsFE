import React from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../data/gettingData";
import { useHistory } from "react-router-dom";
function About(props) { 
    const { setData } = props;
    const history = useHistory()
    return (
      <>
        <h1 className="About">
          Sorry for the inconvience, but our site is currently
          underconstruction. Please check back often for more information! In
          the mean time, please click around our site and let us know if there
          is anything we can craft for you!
        </h1>
        <div className="aboutlinks">
          <Link
            to="/"
            onClick={() => {
              setData(fetchData("painting"));
              history.push("/");
            }}
          >
            Hand Paintings
          </Link>
          <Link
            to="/"
            onClick={() => {
              setData(fetchData("rockart"));
              history.push("/");
            }}
          >
            Rock Art
          </Link>
          <Link
            to="/"
            onClick={() => {
              setData(fetchData("decor"));
              history.push("/");
            }}
          >
            Home Decor
          </Link>
            </div>
            <h3>If you are an admin, needing to login, please click <Link to="/admin">here</Link></h3>
      </>
    );
}

export default About;