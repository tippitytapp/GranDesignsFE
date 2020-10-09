import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ProductCard from "./components/ProuductCard";
import Footer from "./components/Footer";
import SecureAdminRoute from "./components/admin/SecureAdminRoute";
import AdminDashboard from "./components/admin/AdminDashboard";
import SecureUserRoute from "./components/user/SecureUserRoute";
import UserDashboard from "./components/user/UserDashboard";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import AdminLogin from "./components/admin/AdminLogin";
import { axiosWithAuth} from "./utils/axiosWithAuth"
import { connect } from "react-redux"
import { getArt } from "./store/actions/artActions"
// import { fakedata } from "./data/fakedata";
import { Col, Spinner } from "reactstrap";
import { Route } from "react-router-dom";
function App(props) {
  useEffect(() => props.getArt() ,[props.art.length])
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <div className="allpros">
          {props.art ? (
            props.art.map((product) => {
              return (
                <Col key={Math.random()} sm="2" md="3" lg="4">
                  <ProductCard product={product} />
                </Col>
              );
            })
          ) : (
            <div className="nodata">
              {" "}
              <Spinner
                type="grow"
                color="warning"
                style={{ width: "4rem", height: "4rem" }}
              />
              <Spinner
                type="grow"
                color="info"
                style={{ width: "4rem", height: "4rem" }}
              />
              <br /> <p style={{ fontSize: "4rem" }}>Loading...</p>
            </div>
          )}
        </div>
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <SecureAdminRoute exact path="/admin" component={AdminDashboard} />
      <SecureUserRoute exact path="/dashboard" component={UserDashboard} />
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/adminlogin"><AdminLogin /></Route>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    art: state.art.art,
    isLoading: state.art.isLoading,
    isError: state.art.isError
  }
}
export default connect(mapStateToProps, {getArt}) (App);
