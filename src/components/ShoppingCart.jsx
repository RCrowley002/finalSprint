import React from "react";
import BackButton from "../shared/BackButton";
import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
import ItemCard from "../shared/ItemCard";
import OrderSummary from "./OrderSummary";
import CheckoutButton from "../shared/CheckoutButton";
const ShoppingCart = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <>
      <div>
        <h2>ShoppingCart</h2>

        {shoppingCart.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}

        <OrderSummary />
      </div>

      <BackButton></BackButton>

      <CheckoutButton></CheckoutButton>
    </>
  );
};

export default ShoppingCart;
