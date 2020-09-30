import React from "react";
import { Nav, NavItem, NavLink, Navbar, NavbarText, Button } from "reactstrap";
import { searchData, fetchData } from "../data/gettingData";
import { useHistory } from "react-router-dom"

function Footer(props) { 
  const { setData } = props;
  const history = useHistory();
    return (
      <div className="footer">
        <Navbar color="dark" dark expand="md">
          <NavbarText>&copy;2020 GranDesigns</NavbarText>
          <Nav className="ml-auto" navbar>
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
                onClick={() => { setData(fetchData("painting")); history.push("/")}}
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
                  history.push("/")
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
                  history.push("/")
                }}
              >
                <NavLink>Decor</NavLink>
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="link"
                className="btnhover"
                style={{ color: "#FFFFFF80" }}
                href="/admin"
              >
                <NavLink>Admin</NavLink>
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
}

export default Footer;