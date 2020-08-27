import React, { useState } from "react";
import "./style.css";
import { Form, Col, Button } from "react-bootstrap";

const SettingsComponent = (props) => {
  const [orderStatus, setOrderStatus] = useState(false);
  return (
    <Col lg={3}>
      <h2>Ustawienia</h2>
      <Form>
        <Form.Group controlId="Control.day">
          <Form.Label>Dzień</Form.Label>
          <Form.Control as="select">
            <option>Poniedziałek</option>
            <option>Wtorek</option>
            <option>Środa</option>
            <option>Czwartek</option>
            <option>Piątek</option>
            <option>Sobota</option>
            <option>Niedziela</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Control.orderStatus">
          <Form.Label>
            Zamówienia online:{" "}
            <span
              className={orderStatus ? "order-status-on" : "order-status-off"}
            >
              {orderStatus ? "Włączone" : "Wyłączone"}
            </span>
          </Form.Label>
          <br />
          <Button
            variant={!orderStatus ? "success" : "danger"}
            onClick={() => setOrderStatus(!orderStatus)}
          >
            {!orderStatus ? "Włącz" : "Wyłącz"}
          </Button>
        </Form.Group>
      </Form>
    </Col>
  );
};

export default SettingsComponent;
