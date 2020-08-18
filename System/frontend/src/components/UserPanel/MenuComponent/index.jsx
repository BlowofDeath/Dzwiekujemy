import React from "react";
import { Container, Carousel, Col, Table } from "react-bootstrap";
import "./style.css";
import menu from "./menu.json";
import moment from "moment";
import { ReactComponent as CartPlus } from "./img/cartplus.svg";

const category = ["Dania główne", "Zupy", "Zestaw Lunchowy"];

const MenuComponent = (props) => {
  const today = () => {
    const date = moment();
    return date.day();
  };

  const generateMenu = (day) => {
    const thisDay = today();
    const Thead = (props) => {
      return (
        <thead>
          <tr>
            <th>Potrawa</th>
            <th>Cena</th>
            <th></th>
          </tr>
        </thead>
      );
    };
    const dayMenu = category.map((cat, catIndex) => {
      return (
        <React.Fragment key={catIndex}>
          <h4 className="dish-category">{cat}</h4>
          <Table className="menu">
            <Thead />
            <tbody>
              {menu.map((menuItem, index) => {
                if (menuItem.category === cat && menuItem.dayOfWeek === day) {
                  let cartDisplay =
                    thisDay === menuItem.dayOfWeek ? null : "d-none";
                  return (
                    <tr key={index}>
                      <td>
                        {menuItem.dish} <br />
                        <i>{menuItem.description}</i>
                      </td>
                      <td>{menuItem.price} zł</td>
                      <td>
                        <a
                          className={`add-to-cart ${cartDisplay}`}
                          href="#home"
                        >
                          <CartPlus className="d-inline d-sm-none " />
                          <span className="d-none d-sm-inline">
                            Dodaj do koszyka
                          </span>
                        </a>
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </Table>
        </React.Fragment>
      );
    });

    return dayMenu;
  };

  return (
    <Col lg={{ cols: 8, order: "last" }} id="Menu">
      <h2>Menu</h2>
      <Container fluid>
        <Carousel
          interval={null}
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon d-md-inline-block"
            />
          }
          nextIcon={
            <span
              aria-hidden="true"
              className="carousel-control-next-icon d-md-inline-block"
            />
          }
          className="carousel-menu"
          defaultActiveIndex={today() - 1}
        >
          <Carousel.Item className="h-100 menu">
            <h3>Poniedziałek</h3>
            {generateMenu(1)}
          </Carousel.Item>
          <Carousel.Item className="h-100 menu">
            <h3>Wtorek</h3>
            {generateMenu(2)}
          </Carousel.Item>
          <Carousel.Item className="h-100 menu">
            <h3>Środa</h3>
            {generateMenu(3)}
          </Carousel.Item>
          <Carousel.Item className="h-100 menu">
            <h3>Czwartek</h3>
            {generateMenu(4)}
          </Carousel.Item>
          <Carousel.Item className="h-100 menu">
            <h3>Piątek</h3>
            {generateMenu(5)}
          </Carousel.Item>
          <Carousel.Item className="h-100 menu">
            <h3>Sobota</h3>
            {generateMenu(6)}
          </Carousel.Item>
          <Carousel.Item className="h-100 menu">
            <h3>Niedziela</h3>
            {generateMenu(7)}
          </Carousel.Item>
        </Carousel>
      </Container>
    </Col>
  );
};

export default MenuComponent;
