import React from "react";
import "./style.css";
import { Modal, Button, Form } from "react-bootstrap";
import GoogleImg from "./img/google.svg";
// import FacebookImg from "./img/facebook.png";

function LoginComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Zaloguj</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Hasło</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formGoogleLoginButton">
            <Button variant="primary" type="submit">
              <img alt="Zaloguj z Google" src={GoogleImg} />
              <span className="google">Zaloguj z Google</span>
            </Button>
          </Form.Group>
          {/* <Form.Group controlId="formGoogleLoginButton">
            <Button variant="primary" type="submit">
              <img
                alt="Zaloguj z Facebook"
                height="46"
                width="46"
                src={FacebookImg}
              />
              <span className="facebook">Zaloguj z Facebook</span>
            </Button>
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Zaloguj
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginComponent;
