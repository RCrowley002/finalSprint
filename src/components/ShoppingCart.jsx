import React from "react";
import BackButton from "../shared/BackButton";
import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
import FormattedPrice from "./FormattedPrice";

const ShoppingCart = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <>
      <div>
        <h2>ShoppingCart</h2>

        {shoppingCart.map((item) => (
          <div key={item.id} className="cart">
            <h4>Item</h4>
            {item.name}
            <h4>Price</h4>
            <FormattedPrice value={item.price} />
            <h4>Quantity</h4>
            {item.quantity}
          </div>
        ))}
      </div>

      <BackButton></BackButton>
    </>
  );
};

export default ShoppingCart;
