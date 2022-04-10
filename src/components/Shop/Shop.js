import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cart.find((p) => p.id === product.id);
    if (exist) {
      const rest = cart.filter((p) => p.id !== product.id);
      exist.quantity = exist.quantity + 1;
      newCart.push(...rest, exist);
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="main-container">
      <div className="products-container">
        {products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
            ></Product>
          );
        })}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link style={{ textDecoration: "none" }} to="/orders">
            <button className="reviewOrder">
              <p>Review Order</p>
              <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
