import { NextFunction, Request, Response } from "express";
import customerRepository from "../repositories/customer.repository";

export const accessMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { customerId } = req;

    const customer = await customerRepository.getCustomer(customerId);

    if (!customer) {
      throw new Error("Não autorizado");
    }

    if (!customer.canSell) {
      throw new Error("Não autorizado");
    }
    
    next();
  } catch (error) {
    next(error);
  }
};
