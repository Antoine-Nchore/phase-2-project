import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Results({products}) {
  return (
    <Row>
        {products.map((products)=>(
        <Col>
    <Card style={{ width: '25rem',height: "42rem", marginTop: "20px" }}>
      <Card.Img variant="top" src={products.image} style={{height: "350px"}}/>
      <Card.Body>
        <Card.Title><h2>{products.title}</h2></Card.Title>
        <Card.Text>
          ${products.price}
        </Card.Text>
        <Button variant="warning">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    ))}
    </Row>
  );
}

export default Results;