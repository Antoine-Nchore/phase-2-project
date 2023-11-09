import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// const BASE_URL = " http://localhost:8001/products";

function ProductInputForm() {
  const [products, setProducts] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProducts({ ...products, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) =>
        setProducts({
          title: "",
          description: "",
          category: "",
          image: "",
          price: 0,
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div class="container d-flex justify-content-center">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Enter title"
              value={products.title}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="Enter Description"
              value={products.description}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              onChange={handleChange}
              placeholder="Enter category"
              value={products.category}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              onChange={handleChange}
              placeholder="Price"
              value={products.price}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Image</Form.Label>
          <Form.Control
            placeholder="Enter Image url"
            name="image"
            onChange={handleChange}
            value={products.image}
          />
        </Form.Group>
        <div class="text-center">
          <Button variant="warning" type="submit" text-align="center">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ProductInputForm;
