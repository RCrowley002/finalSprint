import React, { createContext, useEffect, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetchShoppingCart(); // Fetch and populate the shopping cart initially
  }, []);

  const fetchShoppingCartData = async () => {
    try {
      const res = await fetch("http://localhost:5000/shoppingcart");

      const data = await res.json();

      return data;
    } catch (error) {
      console.error("Error fetching shopping cart data:", error);

      return [];
    }
  };

  const fetchShoppingCart = async () => {
    const shoppingCartFromServer = await fetchShoppingCartData();

    setShoppingCart(shoppingCartFromServer);
  };

  const addToCart = async (newItem) => {
    try {
      const response = await fetch("http://localhost:5000/shoppingcart", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setShoppingCart((prevCart) => [...prevCart, newItem]);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  // to remove an item from your cart
  const deleteFromCart = async (id) => {
    await fetch(`http://localhost:5000/shoppingcart/${id}`, {
      method: "DELETE",
    });
    setShoppingCart(shoppingCart.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        deleteFromCart,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
