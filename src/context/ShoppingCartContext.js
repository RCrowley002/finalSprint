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


  useEffect(() => {
    fetchShoppingCart(); // Fetch and populate the shopping cart initially
  }, []);

  const addToCart = async (item) => {

    try {
      const existingCartItem = shoppingCart.find((cartItem) => cartItem.id === item.id);
  
      if (existingCartItem) {
        // If item already exists in cart, update its quantity
        const updatedCart = shoppingCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity +1 } : cartItem
        );
        setShoppingCart(updatedCart);
      } else {
        // If item doesn't exist in cart, add it
        const response = await fetch("http://localhost:5000/shoppingcart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        // If the add request was successful, update the shopping cart state
        setShoppingCart((prevCart) => [...prevCart, {...item, quantity:1}]);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };


  const selectItem = (item) => {
    return item;
  };


  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        addToCart,
        selectItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
