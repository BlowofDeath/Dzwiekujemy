import React, { useState, useEffect } from "react";
import "./style.css";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import SettingsComponent from "./SettingsComponent";
import OrdersComponent from "./OrdersComponent";
import MenuComponent from "./MenuComponent";
import EditModalComponent from "./EditModalComponent";

const ControlComponent = () => {
  const [editModalShow, setEditModalShow] = useState(false);
  const [editModalData, setEditModalData] = useState({});

  const handleEditData = (data) => {
    setEditModalData(data);
    setEditModalShow(true);
  };

  return (
    <>
      <Container fluid className="control">
        <Row className="d-flex justify-content-around">
          <SettingsComponent />
          <OrdersComponent />
          <MenuComponent
            handleEditData={handleEditData}
            editModalShow={editModalShow}
          />
        </Row>
      </Container>
      <EditModalComponent
        editModalShow={editModalShow}
        editModalData={editModalData}
        setEditModalShow={setEditModalShow}
      />
    </>
  );
};

export default ControlComponent;
