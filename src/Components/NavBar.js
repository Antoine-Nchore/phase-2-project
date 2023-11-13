import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cart">Cart</Link>
          <Link to="/addproduct">Add Product</Link>
        </li>
      </ul>
    </nav>
  );
};
