import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// const BASE_URL = " http://localhost:8001/products";

function ProductInputForm() {
  const [products, setProducts] = useState({
    title: " ",
    price: " ",
    description: " ",
    category: " ",
    image: " ",
  });

  const handleChange = (e) => {
    const name = e.target;

    setData({ ...products, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8001/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(products),
    })
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div class="container d-flex justify-content-center">
      <Form onSubmit={handleSubmit}>
        <h1>Enter new Product</h1>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="description"
            onChange={handleChange}
            value={product.description}
            placeholder="Description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="category"
            onChange={handleChange}
            value={product.category}
            placeholder="Category"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="URL"
            name="image"
            onChange={handleChange}
            value={product.image}
            placeholder="Image URL"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ProductInputForm;
