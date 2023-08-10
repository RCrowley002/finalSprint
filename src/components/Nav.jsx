import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartDropDown from "./ShoppingCartDropDown";

const Nav = () => {
  return (
    <aside className="nav">
      <Link to="/">
        <h2>Pens of Haute Culture</h2>
      </Link>
      <br />

      <div className="links">
        <Link to="/cart">Cart</Link>
        <br />
        <Link to="/products">Products</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </div>
    </aside>
  );
};

export default Nav;
