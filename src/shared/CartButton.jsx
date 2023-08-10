import React, { useContext } from "react";

import { BsCartPlusFill } from "react-icons/bs";

<<<<<<< HEAD
const CartButton = ({ item }) => {
  const showDetails = () => {
    console.log(item.name);
  };
  return (
    <button className="btn1" onClick={showDetails}>
=======
import ShoppingCartContext from "../context/ShoppingCartContext";

const CartButton = ({ item }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <button className="btn1" onClick={handleAddToCart}>
>>>>>>> 5307602c7b1442dc24372158f4ae0cee602e7457
      <BsCartPlusFill /> Add to Cart
    </button>
  );
};

export default CartButton;
