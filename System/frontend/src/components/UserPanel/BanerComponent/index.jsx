import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";

import CarouselImageOne from "./img/1.jpg";
import CarouselImageTwo from "./img/2.jpg";

const BanerComponent = () => {
  return (
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
      <Carousel.Item style={{ backgroundImage: `url(${CarouselImageOne})` }}>
        <Carousel.Caption className="d-flex align-items-end justify-content-center">
          <div>
            <h3>Witamy na naszej stronie</h3>
            <p>
              Możesz tu złożyć zamówienie na nasze pyszności, z dowozem do domu.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: `url(${CarouselImageTwo})` }}>
        <Carousel.Caption className="d-flex align-items-end justify-content-center">
          <div>
            <h3>Zaloguj się aby złożyć zamówienie!</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BanerComponent;
