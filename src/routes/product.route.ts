import express from "express"
import productController from "../controllers/product.controller";

const router = express.Router()


router.get("/", productController.getProducts)
router.get("/:productId", productController.getProduct)
router.post("/", productController.createProduct)
router.put("/update", productController.updateProduct)
router.delete("/:productId", productController.deleteProduct)


export default router;