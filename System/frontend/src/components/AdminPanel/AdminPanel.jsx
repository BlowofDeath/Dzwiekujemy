import React from "react";

import { Container, Row } from "react-bootstrap";

import { Switch, Route, Redirect } from "react-router-dom";

import NavbarComponent from "./NavbarComponent";
import LoginComponent from "./LoginComponent";
import "./style.css";

const AdminPanel = (props) => {
  const isAuthenticated = () => {
    const isAuth = window.localStorage.getItem("admin");
    return isAuth;
  };
  return (
    <Container fluid id="AdminPanel">
      <Switch>
        <Route
          exact
          path="/admin"
          render={() =>
            isAuthenticated() ? (
              <NavbarComponent />
            ) : (
              <Redirect to="admin/login" />
            )
          }
        />

        <Route exact path="/admin/login">
          <LoginComponent />
        </Route>
      </Switch>
    </Container>
  );
};

export default AdminPanel;
