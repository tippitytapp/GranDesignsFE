import React from "react";
import { Nav, NavItem, NavLink, Navbar, NavbarText, Button } from "reactstrap";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterArt } from "../store/actions/artActions";

function Footer(props) { 

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
                onClick={() => { props.filterArt("painting"); history.push("/")}}
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
                  props.filterArt("rockart");
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
                  props.filterArt("decor");
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

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.ur.isLoggedIn,
    userLogginErrorMessage: state.ur.isLogginErrorMessage,
    cart: state.ur.cart,
    liked: state.ur.liked,
    art: state.art.art,
  };
};

export default connect(mapStateToProps, { filterArt })(Footer);
