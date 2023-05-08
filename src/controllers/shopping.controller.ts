import { NextFunction, Request, Response } from "express";
import shoppingService from "../services/shopping.service";
import { IShopping } from "../@types/ShoppingType";

class shoppingController {
  static async getShoppings(req: Request, res: Response, next: NextFunction) {
    try {
      const customerId = req.customerId;
      res.json(await shoppingService.getShoppings(customerId));
    } catch (error) {
      next(error);
    }
  }

  static async getShopping(req: Request, res: Response, next: NextFunction) {
    try {
      const customerId = req.customerId;
      const { shoppingId } = req.params;
      res.json(await shoppingService.getShopping(shoppingId, customerId));
    } catch (error) {
      next(error);
    }
  }

  static async createShopping(req: Request, res: Response, next: NextFunction) {
    try {
      const { amount, address, payed_at, product_id } = req.body;
      const customer_id = req.customerId;
      const shopping: IShopping = {
        amount,
        address,
        payed_at,
        product_id,
        customer_id,
      };
      res.json(await shoppingService.createshopping(shopping));
    } catch (error) {
      next(error);
    }
  }

  static async updateShopping(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, amount, address, payed_at, product_id } = req.body;
      const customer_id = req.customerId;
      const shopping: IShopping = {
        amount,
        address,
        payed_at,
        product_id,
        customer_id,
      };

      res.json(await shoppingService.updateShopping(id, shopping));
    } catch (error) {
      next(error);
    }
  }

  static async deleteShopping(req: Request, res: Response, next: NextFunction) {
    try {
      const customerId = req.customerId;
      const { shoppingId } = req.params;
      res.json(await shoppingService.deleteShopping(shoppingId, customerId));
    } catch (error) {
      next(error);
    }
  }
}

export default shoppingController;
