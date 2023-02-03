import React from "react";
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { InputGroup, FormControl }  from "react-bootstrap";
import Image from 'react-bootstrap/Image'

function HomepageNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Rico</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="Recipes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Breakfast
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Lunch</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Dinner</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="Ingredients" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Eggs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Chicken</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Beef</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="World Tour" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Italy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">France</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mexico</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <InputGroup>
            <FormControl
              // value={search}
              // aria-label='search'
              // aria-describedby='search'
              // onChange={(e) => setSearch(e.target.value)}
            />
            <InputGroup.Text id='search' className="mr-0">Search</InputGroup.Text>
          </InputGroup>
      </Navbar>
      <Image src='https://harthouse.ca/assets/images/uploads/events/_lg-max/hh_events_tastes_of_culture_2021_22.png'></Image>
    </>
  );
}

export default HomepageNavbar;
