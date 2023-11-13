import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const BASE_URL = " http://localhost:8001/products";

const initialProductState = {
  title: "",
  description: "",
  category: "",
  image: "",
  price: 0,
};

const initialCategories = [
  "electronics",
  "women's clothing",
  "men's clothing",
  "jewelry",
];

function AddProduct({ onAddItem }) {
  const [products, setProducts] = useState(initialProductState);

  const [categories] = useState(initialCategories);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProducts({ ...products, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(BASE_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((newItem) => onAddItem(newItem))
      .then(() => setProducts(initialProductState))
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit} style={{ backgroundColor: "grey" }}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label
            style={{
              fontWeight: "bold",
              fontFamily: "Georgia",
              color: "white",
            }}
          >
            Title
          </Form.Label>
          <Form.Control
            type="text"
            required
            name="title"
            onChange={handleChange}
            placeholder="Enter title"
            value={products.title}
            style={{ border: "solid" }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label
            style={{
              fontWeight: "bold",
              fontFamily: "Georgia",
              color: "white",
            }}
          >
            Description
          </Form.Label>
          <Form.Control
            type="text"
            name="description"
            required
            onChange={handleChange}
            placeholder="Description"
            value={products.description}
            style={{ border: "solid" }}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label
            style={{
              fontWeight: "bold",
              fontFamily: "Georgia",
              color: "white",
            }}
          >
            Category
          </Form.Label>
          <Form.Control
            as="select"
            name="category"
            required
            onChange={handleChange}
            value={products.category}
            style={{ border: "solid" }}
          >
            <option>Select category here</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label
            style={{
              fontWeight: "bold",
              fontFamily: "Georgia",
              color: "white",
            }}
          >
            Price
          </Form.Label>
          <Form.Control
            type="number"
            name="price"
            required
            onChange={handleChange}
            placeholder="Price"
            value={products.price}
            style={{ border: "solid" }}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label
          style={{ fontWeight: "bold", fontFamily: "Georgia", color: "white" }}
        >
          Image
        </Form.Label>
        <Form.Control
          placeholder="Enter Image url"
          name="image"
          required
          onChange={handleChange}
          value={products.image}
          style={{ border: "solid" }}
        />
      </Form.Group>
      <Button variant="warning" type="submit" style={{ marginBottom: "10px" }}>
        Add Product
      </Button>
    </Form>
  );
}

export default AddProduct;