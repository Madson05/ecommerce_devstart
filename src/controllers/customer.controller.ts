import { Request, Response } from "express";
import customerService from "../services/customer.service";
import {ICustomer} from "../@types/CustomerType"
import bcrypt from "bcrypt"

class customerController {
  static async getCustomers(req: Request, res: Response) {
    res.json(await customerService.getCustomers());
  }

  static async getCustomer(req: Request, res: Response) {
    const {customerId} = req.params;
    res.json(await customerService.getCustomer(customerId));
  }

  static async createCustomer(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const customer: ICustomer = {name, email, password: hashPassword}

    res.json(await customerService.createcustomer(customer, email));
  }

  static async updateCustomer(req: Request, res: Response){
    const { id, name, email, password } = req.body;
    const customer: ICustomer = {name, email, password}

    res.json(await customerService.updateCustomer(id, customer));
  }

  static async deleteCustomer(req: Request, res: Response){
    const { customerId } = req.params;
    res.json(await customerService.deleteCustomer(customerId));
  }
}

export default customerController;
