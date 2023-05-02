import dotenv from 'dotenv';


dotenv.config();
import express from "express";
import productRouter from "./routes/product.route"

const port = process.env.APPLICATION_PORT || 3000;
const app = express();


app.use(express.json())
app.use("/products", productRouter)

app.listen(3033, () => {
  console.log(`API STARTED ON PORT ${3033}`)
})


