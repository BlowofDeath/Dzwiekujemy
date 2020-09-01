import React from "react";
import "./style.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Alert,
} from "react-bootstrap";
import { useLocation, Redirect } from "react-router-dom";
import { chain, round } from "mathjs";
import { CREATE_ORDER } from "./gql/gqlMutations";
import { useMutation } from "@apollo/client";

import { useForm } from "react-hook-form";

const TransactionComponent = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const location = useLocation();

  const [
    createOrder,
    { data: dataMutation, loading: loadingMutation, error: errorMutation },
  ] = useMutation(CREATE_ORDER);
  let account = localStorage.getItem("user");
  if (!location.state || !account) return <Redirect to="/" />;
  account = JSON.parse(account);
  const user = account.user;

  const { cart } = location.state;

  const generateCart = (cart) => {
    let sum = 0;
    cart = cart.map((cartItem, index) => {
      sum = round(
        chain(cartItem.price).multiply(cartItem.quanity).add(sum).done(),
        2
      );
      return (
        <tr key={index}>
          <td>{cartItem.dish} </td>
          <td>{cartItem.quanity} szt.</td>
          <td>{cartItem.price / 100} zł</td>
        </tr>
      );
    });

    return (
      <tbody>
        {cart}
        <tr>
          <td>
            <b>Suma końcowa</b>
          </td>
          <td></td>
          <td>{sum / 100} zł</td>
        </tr>
      </tbody>
    );
  };

  const onSubmit = (values) => {
    const { payment, pickup } = values;

    createOrder({
      variables: {
        order: {
          ...values,
          payment: parseInt(payment),
          pickup: parseInt(pickup),
        },
        details: cart.map((item) => ({
          quanity: item.quanity,
          MealId: item.id,
        })),
      },
    }).then(
      () => alert("Złożono zamówienie"),
      (err) => {
        alert("Wsytąpił problem ze złożeniem zamówienia");
        console.log(err);
      }
    );
  };

  return (
    <Container fluid>
      <Row className="transaction">
        <Col md={10}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  disabled
                  defaultValue={user.email}
                  name="email"
                  ref={register({
                    required: "Required",
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <Alert variant="danger">Błędny adres email.</Alert>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Nr. telefonu</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  ref={register({
                    required: "Required",
                  })}
                />
                {errors.phone && (
                  <Alert variant="danger">Wymagany numer telefonu.</Alert>
                )}
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Miejscowość</Form.Label>
                <Form.Control
                  name="city"
                  ref={register({
                    required: "Required",
                  })}
                />
                {errors.city && (
                  <Alert variant="danger">
                    Wymagany adres zamieszkania w celu dostawy zamówienia.
                  </Alert>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStreet">
                <Form.Label>Ulica</Form.Label>
                <Form.Control
                  name="street"
                  ref={register({
                    required: "Required",
                  })}
                />
                {errors.street && (
                  <Alert variant="danger">
                    Wymagany adres zamieszkania w celu dostawy zamówienia.
                  </Alert>
                )}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} sm={6} controlId="formGridHouseNumber">
                <Form.Label>Numer domu/mieszkania</Form.Label>
                <Form.Control
                  name="houseNumber"
                  ref={register({
                    required: "Required",
                  })}
                />
                {errors.houseNumber && (
                  <Alert variant="danger">
                    Wymagany adres zamieszkania w celu dostawy zamówienia.
                  </Alert>
                )}
              </Form.Group>
              <Form.Group as={Col} sm={6} controlId="formGridPaymant">
                <Form.Label>Płatność</Form.Label>
                <Form.Control as="select" name="payment" ref={register()}>
                  <option disabled value="0">
                    Płatność online, przelewy 24h
                  </option>
                  <option value="1">Płatność kartą przy odbiorze</option>
                  <option value="2">Płatność gotówką przy odbiorze</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} sm={6} controlId="formGridPickup">
                <Form.Label>Odbiór</Form.Label>
                <Form.Control as="select" name="pickup" ref={register()}>
                  <option value="0">Dowóz</option>
                  <option value="1">Osobity</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCart">
                <Form.Label>Zamówienie</Form.Label>
                <Table className="details">{generateCart(cart)}</Table>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCart">
                <Form.Label>Uwagi</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ resize: "none" }}
                  name="comment"
                  ref={register()}
                />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Zamów
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionComponent;
