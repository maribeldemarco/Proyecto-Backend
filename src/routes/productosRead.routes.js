import { Router } from "express";
import { readProductosController, readProductosByCategoryController, readProductosBySubCategoryController, readProductosByProviderController } from  "../controllers/productosRead.controllers.js";

const router = Router()

router.get('/productos', readProductosController)
router.get('/productos/categoria/:category', readProductosByCategoryController)
router.get('/productos/subcategoria/:subcategory', readProductosBySubCategoryController)
router.get('/productos/proveedor/:provider', readProductosByProviderController)

export default router