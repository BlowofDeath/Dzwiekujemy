import React, { useState, useEffect } from "react";
import "./style.css";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import SettingsComponent from "./SettingsComponent";
import OrdersComponent from "./OrdersComponent";
import MenuComponent from "./MenuComponent";
import EditMenuModalComponent from "./EditMenuModalComponent";
import CategoryComponent from "./CategoryComponent";
import EditCategoryModalComponent from "./EditCategoryModalComponent";

const ControlComponent = () => {
  const [editModalShow, setEditModalShow] = useState(false);
  const [editModalData, setEditModalData] = useState({});

  const [editCategoryModalShow, setEditCategoryModalShow] = useState(false);
  const [editCategoryModalData, setEditCategoryModalData] = useState({});

  const handleEditData = (data) => {
    setEditModalData(data);
    setEditModalShow(true);
  };

  const handleEditCategoryData = (data) => {
    setEditCategoryModalData(data);
    setEditCategoryModalShow(true);
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
          <CategoryComponent
            editCategoryModalShow={editCategoryModalShow}
            handleEditCategoryData={handleEditCategoryData}
          />
        </Row>
      </Container>
      <EditMenuModalComponent
        editModalShow={editModalShow}
        editModalData={editModalData}
        setEditModalShow={setEditModalShow}
      />
      <EditCategoryModalComponent
        editCategoryModalData={editCategoryModalData}
        setEditCategoryModalShow={setEditCategoryModalShow}
        editCategoryModalShow={editCategoryModalShow}
      />
    </>
  );
};

export default ControlComponent;
