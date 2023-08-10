import React from "react";
import FormattedPrice from "./FormattedPrice";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { useContext } from "react";

const OrderSummary = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  //calucating subtotal, shipping(50/item), taxes(15%) and order total
  const subtotal = shoppingCart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const shipping = shoppingCart.length * 50;

  const taxes = (subtotal + shipping) * 0.15;

  const orderTotal = subtotal + shipping + taxes;

  return (
    <div className="summary">
      <h3>Order Summary</h3>
      <p>
        Subtotal({shoppingCart.length} items):{" "}
        <FormattedPrice value={subtotal} />
      </p>
      <p>
        Shipping: <FormattedPrice value={shipping} />
      </p>
      <p>
        Taxes: <FormattedPrice value={taxes} />
      </p>
      <p>
        Order total: <FormattedPrice value={orderTotal} />
      </p>
    </div>
  );
};

export default OrderSummary;
