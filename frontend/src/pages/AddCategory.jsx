import React, { useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { toast } from 'react-toastify'

const CategoryForm = () => {
  const [category, setCategory] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!category.trim()) {
      return toast.error("Please enter a category name")
    }
    if(category.length < 2 ) return toast.error("Length must me atleast 3 characters!")

    try {
      const { data } = await axiosInstance.post("/categories", {
        name: category.trim(),
      })
      toast.success(`Category "${data.category.name}" added successfully!`)
      setCategory("")
    } catch (error) {
      console.error(error)
      const msg =
        error?.response?.data?.msg || "Error: Couldn't add category!"
      toast.error(msg)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Add Category</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)} 
          placeholder="Enter category name"
          className="border px-4 py-2 rounded-md outline-0 focus:border-blue-400 focus:border-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add Category
        </button>
      </form>
    </div>
  )
}

export default CategoryForm
