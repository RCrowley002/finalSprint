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
          <div key={item.id}>

            {item.name}
            <FormattedPrice value={item.price} />


            {item.quantity}

          </div>
        ))}
      </div>

      <BackButton></BackButton>
    </>
  );
};

export default ShoppingCart;
