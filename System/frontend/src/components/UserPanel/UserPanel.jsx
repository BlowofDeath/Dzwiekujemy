import React from "react";
import { Container, Row } from "react-bootstrap";
import "./style.css";

import NavbarComponent from "./NavbarComponent";
import BanerComponent from "./BanerComponent";
import EventComponent from "./EventComponent";
import MenuComponent from "./MenuComponent";
import FooterComponent from "./FooterComponent";
import BoxComponent from "./BoxComponent";
import GalleryComponent from "./GalleryComponent";

import "./style.css";

const UserPanel = (props) => {
  return (
    <Container fluid style={{ padding: 0 }} id="home">
      <NavbarComponent />
      <BanerComponent />
      <Container fluid>
        <BoxComponent />

        <Row className="middle-row">
          <MenuComponent />
          <EventComponent />
        </Row>
        <GalleryComponent />
        <Row>
          <FooterComponent />
        </Row>
      </Container>
    </Container>
  );
};

export default UserPanel;
