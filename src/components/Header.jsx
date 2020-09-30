import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
import { searchData, fetchData } from "../data/gettingData";


function Header(props) {
  const { setData } = props;
    const [search, setSearch] = useState("")
    const handleChange = (event) => { 
        setSearch(event.target.value)
    }
  return (
    <div className="header">
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/" style={{ fontSize: "3.5rem" }}>
          GranDesigns
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Button color="link" href="/about">About</Button>
          </NavItem>
          <NavItem>
            <Button color="link" onClick={() => setData(fetchData("painting"))}>
              Paintings
            </Button>
          </NavItem>
          <NavItem>
            <Button color="link" onClick={async () => { await setData(fetchData("rockart")) }}>
              Rock Art
            </Button>
          </NavItem>
          <NavItem>
            <Button color="link" onClick={() => setData(fetchData("decor"))}>
              Decor
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
              }}
            >
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Navbar>
    </div>
  );
}

export default Header;
