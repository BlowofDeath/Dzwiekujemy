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

import CarouselImageOne from "./css/img/1.jpg";
import CarouselImageTwo from "./css/img/2.jpg";

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
          {/* <img
            className="d-block w-100"
            src="css/img/2.jpg"
            alt="First slide"
          /> */}
          <div
            class="carousel-item active"
            style={{ backgroundImage: `url(${CarouselImageOne})` }}
          ></div>
          <Carousel.Caption className="d-flex align-items-end justify-content-center">
            <div>
              <h3>Witamy na naszej stronie</h3>
              <p>
                Możesz tu złożyć zamówienie na nasze pyszności, z dowozem do
                domu.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            class="carousel-item active"
            style={{ backgroundImage: `url(${CarouselImageTwo})` }}
          ></div>
          {/* <img
            className="d-block w-100"
            src="css/img/baner.jpg"
            alt="First slide"
          /> */}
          <Carousel.Caption className="d-flex align-items-end justify-content-center">
            <div>
              <h3>Zaloguj się aby złożyć zamówienie!</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container fluid>
        <Row className="middle-row">
          <Col md={4}>
            <h2 id="Imprezy">Imprezy</h2>
            <Card>
              <Card.Img variant="top" src="css/img/dynamic/1.jpg" />
              <Card.Body>
                <Card.Title>SIEBUJAJTU SOUND SYSTEM (Wojtune/Buli)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  01.08.2020
                </Card.Subtitle>
                <Card.Text>
                  2-osobowy sound system powstały z połączenia sił sąsiadujących
                  miast - Brodnicy i Nowego Miasta Lub, serwujący podróż po
                  wszystkim co z Reggae związane. <br />
                  <br />
                  Po latach znowu wracają do Nowego Miasta, gdzie przez wiele
                  lat organizowali imprezy reggae po szyldem: REGGAE SESSION.
                  Przez 12 lat swojej działalności, sieją pozytywną wibrację po
                  całej Polsce, współpracując z selektorami i sound systemami z
                  całego kraju. W sobotę będziecie mogli usłyszeć, klasyki
                  reggae, jak i nowości z wielkiej skarbnicy tej muzyki. Przyjdź
                  na sesje z basem w tle: słuchaj, poczuj, doświadcz.
                </Card.Text>
                {/* <Card.Link href="#">Rezerwuj stolik</Card.Link> */}
                <Button variant="custom" size="lg" block>
                  Rezerwuj stolik
                </Button>
              </Card.Body>
            </Card>
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
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col className="footer text-center">
            Copyright &copy; Tomasz Jabłoński <br />
            tjablonski@codeinq.pl
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
