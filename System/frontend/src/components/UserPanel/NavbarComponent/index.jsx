import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Dźwiękujemy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Imprezy">Imprezy</Nav.Link>
          <Nav.Link href="#Menu">Menu</Nav.Link>
        </Nav>
        <Nav className="mr-right">
          <Nav.Link href="#account">test@gmail.com</Nav.Link>
          <Nav.Link href="#logout">Wyloguj</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
