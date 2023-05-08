import { NextFunction, Request, Response } from "express";
import productService from "../services/product.service";
import { IProduct } from "../@types/ProductType";

class productController {
  static async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await productService.getProducts());
    } catch (error) {
      next(error);
    }
  }

  static async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { productId } = req.params;
      res.json(await productService.getProduct(productId));
    } catch (error) {
      next(error);
    }
  }

  static async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, description, price } = req.body;

      const product: IProduct = { title, description, price };

      res.json(await productService.createproduct(product));
    } catch (error) {
      next(error);
    }
  }

  static async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, title, description, price } = req.body;
      const product: IProduct = { title, description, price };

      res.json(await productService.updateProduct(id, product));
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try{
      const { productId } = req.params;
      res.json(await productService.deleteProduct(productId));
    }catch(error){
      next(error);
    }
  }
}

export default productController;
