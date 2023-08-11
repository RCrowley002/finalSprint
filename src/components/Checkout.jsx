import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import BackButton from "../shared/BackButton";
import ConfirmButton from "../shared/ConfirmButton";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div className="checkout">
        <h2>Checkout</h2>
        <form action="">
          <label>
            First Name:
            <input type="text" />
          </label>
          <label>
            Last Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Street Address:
            <input type="text" />
          </label>
          <label>
            City:
            <input type="text" />
          </label>
          <br />
          <label>
            Province/State:
            <input type="text" />
          </label>
          <label>
            Postal Code / Zip Code:
            <input type="text" />
          </label>
          <label>
            Country:
            <input type="text" />
          </label>
        </form>
        <OrderSummary></OrderSummary>
        <Link to="/cart">
          <button className="btn1">&#8656; Back to Cart</button>
        </Link>
        <ConfirmButton></ConfirmButton>
      </div>
    </>
  );
};

export default Checkout;
