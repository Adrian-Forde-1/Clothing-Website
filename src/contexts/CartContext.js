import React, { createContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {props.chidlren}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
