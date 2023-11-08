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
      {filterProducts.map((products) => (
        <Col key={products.id}>
          <Card style={{ width: "16rem", height: "38rem", marginTop: "20px" }}>
            <Card.Img
              variant="top"
              src={products.image}
              style={{ height: "200px", width: "200px" }}
            />
            <Card.Body>
              <Card.Title>
                <h2>{products.title}</h2>
              </Card.Title>
              <Card.Text>${products.price}</Card.Text>
              <Button variant="warning" onClick={() => addToCart(products)}>
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


