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
import { NavLink } from "react-router-dom";

function HomepageNavbar({ handleRecipeSearch, handleSubmit }) {
  return (
    <>
      <Container fluid>
        <Row>
          <Navbar bg="white" expand="sm">
            <Col>
              <Nav.Link>
                <NavLink to="/">
                  <Image
                    src={logo}
                    roundedCircle
                    width="150"
                    height="150"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </NavLink>
              </Nav.Link>
            </Col>
            <Col>
              <Nav>
                <Nav.Link>
                  <NavLink
                    to='/favorites'
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      opacity: 0.8
                    }}
                  >
                    My favorites
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav>
                <Nav.Link>
                  <NavLink
                    to='/recipes'
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      opacity: 0.8
                    }}
                  >
                    All recipes
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav>
                <Nav.Link>
                  <NavLink
                    to='/recipes/breakfast'
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      opacity: 0.8
                    }}
                  >
                    Breakfast
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav>
                <Nav.Link>
                  <NavLink
                    to='/recipes/lunch'
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      opacity: 0.8
                    }}
                  >
                    Lunch
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav>
                <Nav.Link>
                  <NavLink
                    to='/recipes/dinner'
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      opacity: 0.8
                    }}
                  >
                    Dinner
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Col>
            <Col>
              <Nav className="me-auto">
                <Nav.Link>
                  <NavLink
                    to='/worldtour'
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      opacity: 0.8
                    }}
                  >
                    World Tour
                  </NavLink>
                </Nav.Link>
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
              <Button id="search" className="mr-0" onClick={handleSubmit} style={{backgroundColor: 'black'}}>
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
