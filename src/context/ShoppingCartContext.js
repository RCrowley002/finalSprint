import React, { createContext, useEffect, useContext, useState } from "react";

const ShoppingCartContext = createContext();

const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }

  return context;
};

export { useShoppingCart };

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
      const existingCartItem = shoppingCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItem) {
        // If item already exists in cart, update its quantity
        const updatedCart = shoppingCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        setShoppingCart(updatedCart);
        // Update the quantity on the server

        await fetch(`http://localhost:5000/shoppingcart/${item.id}`, {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          }),
        });
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
        setShoppingCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  // to remove an item from your cart
<<<<<<< HEAD

=======
>>>>>>> 7f6fd89861cb527d5f72d2491159020f840f254f
  const deleteFromCart = async (item) => {
    if (item.quantity === 0) {
      await fetch(`http://localhost:5000/shoppingcart/${item.id}`, {
        method: "DELETE",
      });
<<<<<<< HEAD

=======
>>>>>>> 7f6fd89861cb527d5f72d2491159020f840f254f
      setShoppingCart((prevCart) =>
        prevCart.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      const response = await fetch(
        `http://localhost:5000/shoppingcart/${item.id}`,
<<<<<<< HEAD

        {
          method: "PUT",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(item),
        }
      );

      if (!response.ok) {
        console.error("Error updating item quantity:", response);

        return;
      }

=======
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        }
      );
      if (!response.ok) {
        console.error("Error updating item quantity:", response);
        return;
      }
>>>>>>> 7f6fd89861cb527d5f72d2491159020f840f254f
      setShoppingCart((prevCart) =>
        prevCart.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
      );
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        deleteFromCart,
        setShoppingCart,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
