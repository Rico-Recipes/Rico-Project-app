import React from "react";
import { Container, NavDropdown, Nav, Navbar, Row, Col, Image, Button } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import logo from "../assets/images/ricologo.jpg"

function HomepageNavbar({ handleRecipeSearch, handleSubmit }) {
  return (
    <>
      <Container fluid >
        <Row >

          <Navbar bg="light" expand="lg" >
          <Col>
            <Image 
              src={logo}
              roundedCircle
              width="150"
              height="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo">
           </Image>
            </Col>
            {/* <Col>
              <Navbar.Brand href="#home">Rico</Navbar.Brand>
            </Col> */}
            <Col >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
                <NavDropdown  title="Recipes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/recipes/breakfast">
                    Breakfast
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/recipes/lunch">Lunch</NavDropdown.Item>
                  <NavDropdown.Item href="/recipes/dinner">Dinner</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Col>
            <Col>
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
            </Col>
            <Col>
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
            </Col>
            <Col xs={4}>
            <InputGroup>
              <FormControl
              // value={search}
                aria-label='Search recipes'
                placeholder='Search recipes'
              // aria-describedby='search'
                onChange={handleRecipeSearch}
              />
              
            </InputGroup>
            </Col>
            <Col xs={2}>
              <Button id='search' className="mr-0" onClick={handleSubmit}>Search</Button>
            </Col>
            
          </Navbar>

        </Row>
      </Container>
    </>
  );
}

export default HomepageNavbar;
