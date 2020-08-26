import React from "react";
import "./style.css";

import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import orders from "./orders.json";

const OrdersComponent = (props) => {
  const generateOrderList = () => {
    return orders.map((order, index) => {
      return <div></div>;
    });
  };
  const acceptOrder = (order) => {
    window.confirm("Czy na pewno chcesz przyjąć zamówienie?");
    console.log("Zaakceptowane");
  };

  const discardOrder = (order) => {
    if (window.confirm("Czy na pewno chcesz odrzucić zamówienie?"))
      window.prompt(
        "Podaj powód odrzucenia zamówienia, który zostanie przekazany klientowi."
      );
    console.log("Odrzucono zamówienie");
  };
  return (
    <Col lg={7}>
      <h2>Zamówienia</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Dane kontaktowe</th>
            <th>Typ zamówienia</th>
            <th>Dania</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="order-control">
              <Button block variant="success" onClick={() => acceptOrder(1)}>
                Przyjmij
              </Button>
              <br />
              <Button block variant="danger" onClick={() => discardOrder(1)}>
                Odrzuć
              </Button>
            </td>
            <td>
              test@gmail.com <br /> 660013678 <br /> Kurzętnik <br />{" "}
              Jagielońska 34/4
            </td>
            <td>
              Płatność online, przelewy 24 <br />
              Dowóz
            </td>
            <td>
              2x Burger wołowy <br /> 1x Zupa krupnik
            </td>
            <td>87.9 zł</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default OrdersComponent;
