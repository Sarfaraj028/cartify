import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"
import AddCategory from "./pages/AddCategory"
import AddProduct from "./pages/AddProduct"
import Cart from "./pages/Cart"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
