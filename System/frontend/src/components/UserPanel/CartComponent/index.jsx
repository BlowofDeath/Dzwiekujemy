import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import "./style.css";
import { ReactComponent as CartDelete } from "./img/delete.svg";
import { chain, round } from "mathjs";
import { useHistory } from "react-router-dom";

const CartComponent = (props) => {
  const {
    cart,
    show,
    setCartModalShow,
    removeFromCart,
    clearCart,
    setLoginModalShow,
  } = props;
  const user = localStorage.getItem("user");
  const history = useHistory();

  const generateCart = (cartArray) => {
    let sum = 0;
    cartArray = cartArray.map((item, index) => {
      sum = round(chain(item.price).multiply(item.quanity).add(sum).done(), 2);
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            {item.dish} <br />
            {item.description}
          </td>

          <td>{item.price / 100} zł</td>
          <td>{item.quanity}</td>
          <td>
            <CartDelete
              className="cart-delete"
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

    const handleTransaction = (sum) => {
      if (sum <= 0) alert("Włóż coś do koszyka, zanim złożysz zamówienie!");
      else if (!user) {
        alert("Zaloguj się aby złożyć zamówienie");
        setCartModalShow(false);
        setLoginModalShow(true);
      } else {
        const confirm = window.confirm("Czy napewno chcesz złożyć zamówienie?");
        if (confirm) {
          setCartModalShow(false);
          history.push({
            pathname: "/transaction",
            state: { cart },
          });
        }
      }
    };

    return (
      <>
        <Table>
          <tbody>
            {cartArray}
            <tr>
              <td colSpan="5">Razem do zapłaty: {sum / 100} zł</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary" onClick={() => handleTransaction(sum)}>
          Złóż zamówienie
        </Button>{" "}
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

        <Button
          variant="primary"
          type="submit"
          onClick={() =>
            window.confirm("Czy na pewno chcesz wyczyścić koszyk?")
              ? clearCart()
              : null
          }
        >
          Wyczyść koszyk
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default CartComponent;
