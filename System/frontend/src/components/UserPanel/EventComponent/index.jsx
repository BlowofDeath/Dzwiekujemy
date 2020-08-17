import React from "react";
import { Button, Col, Card } from "react-bootstrap";
import "./style.css";

const EventComponent = (props) => {
  return (
    <Col lg={4} id="Wydarzenia">
      <h2>Imprezy</h2>
      <Card>
        <Card.Img variant="top" src="css/img/dynamic/1.jpg" />
        <Card.Body>
          <Card.Title>SIEBUJAJTU SOUND SYSTEM (Wojtune/Buli)</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">01.08.2020</Card.Subtitle>
          <Card.Text>
            2-osobowy sound system powstały z połączenia sił sąsiadujących miast
            - Brodnicy i Nowego Miasta Lub, serwujący podróż po wszystkim co z
            Reggae związane. <br />
            <br />
            Po latach znowu wracają do Nowego Miasta, gdzie przez wiele lat
            organizowali imprezy reggae po szyldem: REGGAE SESSION. Przez 12 lat
            swojej działalności, sieją pozytywną wibrację po całej Polsce,
            współpracując z selektorami i sound systemami z całego kraju. W
            sobotę będziecie mogli usłyszeć, klasyki reggae, jak i nowości z
            wielkiej skarbnicy tej muzyki. Przyjdź na sesje z basem w tle:
            słuchaj, poczuj, doświadcz.
          </Card.Text>
          {/* <Card.Link href="#">Rezerwuj stolik</Card.Link> */}
          <Button variant="custom" size="lg" block>
            Rezerwuj stolik
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EventComponent;
