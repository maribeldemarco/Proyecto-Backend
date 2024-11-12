import { Router } from "express";
import { readProductosController, readProductosByCategoryController, readProductosBySubCategoryController } from  "../controllers/productosRead.controllers.js";

const router = Router()

router.get('/productos', readProductosController)
router.get('/productos/categoria/:category', readProductosByCategoryController)
router.get('/productos/subcategoria/:subcategory', readProductosBySubCategoryController)

export default router