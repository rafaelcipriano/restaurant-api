import { Router } from "express";
import { productRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";
import { tablesSessionsRoutes } from "./table-sessions-routes";

const routes = Router()

routes.use("/products", productRoutes)
routes.use("/tables", tablesRoutes)
routes.use("/tables-sessions", tablesSessionsRoutes)

export default routes