import React, { useState } from "react";
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

import { fakedata } from "./data/fakedata";
import { Col, Spinner } from "reactstrap";
import { Route } from "react-router-dom";
function App() {
  const [data, setData] = useState(fakedata);
  return (
    <div className="App">
      <Header setData={setData} />
      <Route exact path="/">
        <div className="allpros">
          {data ? (
            data.map((product) => {
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
        <About setData={setData} />
      </Route>
      <SecureAdminRoute exact path="/admin" component={AdminDashboard} />
      <SecureUserRoute exact path="/dashboard" component={UserDashboard} />
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Footer setData={setData} />
    </div>
  );
}

export default App;
