import { Request, Response } from "express";
import productService from "../services/product.service";

class productController{

  static async createProduct(req: Request, res: Response){
    const {title, description, price} = req.body;

    const product = {title, description, price}

    res.send( await productService.createproduct(title, description, price))
  } 
}

export default productController