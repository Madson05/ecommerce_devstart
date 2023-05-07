import express from "express"
import customerController from "../controllers/customer.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router()


router.get("/", customerController.getCustomers)
router.get("/:customerId", customerController.getCustomer)
router.post("/", customerController.createCustomer)
router.post("/login", customerController.login)
router.put("/update", authMiddleware, customerController.updateCustomer)
router.delete("/:customerId", customerController.deleteCustomer)


export default router;