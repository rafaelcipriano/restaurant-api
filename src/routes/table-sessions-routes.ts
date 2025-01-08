import { Router } from "express"

import { TableSessionsController } from "@/controllers/table-sessions-controller"

const tablesSessionsRoutes = Router()
const tableSessionsController = new TableSessionsController()

tablesSessionsRoutes.post("/", tableSessionsController.create)
tablesSessionsRoutes.get("/", tableSessionsController.index)

export { tablesSessionsRoutes }