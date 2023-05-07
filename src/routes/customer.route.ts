import express from "express"
import customerController from "../controllers/customer.controller";

const router = express.Router()


router.get("/", customerController.getCustomers)
router.get("/:customerId", customerController.getCustomer)
router.post("/", customerController.createCustomer)
router.post("/login", customerController.login)
router.put("/update", customerController.updateCustomer)
router.delete("/:customerId", customerController.deleteCustomer)


export default router;