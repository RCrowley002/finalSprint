import React, { useState } from "react";

const Checkout = () => {
  return (
    <div>
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
          Poatal Code/ Zip Code:
          <input type="text" />
        </label>
        <label>
          Country:
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default Checkout;
