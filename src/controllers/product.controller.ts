import { Request, Response } from "express";

class productController{

  static async getProducts(req: Request, res: Response){
    const {title, description, price} = req.body
  } 
}