import React from "react";
import "./style.css";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import GoogleImg from "./img/google.svg";
// import FacebookImg from "./img/facebook.png";
import { useForm } from "react-hook-form";
import { LOGIN_USER } from "./gql/gqlMutations";
import { useMutation } from "@apollo/client";

function LoginComponent(props) {
  const { setLoginModalShow, setRegisterModalShow } = props;
  const { handleSubmit, register, errors, watch } = useForm();
  const [loginUser] = useMutation(LOGIN_USER, {
    onError: (error) => {
      error = JSON.parse(JSON.stringify(error));
      alert(error.message);
    },
    onCompleted: (data) => {
      localStorage.setItem("user", JSON.stringify(data.loginUser));
      alert("Użytkownik zalogowany pomyślnie.");

      window.location.reload(false);
    },
  });

  const onSubmit = (values) => {
    const { email, password } = values;
    loginUser({ variables: { email, password } });
  };
  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Zaloguj</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Podaj swój adres email"
              name="email"
              placeholder="Email"
              ref={register({
                required: "Required",
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
          </Form.Group>
          {errors.email && <Alert variant="danger">Błędny adres email</Alert>}

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Hasło</Form.Label>
            <Form.Control
              placeholder="Podaj hasło"
              type="password"
              name="password"
              ref={register({
                required: "Required",
              })}
            />
          </Form.Group>
          {errors.password && (
            <Alert variant="danger">Hasło jest wymagane</Alert>
          )}
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
          <Button
            variant="primary"
            style={{ marginLeft: 5 }}
            onClick={() => {
              setLoginModalShow(false);
              setRegisterModalShow(true);
            }}
          >
            Zarejestruj
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
