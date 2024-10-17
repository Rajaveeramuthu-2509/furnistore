import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { PersonFill, Cart } from "react-bootstrap-icons";

export default function Header() {
  return (
    <Navbar bg="Success" variant="dark" expand="lg">
      <Container>
        <h1>hii</h1>
        <h2>hello</h2>
        <Navbar.Brand href="#home" className="text-white fs-2">Furni.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-warning">
              Home
            </Nav.Link>
            <Nav.Link href="#shop" className="text-white">
              Shop
            </Nav.Link>
            <Nav.Link href="#about" className="text-white">
              About us
            </Nav.Link>
            <Nav.Link href="#services" className="text-white">
              Services
            </Nav.Link>
            <Nav.Link href="#blog" className="text-white">
              Blog
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white">
              Contact us
            </Nav.Link>
          </Nav>
          <Nav className="ms-3">
            <Nav.Link href="#account" className="text-white">
              <PersonFill size={20} />
            </Nav.Link>
            <Nav.Link href="#cart" className="text-white">
              <Cart size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
