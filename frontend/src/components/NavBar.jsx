import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full sticky top-0 bg-blue-600 text-white px-9 py-3 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="md:text-2xl text-lg font-bold">Cartify</h1>

        {/* Menu Icon - visible only on small screens */}
        <i
          onClick={() => setToggle(true)}
          className="ri-menu-3-line text-2xl cursor-pointer md:hidden"
        ></i>

        {/* Nav Links */}
        <ul
          className={`md:flex md:flex-row md:relative md:w-auto absolute md:p-0 top-0 right-0 w-full bg-blue-600 flex-col md:bg-transparent text-lg p-4 z-40 ${
            toggle ? "flex" : "hidden"
          }`}
        >
          {/* Close Icon - only on mobile */}
          <i
            onClick={() => setToggle(false)}
            className="ri-close-large-line absolute right-6 top-4 text-black bg-white p-1 px-2 rounded-full cursor-pointer md:hidden"
          ></i>

          <li className="p-2">
            <NavLink
              onClick={() => setToggle(false)}
              to="/api/products"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline"
                  : "hover:text-yellow-200"
              }
            >
              Products
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              onClick={() => setToggle(false)}
              to="/add-category"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline"
                  : "hover:text-yellow-200"
              }
            >
              Add Category
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              onClick={() => setToggle(false)}
              to="/add-product"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline"
                  : "hover:text-yellow-200"
              }
            >
              Add Product
            </NavLink>
          </li>
          <li className="relative p-2">
            <NavLink
              onClick={() => setToggle(false)}
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 underline"
                  : "hover:text-yellow-200"
              }
            >
              Cart
            </NavLink>
            {cart.length > 0 && (
              <span className="absolute -top-1 left-9 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
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
