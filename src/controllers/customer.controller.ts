import { NextFunction, Request, Response } from "express";
import customerService from "../services/customer.service";
import { ICustomer } from "../@types/CustomerType";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class customerController {
  static async getCustomers(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await customerService.getCustomers());
    } catch (error) {
      next(error);
    }
  }

  static async getCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const customerId = req.customerId;
      res.json(await customerService.getCustomer(customerId));
    } catch (error) {
      next(error);
    }
  }

  static async createCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      const customer: ICustomer = { name, email, password: hashPassword };

      res.json(await customerService.createcustomer(customer, email));
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const customer = await customerService.getCustomerByEmail(email);
      if (!customer) {
        throw new Error("Email ou senha inválidos");
      }

      const verifyPass = await bcrypt.compare(password, customer.password);

      if (!verifyPass) {
        throw new Error("Email ou senha inválidos");
      }

      const token = jwt.sign(
        { id: customer.id },
        process.env.TOKEN_SECRET || "",
        {
          expiresIn: "1h",
        }
      );

      const { password: _, ...customerLogin } = customer;

      res.json({
        user: customerLogin,
        token,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.customerId;
      const { name, email, password } = req.body;
      const customer: ICustomer = { name, email, password };

      res.json(await customerService.updateCustomer(id, customer));
    } catch (error) {
      next(error);
    }
  }

  static async deleteCustomer(req: Request, res: Response, next: NextFunction) {
    try{
      const customerId = req.customerId;
      res.json(await customerService.deleteCustomer(customerId));
    }catch(error){
      next(error)
    }
  }
}

export default customerController;
