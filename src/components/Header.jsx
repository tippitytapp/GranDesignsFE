import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
import { searchData, fetchData } from "../data/gettingData";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";


function Header(props) {
  const { setData } = props;
    const history = useHistory();
    const [search, setSearch] = useState("")
    const handleChange = (event) => { 
        setSearch(event.target.value)
  }
  const logout = () => { 
    localStorage.removeItem("userToken");
    history.push('/logout')
  }

  return (
    <div className="header">
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/" style={{ fontSize: "3.5rem" }}>
          GranDesigns
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Button
              color="link"
              className="btnhover"
              style={{ color: "#FFFFFF80" }}
              href="/about"
            >
              <NavLink>About</NavLink>
            </Button>
          </NavItem>
          <NavItem>
            <Button
              color="link"
              className="btnhover"
              style={{ color: "#FFFFFF80" }}
              onClick={() => {
                setData(fetchData("painting"));
                history.push("/");
              }}
            >
              <NavLink>Paintings</NavLink>
            </Button>
          </NavItem>
          <NavItem>
            <Button
              color="link"
              className="btnhover"
              style={{ color: "#FFFFFF80" }}
              onClick={() => {
                setData(fetchData("rockart"));
                history.push("/");
              }}
            >
              <NavLink>Rock Art</NavLink>
            </Button>
          </NavItem>
          <NavItem>
            <Button
              color="link"
              className="btnhover"
              style={{ color: "#FFFFFF80" }}
              onClick={() => {
                setData(fetchData("decor"));
                history.push("/");
              }}
            >
              <NavLink>Decor</NavLink>
            </Button>
          </NavItem>
        </Nav>
        <InputGroup style={{ width: "30vw" }}>
          <Input
            id="search"
            name="search"
            value={search}
            placeholder="Search"
            onChange={handleChange}
          />
          <InputGroupAddon addonType="append">
            <Button
              color="secondary"
              onClick={() => {
                setData(searchData(search));
                setSearch("");
                history.push("/");
              }}
            >
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
        {!localStorage.getItem("userToken") ? (
          <div className="links">
            <Link to="/login">
              <i class="fas fa-sign-in-alt"></i>
            </Link>{" "}
          </div>
        ) : (
          <div className="links">
            <Link to="/logout">
              <i class="fas fa-sign-out-alt"></i>
            </Link>
            &nbsp;
            {/* <Link to="/cart"> */}
              <i class="fas fa-shopping-cart" onClick={logout}></i>
            {/* </Link> */}
          </div>
        )}
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => { 
  return {
    userLoggedIn: state.ur.isLoggedIn,
    userLogginErrorMessage: state.ur.isLogginErrorMessage,
    cart: state.ur.cart,
    liked: state.ur.liked
  }
}

export default connect(mapStateToProps, {} )(Header);
