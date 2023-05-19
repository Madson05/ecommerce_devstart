import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function errorManipulator(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ZodError) {
    res.status(400).json({
      error: error.issues[0].message,
    });
  }

  else if (error instanceof Error) {
    res.status(400).json({
      error: error.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}
