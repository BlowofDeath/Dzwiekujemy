import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useCart = () => {
  const [storageCart, setStorageCart] = useLocalStorage("cart", []);
  const [cart, setCart] = useState(storageCart);

  const saveCart = (temp) => {
    setCart(temp);
    setStorageCart(temp);
  };

  const removeFromCart = async (product) => {
    const elementIndex = cart.findIndex((element) => element.id === product.id);
    if (elementIndex !== -1 && cart[elementIndex].quanity > 1) {
      const cartTemp = cart.slice();
      cartTemp[elementIndex].quanity = cartTemp[elementIndex].quanity - 1;
      saveCart(cartTemp);
    } else if (cart[elementIndex].quanity === 1) {
      const cartTemp = cart.slice();
      cartTemp.splice(elementIndex, 1);
      saveCart(cartTemp);
    }
  };

  const addToCart = async (product) => {
    const elementIndex = cart.findIndex((element) => element.id === product.id);
    if (elementIndex !== -1) {
      const cartTemp = cart.slice();
      cartTemp[elementIndex].quanity = cartTemp[elementIndex].quanity + 1;
      saveCart(cartTemp);
    } else {
      product = { ...product, quanity: 1 };
      saveCart([...cart, product]);
    }

    // saveCart([...cart, product]);
  };

  const clearCart = async () => {
    saveCart([]);
  };

  return [cart, addToCart, removeFromCart, clearCart];
};

export default useCart;
