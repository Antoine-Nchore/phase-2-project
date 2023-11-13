import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function Sell() {
  return (
    <NavLink to={"/add product"}>
      <Button variant="danger">Sell on Breelary</Button>
    </NavLink>
  );
}
export default Sell;
