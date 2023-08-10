import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartDropDown from "./ShoppingCartDropDown";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">
        <ShoppingCartDropDown />
      </Link>
    </div>
  );
};

export default Header;
