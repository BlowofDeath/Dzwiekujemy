import React from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";

const LoginComponent = (props) => {
  const history = useHistory();
  const handleLogin = () => {
    //Succesfull login
    window.sessionStorage.setItem("admin", JSON.stringify("jakishash"));
    history.push("/admin");
  };

  return (
    <Form className="admin-login col-lg-6 offset-lg-3" onSubmit={handleLogin}>
      <h1>Admin Panel</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginComponent;
