import { Router } from "express";
import { ProductControler } from "@/controllers/products-controller";

const productRoutes = Router()
const productsController = new ProductControler()

productRoutes.get("/", productsController.index)
productRoutes.post("/", productsController.create)
productRoutes.put("/:id", productsController.update)
productRoutes.delete("/:id", productsController.delete)

export { productRoutes }