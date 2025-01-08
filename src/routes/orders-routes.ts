import { Router } from "express";
import { OrdersController } from "@/controllers/orders-controller"; 

const ordersRoutes = Router()
const ordersController = new OrdersController()


ordersRoutes.use("/", ordersController.create)

export { ordersRoutes }