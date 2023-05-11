import express from "express"
import productController from "../controllers/product.controller";
import { accessMiddleware } from "../middlewares/accessMiddleware";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router()


router.get("/", productController.getProducts)
router.get("/:productId", productController.getProduct)
router.post("/",authMiddleware, accessMiddleware, productController.createProduct)
router.put("/update",authMiddleware, accessMiddleware, productController.updateProduct)
router.delete("/:productId",authMiddleware, accessMiddleware, productController.deleteProduct)


export default router;