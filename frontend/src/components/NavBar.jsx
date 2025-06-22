import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="w-full sticky top-0 bg-blue-600 text-white px-9 py-3 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="md:text-2xl text-lg font-bold">Cartify</h1>
        <ul className="flex gap-6 md:text-lg text-sm font-medium">
          
          <li>
            <NavLink
              to="/api/products"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 underline" : "hover:text-yellow-200"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-category"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 underline" : "hover:text-yellow-200"
              }
            >
              Add Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-product"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 underline" : "hover:text-yellow-200"
              }
            >
              Add Product
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 underline" : "hover:text-yellow-200"
              }
            >
              Cart
            </NavLink>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
