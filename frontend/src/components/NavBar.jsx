import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cartify</h1>
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 underline" : "hover:text-yellow-200"
              }
            >
              Home
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
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 underline" : "hover:text-yellow-200"
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
