import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Carousel,
  Row,
  Col,
  Card,
  Table,
} from "react-bootstrap";

import Scrollspy from "react-scrollspy";

function App() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        sticky="top"
      >
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
      <Carousel
        prevIcon={
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon d-none d-md-inline-block"
          />
        }
        nextIcon={
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon d-none d-md-inline-block"
          />
        }
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="css/img/2.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="d-none d-sm-inline-block">
            <h3>Witamy na naszej stronie</h3>
            <p>
              Możesz tu złożyć zamówienie na nasze pyszności, z dowozem do domu.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="css/img/baner.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="d-none d-sm-inline-block">
            <h3>Zaloguj się aby złożyć zamówienie!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container fluid>
        <Row className="middle-row">
          <Col md={4}>
            <h2 id="Imprezy">Imprezy</h2>
          </Col>
          <Col md={8}>
            <h2 id="Menu">Menu</h2>
            <Table hover className="menu">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Potrawa</th>
                  <th>Cena</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Schabowy z ziemniakami <br />
                    <i>Do tego surówka z marchwi</i>
                  </td>
                  <td>18 zł</td>
                  <td>Dodaj do koszyka</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Barscz ukraiński</td>
                  <td>10zł</td>
                  <td>Dodaj do koszyka</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Burger wołowy</td>
                  <td>16 zł</td>
                  <td>Dodaj do koszyka</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    Schabowy z ziemniakami <br />
                    <i>Do tego surówka z marchwi</i>
                  </td>
                  <td>18 zł</td>
                  <td>Dodaj do koszyka</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Barscz ukraiński</td>
                  <td>10zł</td>
                  <td>Dodaj do koszyka</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Burger wołowy</td>
                  <td>16 zł</td>
                  <td>Dodaj do koszyka</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    Schabowy z ziemniakami <br />
                    <i>Do tego surówka z marchwi</i>
                  </td>
                  <td>18 zł</td>
                  <td>Dodaj do koszyka</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Barscz ukraiński</td>
                  <td>10zł</td>
                  <td>Dodaj do koszyka</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Burger wołowy</td>
                  <td>16 zł</td>
                  <td>Dodaj do koszyka</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
