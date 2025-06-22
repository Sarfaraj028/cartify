import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import NoPage from "./pages/NoPage"
import AddCategory from "./pages/AddCategory"
import AddProduct from "./pages/AddProduct"
import Cart from "./pages/Cart"
import Products from "./pages/Products"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="/api/products" element={<Products />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
