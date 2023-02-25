import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import logo from "../ricologo.jpg";

function HomepageNavbar({ handleRecipeSearch, handleSubmit }) {
  return (
    <>
      <Container fluid>
        <Row>
          <Navbar bg="white" expand="sm">
            <Col>
              <Nav.Link href="/">
                <Image
                  src={logo}
                  roundedCircle
                  width="150"
                  height="150"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Nav.Link>
            </Col>
            <Col>
              <Nav>
                <Nav.Link href="/recipes">All recipes</Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav>
                <Nav.Link href="/recipes/breakfast">Breakfast</Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav>
                <Nav.Link href="/recipes/lunch">Lunch</Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav>
                <Nav.Link href="/recipes/dinner">Dinner</Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav className="me-auto">
                <Nav.Link href="/worldtour">World Tour</Nav.Link>
              </Nav>
            </Col>
            <Col xs={4}>
              <InputGroup>
                <FormControl
                  // value={search}
                  aria-label="Search recipes"
                  placeholder="Search recipes"
                  // aria-describedby='search'
                  onChange={handleRecipeSearch}
                />
              </InputGroup>
            </Col>
            <Col xs={2}>
              <Button id="search" className="mr-0" onClick={handleSubmit}>
                Search
              </Button>
            </Col>
          </Navbar>
        </Row>
      </Container>
    </>
  );
}

export default HomepageNavbar;
