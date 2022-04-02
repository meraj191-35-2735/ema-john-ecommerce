import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveItem = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="main-container">
      <div className="review-items-container">
        <h1>Review Item</h1>
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/inventory">
            <button className="reviewOrder">
              <p>Proceed Checkout</p>
              <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
