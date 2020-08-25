import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

import CartImg from "./img/cart.svg";

const NavbarComponent = (props) => {
  const { setCartModalShow, setLoginModalShow, setRegisterModalShow } = props;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">Dźwiękujemy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/#KimJesteśmy">Kim jesteśmy?</Nav.Link>
          <Nav.Link href="/#Wydarzenia">Wydarzenia</Nav.Link>
          <Nav.Link href="/#Menu">Menu</Nav.Link>
          <Nav.Link href="/#PracaIKontakt">Kontakt i Praca</Nav.Link>
          <Nav.Link href="/#JakDotrzeć">Jak dotrzeć?</Nav.Link>
          <Nav.Link href="/#Galeria">Galeria</Nav.Link>
        </Nav>
        {/* <Nav className="mr-right">
          <Nav.Link href="#account">test@gmail.com</Nav.Link>
          <Nav.Link href="#logout">Wyloguj</Nav.Link>
        </Nav> */}
        <Nav.Link href="" onClick={() => setCartModalShow(true)}>
          <img
            src={CartImg}
            className="cart"
            alt="Ikona koszka"
            height="25"
            width="25"
          />
        </Nav.Link>
        <Nav className="mr-right">
          <Nav.Link href="/#login" onClick={() => setLoginModalShow(true)}>
            Zaloguj
          </Nav.Link>
          <Nav.Link
            href="/#register"
            onClick={() => setRegisterModalShow(true)}
          >
            Zarejestruj
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
