import React, { useState } from "react";
import "./style.css";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import SettingsComponent from "./SettingsComponent";
import OrdersComponent from "./OrdersComponent";

const ControlComponent = () => {
  return (
    <Container fluid className="control">
      <Row className="d-flex justify-content-around">
        <SettingsComponent />
        <OrdersComponent />
      </Row>
    </Container>
  );
};

export default ControlComponent;
