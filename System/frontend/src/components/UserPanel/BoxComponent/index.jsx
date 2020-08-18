import React from "react";
import "./style.css";
import { Row, Card, Col } from "react-bootstrap";
import BackgroudImage from "./img/2.jpg";
import c1 from "./img/c1.jpg";
import c2 from "./img/c2.jpg";
import c3 from "./img/c3.jpg";
import video from "./img/movie.mp4";

const BoxComponent = (props) => {
  return (
    <Row
      className="d-flex justify-content-around box"
      style={{ backgroundImage: `url(${BackgroudImage})` }}
    >
      <Col md={6} lg={4} id="KimJesteśmy">
        <Card className="h-100 zoom">
          <Card.Img variant="top" src={c1} />
          <Card.Body>
            <Card.Title id="KimJesteśmy" className="box-title">
              Kim jesteśmy?
            </Card.Title>
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
            <div className="embed-responsive embed-responsive-16by9">
              <video width="320" height="240" controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            {/* <Card.Link href="#">Rezerwuj stolik</Card.Link> */}
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={4} id="PracaIKontakt">
        <Card className="h-100 zoom">
          <Card.Img variant="top" src={c2} />
          <Card.Body>
            <Card.Title className="box-title">Kontakt</Card.Title>
            E-mail:{" "}
            <Card.Link href="mailto:biuro.dzwiekujemy@gmail.com">
              biuro.dzwiekujemy@gmail.com
            </Card.Link>
            <br />
            Telefon: <Card.Link href="tel:+48533463599">533 463 599</Card.Link>
            <div>
              <iframe
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fdzwiekujemy%2F&width=114&layout=button&action=like&size=small&share=true&height=65&appId"
                width="180"
                height="65"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="encrypted-media"
                title="Facebook"
              ></iframe>
            </div>
            <Card.Title className="box-title">Praca</Card.Title>
            <Card.Text>Aktualnie nie poszukujemy</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={8} lg={4} id="JakDotrzeć">
        <Card className="h-100 zoom">
          <Card.Img variant="top" src={c3} />
          <Card.Body>
            <Card.Title className="box-title">Jak dotrzeć?</Card.Title>
            <div className="embed-responsive embed-responsive-4by3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9512.701242118324!2d19.5939975!3d53.4116908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6eacb414ef9c8a8f!2sDzwi%C4%99kujemy!5e0!3m2!1spl!2spl!4v1597657410922!5m2!1spl!2spl"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
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
