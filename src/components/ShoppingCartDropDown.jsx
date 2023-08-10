import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FormattedPrice from "./FormattedPrice";
import ShoppingCartContext from "../context/ShoppingCartContext";
<<<<<<< HEAD
import CartCard from "../shared/CartCard";
=======
>>>>>>> 5307602c7b1442dc24372158f4ae0cee602e7457

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
<<<<<<< HEAD
              shoppingCart.map((item) => <CartCard key={item.id} item={item} />)
=======
              shoppingCart.map((item) => (
                <div key={item.id}>
                  <p>
                    {item.name} - <FormattedPrice value={item.price} />
                  </p>
                  {item.quantity}
                </div>
              ))
>>>>>>> 5307602c7b1442dc24372158f4ae0cee602e7457
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
