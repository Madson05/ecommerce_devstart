import express from "express"
import productController from "../controllers/product.controller";

const router = express.Router()


router.get("/", productController.getProducts)
router.get("/:productId", productController.getProduct)
router.post("/", productController.createProduct)


export default router;