// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/ProductInputForm")}>AddProduct</button>
  );
}

export default AddProduct;
