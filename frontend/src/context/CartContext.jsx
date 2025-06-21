import React,{ createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existing = state.find((item) => item._id === action.payload._id);
      if (existing) {
        return state.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case "INCREMENT":
      return state.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREMENT":
      return state.map((item) =>
        item._id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "REMOVE":
      return state.filter((item) => item._id !== action.payload);

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartContext
