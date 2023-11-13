
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Results({ products, addToCart, searchText }) {
   const filterProducts = products.filter((products) =>
     products.title.toLowerCase().includes(searchText.toLowerCase())
   );

  return (
    <Row>
      {filterProducts.map((product) => (
        <Col key={product.id}>
          <Card
            style={{
              width: "14rem",
              height: "28rem",
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
                <h5>{product.title}</h5>
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
