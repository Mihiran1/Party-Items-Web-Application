import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the cart context
export const CartContext = createContext();

// Create a custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Create the cart provider component
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  // Total count of items in cart
  const [cartCount, setCartCount] = useState(0);
  
  // Update cart count whenever cartItems changes
  useEffect(() => {
    // Calculate total quantity of all items
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalQuantity);
    
    // Save to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Add item to cart
  const addToCart = (product, quantity = 1, color = "", size = "") => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        item => item.id === product.id && item.color === color && item.size === size
      );
      
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new item if it doesn't exist
        return [...prevItems, {
          ...product,
          quantity,
          color,
          size
        }];
      }
    });
  };
  
  // Remove item from cart
  const removeFromCart = (itemId, color = "", size = "") => {
    setCartItems(prevItems => 
      prevItems.filter(item => 
        !(item.id === itemId && item.color === color && item.size === size)
      )
    );
  };
  
  // Update item quantity
  const updateQuantity = (itemId, quantity, color = "", size = "") => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        (item.id === itemId && item.color === color && item.size === size)
          ? { ...item, quantity }
          : item
      )
    );
  };
  
  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  // Context value
  const value = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};