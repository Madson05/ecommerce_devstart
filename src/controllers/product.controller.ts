import { Request, Response } from "express";
import productService from "../services/product.service";

class productController{

  static async createProduct(req: Request, res: Response){
    const {title, description, price} = req.body;

    const product = {title, description, price}

    res.json( await productService.createproduct(title, description, price))
  } 

  static async getProducts(req: Request, res: Response){
    res.json(await productService.getProducts());
  }
}

export default productController