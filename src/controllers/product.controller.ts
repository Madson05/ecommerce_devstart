import { Request, Response } from "express";
import productService from "../services/product.service";

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

    res.json(await productService.createproduct(title, description, price));
  }

  static async updateProduct(req: Request, res: Response){
    const { id, title, description, price } = req.body;
    res.json(await productService.updateProduct(id, title, description, price));
  }
}

export default productController;
