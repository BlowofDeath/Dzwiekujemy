import React from "react";
import "./style.css";

import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/admin">Dźwiękujemy - Admin Panel</Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComponent;
