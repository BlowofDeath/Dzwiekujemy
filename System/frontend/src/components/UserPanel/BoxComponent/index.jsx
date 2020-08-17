import React from "react";
import "./style.css";
import { Row, Card, Button, Col } from "react-bootstrap";
import BackgroudImage from "./img/2.jpg";
import c1 from "./img/c1.jpg";
import c2 from "./img/c2.jpg";
import c3 from "./img/c3.jpg";

const BoxComponent = (props) => {
  return (
    <Row
      className="d-flex justify-content-around box"
      style={{ backgroundImage: `url(${BackgroudImage})` }}
    >
      <Col md={6} lg={4} id="KimJesteśmy">
        <Card className="h-100">
          <Card.Img variant="top" src={c1} />
          <Card.Body>
            <Card.Title id="KimJesteśmy">Kim jesteśmy?</Card.Title>
            <Card.Text>
              Restauracja Dźwiękujemy jest ciekawym punktem na mapie naszego
              województwa, który łączy pyszną kuchnię i wydarzenia artystyczne.{" "}
              <br />
              <br />W naszej restauracji codziennie serwowane będą inne dania
              kuchni polskiej ze świeżych i lokalnych produktów. W weekendy
              natomiast nasz lokal zamienia się w miejsce, w którym można zjeść
              pyszną pajdę z wątróbką lub soczyste żeberka w sosie barbecue,
              napić się dobrego piwa i posłuchać muzyki na żywo.
            </Card.Text>
            {/* <Card.Link href="#">Rezerwuj stolik</Card.Link> */}
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={4} id="PracaIKontakt">
        <Card className="h-100">
          <Card.Img variant="top" src={c2} />
          <Card.Body>
            <Card.Title>Praca i Kontakt</Card.Title>
            <Card.Link href="mailto:biuro.dzwiekujemy@gmail.com">
              E-mail: biuro.dzwiekujemy@gmail.com
            </Card.Link>
            <br />
            <Card.Link href="tel:+48533463599">Telefon: 533 463 599</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md={8} lg={4} id="JakDotrzeć">
        <Card className="h-100">
          <Card.Img variant="top" src={c3} />
          <Card.Body>
            <Card.Title>Jak dojechać?</Card.Title>
            <div class="embed-responsive embed-responsive-4by3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9512.701242118324!2d19.5939975!3d53.4116908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6eacb414ef9c8a8f!2sDzwi%C4%99kujemy!5e0!3m2!1spl!2spl!4v1597657410922!5m2!1spl!2spl"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                title="Jak dojechać?"
              ></iframe>
            </div>
            {/* <Card.Link href="#">Rezerwuj stolik</Card.Link> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default BoxComponent;
