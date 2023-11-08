import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Cartegory({ filterProductsByCategory }) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => filterProductsByCategory("All")}>
            All
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => filterProductsByCategory("men's clothing")}
          >
            Men
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => filterProductsByCategory("women's clothing")}
          >
            Women
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => filterProductsByCategory("electronics")}
          >
            Electronics
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterProductsByCategory("jewelery")}>
            Jewelry
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Cartegory;
