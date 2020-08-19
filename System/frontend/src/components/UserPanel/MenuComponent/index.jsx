import React from "react";
import { Container, Carousel, Col, Table, Button } from "react-bootstrap";
import "./style.css";
import menu from "./menu.json";
import moment from "moment";
import { ReactComponent as CartPlus } from "./img/cartplus.svg";

const days = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];
const category = ["Dania główne", "Zupy", "Zestaw Lunchowy"];

const MenuComponent = (props) => {
  const { addToCart } = props;
  const today = () => {
    const date = moment();
    return date.day();
  };

  const generateDayMenu = (day) => {
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
            <tbody className="menu">
              {menu.map((menuItem, index) => {
                if (menuItem.category === cat && menuItem.dayOfWeek === day) {
                  let cartDisplay =
                    thisDay === menuItem.dayOfWeek ? "" : "d-none";
                  return (
                    <tr key={index}>
                      <td>
                        {menuItem.dish} <br />
                        <i>{menuItem.description}</i>
                      </td>
                      <td>{menuItem.price} zł</td>
                      <td>
                        <Button
                          variant="add-to-cart"
                          className={`${cartDisplay}`}
                          onClick={() => {
                            addToCart(menuItem);
                            alert("Dodano do koszyka");
                          }}
                        >
                          <CartPlus className="d-inline d-sm-none " />
                          <span className="d-none d-sm-inline">
                            Dodaj do koszyka
                          </span>
                        </Button>
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

  const generateMenu = () => {
    return days.map((day, index) => {
      return (
        <Carousel.Item className="h-100 menu" key={index}>
          <h3>{day}</h3>
          {generateDayMenu(index + 1)}
        </Carousel.Item>
      );
    });
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
          {generateMenu()}
        </Carousel>
      </Container>
    </Col>
  );
};

export default MenuComponent;
