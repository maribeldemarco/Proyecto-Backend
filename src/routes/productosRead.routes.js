import { Router } from "express";
import { readProductosController, readProductosByCategoryController, readProductosBySubCategoryController, readProductosByProviderController, readProductosByPerishabilityController, readProductosByMaxDaysToPerishController } from  "../controllers/productosRead.controllers.js";

const router = Router()

router.get('/productos', readProductosController)
router.get('/productos/categoria/:category', readProductosByCategoryController)
router.get('/productos/subcategoria/:subcategory', readProductosBySubCategoryController)
router.get('/productos/proveedor/:provider', readProductosByProviderController)
router.get('/productos/perece/:option', readProductosByPerishabilityController)
router.get('/productos/dias-perece/:days', readProductosByMaxDaysToPerishController)

export default router