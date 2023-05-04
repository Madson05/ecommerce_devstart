import dotenv from 'dotenv';


dotenv.config();
import express from "express";
import productRouter from "./routes/product.route"
import customerRouter from "./routes/customer.route"
import shoppingRouter from "./routes/shopping.route"


const port = process.env.APPLICATION_PORT || 3000;
const app = express();


app.use(express.json())
app.use("/products", productRouter)
app.use("/customers", customerRouter)
app.use("/shoppings", shoppingRouter)

app.listen(port, () => {
  console.log(`API STARTED ON PORT ${port}`)
})


