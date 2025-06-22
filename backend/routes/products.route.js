import express from "express";
import { createProduct, getProduct } from "../controllers/products.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router()

router.get("/", getProduct)
router.post("/", upload.single("image"), createProduct)

export default router