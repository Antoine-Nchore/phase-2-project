import React, { useEffect, useState } from "react";
import Results from "./Components/Results";
import Cart from "./Components/Cart";

const baseURL = "http://localhost:8001/products";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    setCart(updatedCart);
  };

  const calculateSubtotal = () => {
    const subtotal = cart.reduce((total, product) => total + product.price, 0);
    return subtotal;
  };

  return (
    <>
      <div
        className="icon"
        style={{ cursor: "pointer", display: "inline-block" }}
        onClick={() => setShowCart(!showCart)}
      >
        <span className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </span>
        <span className="cart-text">
          Cart<span style={{ color: "orange" }}>({cart.length})</span>
        </span>
      </div>
      {showCart ? (
        <Cart
          cart={cart}
          products={products}
          calculateSubtotal={calculateSubtotal}
          removeFromCart={removeFromCart}
        />
      ) : (
        <Results products={products} addToCart={addToCart} />
      )}
    </>
  );
}

export default App;
