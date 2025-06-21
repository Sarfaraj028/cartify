import React from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    const exists = cart.find((item) => item._id === product._id);
    if (exists) {
      toast.error("Product already in cart");
    } else {
      dispatch({ type: "ADD", payload: product });
    }
  };
  const { cart, dispatch } = useCart();

  return (
    <div className="border rounded-lg shadow hover:shadow-md transition p-2">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <div>
        {Array.from({ length: product.rating }, (_, i) => {
          return <span key={i}>⭐</span>;
        })}
      </div>
      <p>
        {product.description.length > 45
          ? product.description.slice(0, 45) + "..."
          : product.description}
      </p>
      <p className="text-gray-500">₹{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
