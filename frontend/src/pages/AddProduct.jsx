import React from "react"
import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"
import { toast } from "react-toastify"

const ProductForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    oldPrice: "",
    rating: "",
    inStock: "",
    category: "",
  })

  const [image, setImage] = useState(null)
  const [categories, setCategories] = useState([])

  // 🟡 Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/categories")
        setCategories(res.data.categories)
      } catch (error) {
        console.error(error)
        toast.error("❌ Failed to load categories")
      }
    }

    fetchCategories()
  }, [])

  // 🟢 Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // 📤 Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!image) return toast.error("⚠️ Please select an image")

    try {
      const data = new FormData()
      for (let key in form) {
        data.append(key, form[key])
      }
      data.append("image", image)

      await axiosInstance.post("/products", data)
      toast.success("✅ Product added successfully")
      setForm({
        title: "",
        description: "",
        price: "",
        oldPrice: "",
        rating: "",
        inStock: "",
        category: "",
      })
      setImage(null)
    } catch (err) {
      console.error(err)
      toast.error("❌ Failed to add product")
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-6 bg-white shadow-md p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">📦 Add Product</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 rounded focus:border-blue-400 focus:border-2"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 rounded outline-0 focus:border-blue-400 focus:border-2"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded outline-0 focus:border-blue-400 focus:border-2"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 rounded outline-0 focus:border-blue-400 focus:border-2"
          required
        />

        <input
          type="number"
          name="oldPrice"
          placeholder="Old Price"
          value={form.oldPrice}
          onChange={handleChange}
          className="border p-2 rounded outline-0 focus:border-blue-400 focus:border-2"
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={handleChange}
          className="border p-2 rounded outline-0 focus:border-blue-400 focus:border-2"
          required
        />

        <input
          type="number"
          name="inStock"
          placeholder="In Stock"
          value={form.inStock}
          onChange={handleChange}
          className="border p-2 rounded outline-0 focus:border-blue-400 focus:border-2"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 rounded outline-0 focus:border-blue-400 focus:border-2"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default ProductForm
