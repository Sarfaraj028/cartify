import express from "express";
import { createProduct, getProduct } from "../controllers/products.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router()

router.post("/", upload.single("image"), createProduct)
router.get("/", getProduct)

export default router