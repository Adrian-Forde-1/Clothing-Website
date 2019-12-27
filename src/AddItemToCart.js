import React, { Component, useContext } from "react";
import { CartContext } from "./contexts/CartContext";

class AddItemToCart extends Component {
  static contextType = CartContext;

  componentDidMount() {
    console.log("component mounted");
  }
  render() {
    const { dispatch } = this.context;
    console.log(this.props);
    console.log("add item called");
    //   dispatch({ type: "ADD_CART", cart: pr });
    return <div></div>;
  }
}

export default AddItemToCart;
