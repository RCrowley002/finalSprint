import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FormattedPrice from "./FormattedPrice";
import ShoppingCartContext from "../context/ShoppingCartContext";
import CartCard from "../shared/CartCard";

// making a drop down preview of what is already in cart
const ShoppingCartDropDown = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  return (
    <>
      <div
        className="cart-icon"
        onMouseEnter={togglePreview}
        onMouseLeave={togglePreview}
      >
        <Link to="/cart">
          <img src="/images/cart-icon.png" alt="view cart" />
        </Link>

        {isPreviewOpen && (
          <div className="cart-preview">
            {shoppingCart.length > 0 ? (
              shoppingCart.map((item) => <CartCard key={item.id} item={item} />)
            ) : (
              <p> Your cart is empty</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCartDropDown;
