import React, { useState, useEffect } from 'react';
// import { cartContext } from "../contexts/CartContext";
import uuid from 'uuid/v1';
import AnnouncementTag from './AnnouncementTag';

const Cart = () => {
  const [carts, setCarts] = useState([]);

  let clothingCost = 0;
  let shippingCost = parseFloat(carts.length);
  let currentCartID = null;
  let currentCartColor = null;
  let currentCartSize = null;

  const setIntitialCart = () => {
    let getCarts = localStorage.getItem('Cart');
    getCarts = JSON.parse(getCarts);

    setCarts(getCarts);
  };

  useEffect(() => {
    setIntitialCart();
  }, []);

  const preventReload = (e, cartID) => {
    e.preventDefault();
    // changeQuantity(e.target.childNodes[0]);
  };

  const setClothingCost = () => {
    carts.map((cart) => {
      if (cart.sale !== null)
        clothingCost =
          parseFloat(clothingCost) + parseFloat(cart.sale) * cart.quantity;
      else
        clothingCost =
          parseFloat(clothingCost) + parseFloat(cart.price) * cart.quantity;
    });

    return clothingCost.toFixed(2);
  };

  const setTotal = () => {
    let total = shippingCost + parseFloat(clothingCost);
    return total.toFixed(2);
  };

  const changeQuantity = (e) => {
    const currentInputID = document.getElementById(
      'changeQuantity' + currentCartID
    );
    carts.map((cart) => {
      if (cart.id === currentCartID) {
        if (parseInt(currentInputID.value) === 0) {
          console.log('is zero');
          cart.quantity = 1;
        } else cart.quantity = currentInputID.value;
      }
    });
    const newCarts = [...carts];

    localStorage.setItem('Cart', JSON.stringify(newCarts));
    setCarts(JSON.parse(localStorage.getItem('Cart')));
    setClothingCost();
  };

  const removeItem = (cartID) => {
    localStorage.setItem(
      'Cart',
      JSON.stringify(
        carts.filter((cart) => {
          if (
            cart.id === currentCartID &&
            cart.size === currentCartSize &&
            cart.color === currentCartColor
          ) {
          } else {
            return cart;
          }
        })
      )
    );
    const newCarts = JSON.parse(localStorage.getItem('Cart'));
    setCarts(newCarts);
  };

  return carts.length > 0 ? (
    <div className="container-fluid">
      <AnnouncementTag />
      <div className="text-center mt-3">
        <h5>Cart</h5>
      </div>
      <ul className="list-group mt-3">
        {carts.map((cart) => {
          return (
            <li className="list-group-item cart-container h-auto" key={uuid()}>
              <div className="favorites-link">
                <div className="col-sm-3 mr-5 favorites-image-container">
                  <img src={cart.image} alt="" className="favorites-img" />
                </div>
                <div className="favorite-info col-sm-9">
                  <h6>{cart.name}</h6>
                  <p>Price: ${cart.price} USD</p>
                  <p className="sale">
                    {cart.sale !== null ? (
                      <span>Sale ${cart.sale} USD</span>
                    ) : (
                      <span></span>
                    )}
                  </p>
                  <div className="display-items-size-container">
                    <div key={uuid()}>{cart.size}</div>
                    <div
                      className="show-item-col w-20 h-20"
                      style={{ background: cart.color }}
                      key={uuid()}
                    ></div>
                  </div>
                  <div className="w-auto h-auto mb-2">
                    <span>Quantity:</span>
                    <form onSubmit={preventReload}>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={cart.quantity}
                        id={'changeQuantity' + cart.id}
                        onChange={() => {
                          currentCartID = cart.id;
                          changeQuantity();
                        }}
                      />
                    </form>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      currentCartID = cart.id;
                      currentCartColor = cart.color;
                      currentCartSize = cart.size;
                      removeItem(cart.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="w-100 d-flex justify-content-end mt-3">
        <button
          className="btn btn-sm btn-danger mr-5"
          onClick={() => {
            localStorage.setItem('Cart', JSON.stringify([]));
            setCarts(JSON.parse(localStorage.getItem('Cart')));
          }}
        >
          Remove All
        </button>
      </div>
      <div className="container-fluid w-100 d-flex justify-content-end align-items-center mb-1 mt-5">
        <div className="mr-0 mr-md-5">
          <span className="font-weight-bold mr-1">Clothing Cost:</span> $
          {setClothingCost()} USD
        </div>
      </div>
      <div className="container-fluid w-100 d-flex justify-content-end align-items-center mb-1 mt-1">
        <div className="mr-0 mr-md-5">
          <span className="font-weight-bold mr-1">Shipping Cost:</span> $
          {shippingCost} USD
        </div>
      </div>
      <div className="container-fluid w-100 d-flex justify-content-end align-items-center mb-5">
        <div className="mr-0 mr-md-5">
          <span className="font-weight-bold mr-1">Total Cost:</span> $
          {setTotal()}
          USD
        </div>
      </div>
    </div>
  ) : (
    <div className="container-fluid">
      <AnnouncementTag />
      <div className="container mt-5 cart-empty">
        There are currently no items in cart
      </div>
    </div>
  );
};
export default Cart;
