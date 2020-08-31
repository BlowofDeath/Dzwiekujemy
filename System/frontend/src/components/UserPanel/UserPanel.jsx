import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "./style.css";

import NavbarComponent from "./NavbarComponent";
import BanerComponent from "./BanerComponent";
import EventComponent from "./EventComponent";
import MenuComponent from "./MenuComponent";
import FooterComponent from "./FooterComponent";
import BoxComponent from "./BoxComponent";
import GalleryComponent from "./GalleryComponent";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import CartComponent from "./CartComponent";
import TransactionComponent from "./TransactionComponent";

import useCart from "./../../hooks/useCart";

import "./style.css";

const UserPanel = (props) => {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [registerModalShow, setRegisterModalShow] = useState(false);
  const [cartModalShow, setCartModalShow] = useState(false);

  const [cart, addToCart, removeFromCart, clearCart] = useCart();

  const match = useRouteMatch();

  return (
    <>
      <Container fluid style={{ padding: 0 }} id="home">
        <NavbarComponent
          setLoginModalShow={setLoginModalShow}
          setCartModalShow={setCartModalShow}
          setRegisterModalShow={setRegisterModalShow}
        />
        <BanerComponent />
        <Switch>
          <Route exact path={`/transaction`}>
            <TransactionComponent />
          </Route>

          <Route path={`/`}>
            <Container fluid>
              <BoxComponent />

              <Row className="middle-row">
                <MenuComponent addToCart={addToCart} />
                <EventComponent />
              </Row>
              <GalleryComponent />
              <Row>
                <FooterComponent />
              </Row>
            </Container>
          </Route>
        </Switch>
      </Container>

      <LoginComponent
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
        setLoginModalShow={setLoginModalShow}
      />
      <RegisterComponent
        show={registerModalShow}
        onHide={() => setRegisterModalShow(false)}
        setRegisterModalShow={setRegisterModalShow}
      />
      <CartComponent
        show={cartModalShow}
        setCartModalShow={setCartModalShow}
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </>
  );
};

export default UserPanel;
