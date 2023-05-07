import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import { ICustomRequest } from "../@types/CustomRequest";

type jwtPayload = {
  id: string;
};

export const authMiddleware = async (
  req: ICustomRequest,
  res: Response,
  next: NextFunction
) => {
  const {authorization}  = req.headers;

  if (!authorization) {
    throw new Error("Não autorizado");
  }

  const token = authorization.split(" ")[1];

  const { id } = jwt.verify(
    token,
    process.env.TOKEN_SECRET || ""
  ) as jwtPayload;

  req.id = id;

  next();
};
