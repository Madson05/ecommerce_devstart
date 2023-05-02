import { Request, Response } from "express";
import productService from "../services/product.service";

class productController{

  static async getProducts(req: Request, res: Response){
    res.json(await productService.getProducts());
  }

  static async getProduct(req: Request, res: Response){
    const productId = req.params.productId;
    console.log(productId)
    res.json(await productService.getProduct(productId));
  }

  static async createProduct(req: Request, res: Response){
    const {title, description, price} = req.body;

    const product = {title, description, price}

    res.json( await productService.createproduct(title, description, price))
  } 
}

export default productController