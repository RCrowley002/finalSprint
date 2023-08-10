import React from "react";
import BackButton from "../shared/BackButton";
import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
<<<<<<< HEAD
import ItemCard from "../shared/ItemCard";
import OrderSummary from "./OrderSummary";
import CheckoutButton from "../shared/CheckoutButton";
=======
import FormattedPrice from "./FormattedPrice";
>>>>>>> 5307602c7b1442dc24372158f4ae0cee602e7457

const ShoppingCart = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <>
      <div>
        <h2>ShoppingCart</h2>

        {shoppingCart.map((item) => (
<<<<<<< HEAD
          <ItemCard key={item.id} item={item} />
=======
          <div key={item.id} className="cart">
            <h4>Item</h4>
            {item.name}
            <h4>Price</h4>
            <FormattedPrice value={item.price} />
            <h4>Quantity</h4>
            {item.quantity}
          </div>
>>>>>>> 5307602c7b1442dc24372158f4ae0cee602e7457
        ))}
        <OrderSummary />
      </div>

      <BackButton></BackButton>
      <CheckoutButton></CheckoutButton>
    </>
  );
};

export default ShoppingCart;
