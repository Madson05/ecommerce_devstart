import { NextFunction, Request, Response } from "express";

export function errorManipulator(error: Error, req: Request, res: Response, next: NextFunction){
  if(error instanceof Error){
    res.status(400).json({
      error: error.message
    })
  }
  res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
}