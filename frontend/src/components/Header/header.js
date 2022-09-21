import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">XYZ Institution</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Get Started" id="basic-nav-dropdown">
              <NavDropdown.Item href="StudentSignup">Signup</NavDropdown.Item>
              <NavDropdown.Item href="Login">Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header;
