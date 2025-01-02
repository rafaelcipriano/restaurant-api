import { Router } from "express";
import { ProductControler } from "@/controllers/products-controller";

const productRoutes = Router()
const productsController = new ProductControler()

productRoutes.get("/", productsController.index)

export { productRoutes }