import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import LoginComponent from "./../LoginComponent";
import RegisterComponent from "./../RegisterComponent";

const NavbarComponent = () => {
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const [registerModalShow, setRegisterModalShow] = React.useState(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="#home">Dźwiękujemy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#KimJesteśmy">Kim jesteśmy?</Nav.Link>
            <Nav.Link href="#Wydarzenia">Wydarzenia</Nav.Link>
            <Nav.Link href="#Menu">Menu</Nav.Link>
            <Nav.Link href="#PracaIKontakt">Kontakt i Praca</Nav.Link>
            <Nav.Link href="#JakDotrzeć">Jak dotrzeć?</Nav.Link>
            <Nav.Link href="#Galeria">Galeria</Nav.Link>
          </Nav>
          {/* <Nav className="mr-right">
          <Nav.Link href="#account">test@gmail.com</Nav.Link>
          <Nav.Link href="#logout">Wyloguj</Nav.Link>
        </Nav> */}
          <Nav className="mr-right">
            <Nav.Link href="#login" onClick={() => setLoginModalShow(true)}>
              Zaloguj
            </Nav.Link>
            <Nav.Link
              href="#register"
              onClick={() => setRegisterModalShow(true)}
            >
              Zarejestruj
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginComponent
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
      <RegisterComponent
        show={registerModalShow}
        onHide={() => setRegisterModalShow(false)}
      />
    </>
  );
};

export default NavbarComponent;
