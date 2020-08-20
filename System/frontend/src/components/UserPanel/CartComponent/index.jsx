import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import "./style.css";
import deleteSvg from "./img/delete.svg";

const CartComponent = (props) => {
  const { cart, show, setCartModalShow, removeFromCart, clearCart } = props;

  const generateCart = (cartArray) => {
    let sum = 0;
    cartArray = cartArray.map((item, index) => {
      console.log(item.price, item.quanity);
      sum += item.price * item.quanity;
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            {item.dish} <br />
            {item.description}
          </td>

          <td>{item.price} zł</td>
          <td>{item.quanity}</td>
          <td>
            <img
              className="cart-delete"
              src={deleteSvg}
              alt="Usuń produkt"
              onClick={() => {
                if (window.confirm("Czy napewno chcesz usunąć produkt?")) {
                  removeFromCart(item);
                }
              }}
            />
          </td>
        </tr>
      );
    });

    return (
      <>
        <Table>
          <tbody>
            {cartArray}
            <tr>
              <td colSpan="5">Razem do zapłaty: {sum} zł</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  };

  return (
    <Modal
      show={show}
      onHide={() => setCartModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Koszyk</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {generateCart(cart)}
        <Button variant="primary" type="submit">
          Zamów
        </Button>{" "}
        <Button variant="primary" type="submit" onClick={() => clearCart()}>
          Wyczyść koszyk
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zamknij</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartComponent;
