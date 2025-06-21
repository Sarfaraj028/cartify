import Category from "../models/categories.model.js";

//get categories
export const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      console.error("Categories not Found!");
      return res.status(404).json({
        success: false,
        message: "No Categories to Display!",
      });
    }
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error("Error in getCategory:", error);
    res.status(500).json({
      success: false,
      message: "Server Error while fetching categories",
    });
  }
};

//post categories
export const createCategory = async (req, res) => {
  try {
    console.log("body: ",req.body);
    console.log("headers: ",req.headers);
    const { name }  = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    // Check if category already exists
    const existing = await Category.findOne({ name });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await Category.create({ name });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({
      success: false,
      message: "Server Error while creating category",
    });
  }
};
