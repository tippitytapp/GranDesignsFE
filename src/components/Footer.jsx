import React from "react";
import { Nav, NavItem, NavLink, Navbar, NavbarText } from "reactstrap";

function Footer() { 
    return (
      <div className="footer">
        <Navbar color="dark" dark expand="md">
          <NavbarText>&copy;2020 GranDesigns</NavbarText>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/paintings">Paintings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/rocks">Rock Art</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/decor">Decor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin">Admin</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
}

export default Footer;