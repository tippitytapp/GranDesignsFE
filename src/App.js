import React, { useState } from 'react';
import './App.css';
// DEPENDENCY IMPORTS
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductCard from "./components/ProuductCard"
import { fakedata } from './data/fakedata';
import { Col, Spinner } from "reactstrap"
function App() {
  const [data, setData] = useState(fakedata)
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
