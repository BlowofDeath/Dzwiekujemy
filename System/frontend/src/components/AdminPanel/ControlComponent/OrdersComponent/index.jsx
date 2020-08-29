import React from "react";
import "./style.css";

import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import orders from "./orders.json";

import { ORDERS } from "./gql/gqlQueries";
import { useQuery } from "@apollo/client";

const payment = [
  "Płatność online, przelewy 24",
  "Płatność kartą, przy odbiorze",
  "Płatność gotówką przy odbiorze",
];

const pickup = ["Dowóz", "Osobity"];

const OrdersComponent = (props) => {
  const {
    loading: loadingOrders,
    error: errorOrders,
    data: dataOrders,
  } = useQuery(ORDERS);

  const generateOrderList = () => {
    return dataOrders.orders.map((order, index) => {
      return (
        <tr>
          <td className="order-control">
            <Button
              block
              variant="success"
              onClick={() => acceptOrder(order.id)}
            >
              Przyjmij
            </Button>
            <br />
            <Button
              block
              variant="danger"
              onClick={() => discardOrder(order.id)}
            >
              Odrzuć
            </Button>
          </td>
          <td>
            {order.email} <br /> {order.phone} <br /> {order.city} <br />{" "}
            {order.street}
            {""}
            {order.houseNumber}
          </td>
          <td>
            {payment[order.payment]} <br />
            {pickup[order.pickup]}
          </td>
          <td>
            {order.details.map((detail, index) => {
              return (
                <>
                  {detail.quanity}x {detail.dish}
                  <br />
                </>
              );
            })}
          </td>
          <td>{order.summaryPrice / 100} zł</td>
          <td>{order.comment}</td>
        </tr>
      );
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

  if (loadingOrders || errorOrders) return null;
  return (
    <Col lg={8}>
      <h2>Zamówienia</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Dane kontaktowe</th>
            <th>Typ zamówienia</th>
            <th>Dania</th>
            <th>Cena</th>
            <th>Uwagi</th>
          </tr>
        </thead>
        <tbody>{generateOrderList()}</tbody>
      </Table>
    </Col>
  );
};

export default OrdersComponent;
