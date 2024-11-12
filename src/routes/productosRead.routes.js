import { Router } from "express";
import { readProductosController, readProductosByCategoryController } from  "../controllers/productosRead.controllers.js";

const router = Router()

router.get('/productos', readProductosController)
router.get('/productos/:category', readProductosByCategoryController)

export default router