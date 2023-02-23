import React from "react";
import { Container, NavDropdown, Nav, Navbar, Row, Col, Image, Button } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import logo from "../ricologo.jpg"

function HomepageNavbar({ handleRecipeSearch, handleSubmit }) {
  return (
    <>
      <Container fluid >
        <Row>
          <Navbar bg="white" expand="sm"  >
          <Col >
            <Image 
              src={logo}
              roundedCircle
              width="150"
              height="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo">
            </Image>
            </Col>
            <Col >
            <Nav className="me-auto">
                <Nav.Link href="/recipes/breakfast">Breakfast</Nav.Link>
                <Nav.Link href="/recipes/lunch">Lunch</Nav.Link>
                <Nav.Link href="/recipes/dinner">Dinner</Nav.Link>
            </Nav>
            </Col>
            <Col>
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
              <Nav className="me-auto">
                <Nav.Link href="/worldtour">World Tour</Nav.Link>
              </Nav>
            {/* </Navbar.Collapse> */}
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
