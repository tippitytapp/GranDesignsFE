import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

function Header() {
    const [search, setSearch] = useState("")
    const handleChange = (event) => { 
        setSearch(event.target.value)
    }
  return (
    <div className="header">
      <Navbar color="dark" dark expand="lg">
              <NavbarBrand href="/" style={{fontSize:'3.5rem'}}>GranDesigns</NavbarBrand>
        <Nav className="mr-auto" navbar>
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
        </Nav>
        <InputGroup style={{ width: "30vw" }}>
            <Input id="search" name="search" value={search} placeholder="Search" onChange={handleChange}/>
          <InputGroupAddon addonType="append">
             <Button color="secondary" onClick={() => { console.log(search); setSearch("")}}>Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </Navbar>
    </div>
  );
}

export default Header;
