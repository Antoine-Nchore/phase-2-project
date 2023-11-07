import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Results({ products, addToCart }) {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id}>
          <Card
            style={{
              width: "16rem",
              height: "38rem",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          >
            <Card.Img
              variant="top"
              src={product.image}
              style={{ height: "200px", width: "200px" }}
            />
            <Card.Body>
              <Card.Title>
                <h2>{product.title}</h2>
              </Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button variant="warning" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Results;
