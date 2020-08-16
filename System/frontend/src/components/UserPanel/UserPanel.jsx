import React from "react";
import { Container, Row } from "react-bootstrap";
import "./style.css";

import NavbarComponent from "./NavbarComponent";
import BanerComponent from "./BanerComponent";
import EventComponent from "./EventComponent";
import MenuComponent from "./MenuComponent";
import FooterComponent from "./FooterComponent";

const UserPanel = (props) => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <NavbarComponent />
      <BanerComponent />
      <Container fluid>
        <Row className="middle-row">
          <EventComponent />
          <MenuComponent />
        </Row>
        <Row>
          <FooterComponent />
        </Row>
      </Container>
    </Container>
  );
};

export default UserPanel;
