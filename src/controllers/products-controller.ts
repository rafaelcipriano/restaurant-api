import { NextFunction, Request, Response } from "express";

class ProductControler {
  async index(
    request: Request, 
    response: Response, 
    next: NextFunction
  ) {
    try {
      return response.json({ message: "Ok" })
    } catch (error) { 
      
    }
  }
}

export { ProductControler }