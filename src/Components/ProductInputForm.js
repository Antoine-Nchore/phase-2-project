import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProductInputForm() {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  return (
    <Form>
      <h1>Enter new Product</h1>
      <Form.Group className="mb-3">
        <Form.Control type="text" name="title" placeholder="Enter Title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="number" name="price" placeholder="Enter Price" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter Description"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" name="category" placeholder="Category" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="URL" name="image" placeholder="Enter Image URL" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ProductInputForm;
