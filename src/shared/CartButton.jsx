import React, { useContext } from "react";

import { BsCartPlusFill } from "react-icons/bs";

import ShoppingCartContext from "../context/ShoppingCartContext";

const CartButton = ({ item }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <button className="btn1" onClick={handleAddToCart}>
      <BsCartPlusFill />
    </button>
  );
};

export default CartButton;
