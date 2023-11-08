import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// const BASE_URL = " http://localhost:8001/products";

function ProductInputForm() {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const title = e.target.title;
    const value = e.target.value;
    setData({ ...data, [title]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8001/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Enter new Product</h1>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Enter Title"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Enter Price"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="Enter Description"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="category"
          onChange={handleChange}
          placeholder="Category"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="URL"
          name="image"
          onChange={handleChange}
          placeholder="Enter Image URL"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ProductInputForm;
