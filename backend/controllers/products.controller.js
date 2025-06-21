import cloudinary from "../utils/cloudinary.js";
import Products from "../models/products.model.js";
import streamifier from "streamifier";

//create product
export const createProduct = async (req, res) => {
  const { category, title, description, price, oldPrice, rating, inStock } =
    req.body;

  try {
    if (
      !category ||
      !title ||
      !description ||
      !price ||
      !oldPrice ||
      !rating ||
      !inStock
    ) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ msg: "Image file is required" });
    }

    // ✅ Upload buffer to Cloudinary
    const uploadFromBuffer = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "products" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };

    const result = await uploadFromBuffer(req.file.buffer);

    const product = new Products({
      category,
      title,
      description,
      price,
      oldPrice,
      rating,
      inStock,
      image: result.secure_url, // ✅ Cloudinary image URL
    });

    await product.save();
    res.status(201).json({ msg: "Product created", product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await Products.find().populate("category");
    if (products.length === 0) {
      console.error("Products not Found!");
      return res.status(404).json({
        success: false,
        message: "No Products to Display!",
      });
    }
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error in getCategory:", error);
    res.status(500).json({
      success: false,
      message: "Server Error while fetching categories",
    });
  }
};
