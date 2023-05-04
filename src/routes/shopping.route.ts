import express from "express"
import shoppingController from "../controllers/shopping.controller";

const router = express.Router()


router.get("/", shoppingController.getShoppings)
router.get("/:shoppingId", shoppingController.getShopping)
router.post("/", shoppingController.createShopping)
router.put("/update", shoppingController.updateShopping)
router.delete("/:shoppingId", shoppingController.deleteShopping)


export default router;