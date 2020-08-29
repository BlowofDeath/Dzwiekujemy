import React from "react";
import "./style.css";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { useLocation, Redirect } from "react-router-dom";
import { chain, round } from "mathjs";

const TransactionComponent = (props) => {
  const location = useLocation();

  if (!location.state) return <Redirect to="/" />;
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

  return (
    <Container fluid>
      <Row className="transaction">
        <Col md={10}>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Nr. telefonu</Form.Label>
                <Form.Control type="tel" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Miejscowość</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStreet">
                <Form.Label>Ulica</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} sm={6} controlId="formGridHouseNumber">
                <Form.Label>Numer domu/mieszkania</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} sm={6} controlId="formGridPaymant">
                <Form.Label>Płatność</Form.Label>
                <Form.Control as="select">
                  <option value="0">Płatność online, przelewy 24h</option>
                  <option value="1">Płatność kartą przy odbiorze</option>
                  <option value="2">Płatność gotówką przy odbiorze</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} sm={6} controlId="formGridReception">
                <Form.Label>Odbiór</Form.Label>
                <Form.Control as="select">
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
                <Form.Control as="textarea" style={{ resize: "none" }} />
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
