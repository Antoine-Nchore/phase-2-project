import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";


function Cart({
  cart,
  calculateSubtotal,
  removeFromCart,
  getCount,
  incrementCount,
  decrementCount,
}) {
  const [orderPlaced, setOrderPlaced] = useState(false);
 
const handlePlaceOrder = () => {
  if (
    cart.length === 0 ||
    !cart.some((product) => (getCount(product) || 0) > 0)
  ) {
    alert("Oops! Your cart is empty.");
    return;
  }
  setOrderPlaced(true);
  alert("Dear customer, your order has been successfully placed.");
};


  return (
    <Row style={{marginTop: "20px"}}>
      <Col sm={8}>
        {Array.from(new Set(cart.map((item) => item.id)).values()).map(
          (productId) => {
            const product = cart.find((item) => item.id === productId);
            return (
              <Stack
                key={product.id}
                style={{
                  border: "1px solid #000",
                  width: "800px",
                  borderRadius: "8px",
                }}
              >
                <div className="p-2">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.image}
                        className="img-fluid rounded-start"
                        alt={product.title}
                        style={{ height: "100px" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">
                          <strong>$</strong>
                          {product.price}
                        </p>
                        <div>
                          <Button
                            variant="outline-warning"
                            onClick={() => decrementCount(product)}
                            disabled={orderPlaced}
                          >
                            -
                          </Button>
                          <span style={{ margin: "0 10px" }}>
                            {getCount(product)}
                          </span>
                          <Button
                            variant="outline-success"
                            onClick={() => incrementCount(product)}
                            disabled={orderPlaced}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline-warning"
                    onClick={() => removeFromCart(product)}
                    style={{
                      marginTop: "10px",
                      marginLeft: "10px",
                      marginBottom: "10px",
                    }}
                    disabled={orderPlaced}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                    <strong>Remove</strong>
                  </Button>
                </div>
              </Stack>
            );
          }
        )}
      </Col>
      <Col sm={4}>
        <Stack
          gap={3}
          style={{
            border: "1px solid #000",
            width: "250px",
            borderRadius: "8px",
          }}
        >
          <h5 className="p-2">CART SUMMARY</h5>
          <div className="p-2">
            <strong>Subtotal $ {calculateSubtotal().toFixed(2)}</strong>
          </div>
          <Button
            variant={orderPlaced ? "success" : "warning"}
            onClick={handlePlaceOrder}
            style={{
              marginRight: "30px",
              marginLeft: "30px",
              marginBottom: "10px",
            }}
            disabled={orderPlaced || cart.length === 0}
          >
            {orderPlaced ? "Pending Order" : "Place Order"}
          </Button>
        </Stack>
      </Col>
    </Row>
  );
}


export default Cart;