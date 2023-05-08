import express from "express"
import shoppingController from "../controllers/shopping.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router()


router.get("/", authMiddleware, shoppingController.getShoppings)
router.get("/:shoppingId",authMiddleware, shoppingController.getShopping)
router.post("/",authMiddleware, shoppingController.createShopping)
router.put("/update",authMiddleware, shoppingController.updateShopping)
router.delete("/:shoppingId",authMiddleware, shoppingController.deleteShopping)


export default router;