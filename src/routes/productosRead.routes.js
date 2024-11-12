import { Router } from "express";
import { readProductosController } from  "../controllers/productosRead.controllers.js";

const router = Router()

router.get('/productos', readProductosController)

export default router