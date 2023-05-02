import dotenv from 'dotenv';


dotenv.config();
import express from "express";

const port = process.env.APPLICATION_PORT || 3000;
const app = express();




app.listen(port, () => {
  console.log(`API STARTED ON PORT ${port}`)
})


