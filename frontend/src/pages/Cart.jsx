import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

//   total 
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   old total 
  const oldTotal = cart.reduce(
    (acc, item) => acc + item.oldPrice * item.quantity,
    0
  );
  const savings = oldTotal - total;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Cart Items */}
      <div className="md:col-span-2">
        <h2 className="text-xl font-bold mb-4">🛍️ Your Cart</h2>
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b py-4"
          >
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>{item.description}</p>
              <p> <span className="line-through text-xs mr-4">{item.oldPrice}</span> 
                ₹{item.price} × {item.quantity}
              </p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() =>
                    dispatch({ type: "DECREMENT", payload: item._id })
                  }
                  className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT", payload: item._id })
                  }
                  className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE", payload: item._id })
                  }
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>

            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded"
            />
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">💰 Total Summary</h2>
        <p>Price ₹{oldTotal}</p>
        <p>Discount ₹{oldTotal - total}</p>
        <p className="text-xl font-bold">Total: ₹{total}</p>
        <p className="text-green-700">
          You saveed: ₹{savings} on this order
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
