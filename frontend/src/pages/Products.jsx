import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get("/categories");
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // ✅ Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosInstance.get("/products");
        setAllProducts(data.products);
        setFilteredProducts(data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Filter products on category click
  const handleCategoryClick = (catName) => {
    setActiveCategory(catName);

    if (catName === "All") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (prod) => prod.category?.name?.toLowerCase() === catName.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="p-4">
      {/* 🔘 Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            activeCategory === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat._id}
            className={`px-4 py-2 rounded-md ${
              activeCategory === cat.name
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryClick(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 📦 Product Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
