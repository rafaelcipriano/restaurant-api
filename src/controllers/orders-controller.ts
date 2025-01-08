import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex";
import { z } from "zod"
import { AppError } from "@/utils/AppError";

class OrdersController {
  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const bodySchema = z.object({
        table_session_id: z.number().int(),
        product_id: z.number().int(),
        quantity: z.number().positive(),
      })

      const { table_session_id, product_id, quantity } = bodySchema.parse(request.body)

      const session = await knex<TablesSessionsRepository>("table_sessions")
        .where({ id: table_session_id })
        .first()
      
      if(!session) {
        throw new AppError("session table not found", 404)
      }

      if(session.closed_at) {
        throw new AppError("this table is closed", 400)
      }

      const product = await knex<ProductRepository>("products")
        .where({ id: product_id })
        .first()

      if(!product) {
        throw new AppError("product not found", 404)
      }  

      await knex<OrderRepository>("orders").insert({
        table_session_id,
        product_id,
        quantity,
        price: product.price
      })

      return response.status(201).json(product)
    } catch (error) {
      next(error)
    }
  }

  async index(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { table_session_id } = request.params

      const order = await knex("orders")
        .select(
          "orders.id", 
          "orders.table_session_id", 
          "orders.product_id", 
          "products.name", 
          "orders.price",
          "orders.quantity",
          knex.raw("(orders.price * orders.quantity) AS total"),
          "orders.created_at",
          "orders.updated_at"
        )
        .join("products", "products.id", "orders.product_id")
        .where({ table_session_id })
        .orderBy("orders.created_at", "desc")

      return response.json(order)
    } catch (error) {
      next(error)
    }
  }
}

export { OrdersController }