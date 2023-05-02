import { Request, Response } from "express";
import productService from "../services/product.service";
import {IProduct} from "../@types/ProductType"

class productController {
  static async getProducts(req: Request, res: Response) {
    res.json(await productService.getProducts());
  }

  static async getProduct(req: Request, res: Response) {
    const productId = req.params.productId;
    res.json(await productService.getProduct(productId));
  }

  static async createProduct(req: Request, res: Response) {
    const { title, description, price } = req.body;

    const product: IProduct = {title, description, price}

    res.json(await productService.createproduct(product));
  }

  static async updateProduct(req: Request, res: Response){
    const { id, title, description, price } = req.body;
    const product: IProduct = {title, description, price}

    res.json(await productService.updateProduct(id, product));
  }
}

export default productController;
