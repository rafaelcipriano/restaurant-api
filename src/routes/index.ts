import { Router } from "express";
import { productRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";
import { tablesSessionsRoutes } from "./table-sessions-routes";
import { ordersRoutes } from "./orders-routes";

const routes = Router()

routes.use("/products", productRoutes)
routes.use("/tables", tablesRoutes)
routes.use("/tables-sessions", tablesSessionsRoutes)
routes.use("/orders", ordersRoutes)

export default routes