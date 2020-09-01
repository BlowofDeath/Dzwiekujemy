import React from "react";
import "./style.css";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import GoogleImg from "./img/google.svg";
// import FacebookImg from "./img/facebook.png";
import { useForm } from "react-hook-form";
import { REGISTER_USER } from "./gql/gqlMutations";
import { useMutation } from "@apollo/client";

function RegisterComponent(props) {
  const { handleSubmit, register, errors, watch } = useForm();
  const { setRegisterModalShow, setLoginModalShow } = props;

  const [registerUser] = useMutation(REGISTER_USER, {
    onError: (error) => {
      error = JSON.parse(JSON.stringify(error));
      alert(error.message);
    },
    onCompleted: (data) => {
      localStorage.setItem("user", JSON.stringify(data.registerUser));

      alert("Użytkownik zarejestrowany pomyślnie.");
      window.location.reload(false);
    },
  });
  const onSubmit = (values) => {
    const { email, password, confirmPassword } = values;
    registerUser({ variables: { email, password, confirmPassword } });
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
        <Modal.Title id="contained-modal-title-vcenter">
          Zarejestruj
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)} className="register">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
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
              type="password"
              name="password"
              placeholder="Minimum 8 znaków"
              ref={register({
                required: "Required",
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              })}
            />
          </Form.Group>
          {errors.password && (
            <Alert variant="danger">
              Hasło musi mieć przynajmniej osiem znaków, jedną literę i cyfrę.
            </Alert>
          )}
          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Powtórz hasło</Form.Label>
            <Form.Control
              type="password"
              placeholder="Powtórz hasło"
              name="confirmPassword"
              ref={register({
                required: "Required",
                validate: (value) =>
                  value === watch("password") || "Hasło się nie zgadza",
              })}
            />
          </Form.Group>
          {errors.confirmPassword && (
            <Alert variant="danger">Hasło musi być takie samo</Alert>
          )}
          <Form.Group controlId="formGoogleLoginButton">
            <Button variant="primary">
              <img alt="Zaloguj z Google" src={GoogleImg} />
              <span className="google">Zarejestruj z Google</span>
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
            Zarejestruj
          </Button>
          <Button
            variant="primary"
            style={{ marginLeft: 5 }}
            onClick={() => {
              setRegisterModalShow(false);
              setLoginModalShow(true);
            }}
          >
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

export default RegisterComponent;
