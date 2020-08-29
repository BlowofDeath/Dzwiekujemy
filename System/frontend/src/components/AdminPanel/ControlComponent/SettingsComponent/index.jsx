import React, { useState } from "react";
import "./style.css";
import { Form, Col, Button } from "react-bootstrap";
import { PAGE_SETTINGS } from "./gqlSchemas";
import { useQuery } from "@apollo/client";

const SettingsComponent = (props) => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [dayOfWeekStatus, setDayOfWeekStatus] = useState(1);
  const {
    loading: loadingPageSettings,
    error: errorPageSettings,
    data: dataPageSettings,
  } = useQuery(PAGE_SETTINGS);

  if (errorPageSettings || loadingPageSettings) return null;

  const { dayOfWeek, online } = dataPageSettings.pageSettings;

  return (
    <Col lg={3}>
      <h2>Ustawienia</h2>
      <Form>
        <Form.Group controlId="Control.day">
          <Form.Label>Dzień</Form.Label>
          <Form.Control as="select" defaultValue={dayOfWeek}>
            <option value="1">Poniedziałek</option>
            <option value="2">Wtorek</option>
            <option value="3">Środa</option>
            <option value="4">Czwartek</option>
            <option value="5">Piątek</option>
            <option value="6">Sobota</option>
            <option value="7">Niedziela</option>
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
