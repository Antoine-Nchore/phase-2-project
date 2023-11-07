import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function Cart({ cart, calculateSubtotal, removeFromCart }) {
  return (
    <Row>
      <Col sm={8}>
        {cart.map((cartProduct) => (
          <Stack
            key={cartProduct.id}
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
                    src={cartProduct.image}
                    className="img-fluid rounded-start"
                    alt={cartProduct.title}
                    style={{ height: "100px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{cartProduct.title}</h5>
                    <p className="card-text">
                      <strong>$</strong>
                      {cartProduct.price}
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="outline-warning"
                onClick={() => removeFromCart(cartProduct)}
                style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                Remove
              </Button>
            </div>
          </Stack>
        ))}
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
            <strong>Subtotal $ {calculateSubtotal()}</strong>
          </div>
          <Button
            variant="warning"
            style={{
              marginRight: "30px",
              marginLeft: "30px",
              marginBottom: "10px",
            }}
          >
            Place Order
          </Button>
        </Stack>
      </Col>
    </Row>
  );
}

export default Cart;
