import React, { useEffect, useState } from "react";
import Results from "./Components/Results";
import Cart from "./Components/Cart";


const baseURL = "http://localhost:8001/products";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [productCounts, setProductCounts] = useState({});

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    // Increment the count for the product in productCounts
    setProductCounts({
      ...productCounts,
      [product.id]: (productCounts[product.id] || 0) + 1,
    });

    // Add the product to the cart
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    // Reset the count to zero for the removed product
    setProductCounts({
      ...productCounts,
      [product.id]: 0,
    });

    // Remove the product from the cart
    const updatedCart = cart.filter((item) => item !== product);
    setCart(updatedCart);
  };

  const calculateSubtotal = () => {
    const subtotal = cart.reduce(
      (total, product) => total + product.price * getCount(product),
      0
    );
    return subtotal;
  };

const incrementCount = (product) => {
    setProductCounts({
      ...productCounts,
      [product.id]: (productCounts[product.id] || 0) + 1,
    });
  };

const decrementCount = (product) => {
  if (productCounts[product.id] > 0) {
    setProductCounts({
      ...productCounts,
      [product.id]: productCounts[product.id] - 1,
    });
  }
};

  const getCount = (product) => {
    return productCounts[product.id] || 0;
  };


  return (
    <>
      <div style={{ display: "inline-block", fontFamily: "fantasy", marginLeft: "90px" }}>
        <h1>
          BREELARY
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="32"
              fill="orange"
              className="bi bi-stars"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
          </span>
        </h1>
      </div>
      <div
        className="icon"
        style={{
          cursor: "pointer",
          display: "inline-block",
          marginLeft: "56rem",
          fontFamily: "fantasy",
        }}
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
          getCount={getCount}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
      ) : (
        <Results products={products} addToCart={addToCart} />
      )}
    </>
  );
}

export default App;
