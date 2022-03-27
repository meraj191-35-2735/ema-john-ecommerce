import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { cart } = props;

  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
  }

  const total = () => {
    return cart.reduce(
      (previousValue, item) => previousValue + item.price * item.quantity,
      0
    );
  };
  const totalShipping = () => {
    return cart.reduce(
      (previousValue, item) => previousValue + item.shipping,
      0
    );
  };

  return (
    <div>
      <div className="cart-info">
        <p>Selected Items: {quantity}</p>
        {<p>Total Price: ${total()}</p>}
        <p>Shipping Charge: ${totalShipping()}</p>
        {<p>Tax: ${(total() * 0.1).toFixed(2)}</p>}
        <p>Grand Total : ${total() + totalShipping() + total() * 0.1} </p>
      </div>
      <div className="carts-button">
        <div>
          <button className="clearCart">
            <p>Clear Cart</p>
            <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
          </button>
        </div>
        <div>
          <button className="reviewOrder">
            <p>Review Order</p>
            <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
