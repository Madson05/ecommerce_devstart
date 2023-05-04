import { Request, Response } from "express";
import shoppingService from "../services/shopping.service";
import {IShopping} from "../@types/ShoppingType"

class shoppingController {
  static async getShoppings(req: Request, res: Response) {
    res.json(await shoppingService.getShoppings());
  }

  static async getShopping(req: Request, res: Response) {
    const {shoppingId} = req.params;
    res.json(await shoppingService.getShopping(shoppingId));
  }

  static async createShopping(req: Request, res: Response) {
    const { amount, address, payed_at, product_id, customer_id } = req.body;

    const shopping: IShopping = {amount, address, payed_at, product_id, customer_id}

    res.json(await shoppingService.createshopping(shopping));
  }

  static async updateShopping(req: Request, res: Response){
    const { id, amount, address, payed_at, product_id, customer_id } = req.body;
    const shopping: IShopping = {amount, address, payed_at, product_id, customer_id}

    res.json(await shoppingService.updateShopping(id, shopping));
  }

  static async deleteShopping(req: Request, res: Response){
    const { shoppingId } = req.params;
    res.json(await shoppingService.deleteShopping(shoppingId));
  }
}

export default shoppingController;
