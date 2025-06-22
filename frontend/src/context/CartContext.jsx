// CartContext.jsx
import React, { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existing = state.find((item) => item._id === action.payload._id);
      if (existing) {
        return state.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "INCREMENT":
      return state.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREMENT":
      return state
        .map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "REMOVE":
      return state.filter((item) => item._id !== action.payload);

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialCart);

  // 🟢 Save cart to localStorage on every change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
