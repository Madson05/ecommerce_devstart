import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

type jwtPayload = {
  id: string;
};

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Não autorizado");
    }

    const token = authorization.split(" ")[1];

    const { id } = jwt.verify(
      token,
      process.env.TOKEN_SECRET || ""
    ) as jwtPayload;

    req.customerId = id;

    next();
  } catch (error) {
    next(error);
  }
};
