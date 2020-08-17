import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import g1 from "./img/1.jpg";
import g2 from "./img/2.jpg";
import g3 from "./img/3.jpg";
import g4 from "./img/4.jpg";
import g5 from "./img/5.jpg";
import g6 from "./img/6.jpg";
import g7 from "./img/7.jpg";
import g8 from "./img/8.jpg";

import BackgroudImage from "./img/bg.jpg";

const GalleryComponent = (props) => {
  return (
    <Row
      className="gallery"
      id="Galeria"
      style={{ backgroundImage: `url(${BackgroudImage})` }}
    >
      <Col xs={12} sm={6} md={4} lg={3} thumbnail>
        <img src={g1} class="zoom img-fluid " />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} thumbnail>
        <img src={g2} class="zoom img-fluid " />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} thumbnail>
        <img src={g3} class="zoom img-fluid " />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} thumbnail>
        <img src={g4} class="zoom img-fluid " />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} thumbnail>
        <img src={g5} class="zoom img-fluid " />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} thumbnail>
        <img src={g6} class="zoom img-fluid " />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} thumbnail>
        <img src={g7} class="zoom img-fluid " />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} thumbnail>
        <img src={g8} class="zoom img-fluid " />
      </Col>
    </Row>
  );
};

export default GalleryComponent;
