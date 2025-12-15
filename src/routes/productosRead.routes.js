import { Router } from "express";
import { readProductosController, readProductosByCategoryController, readProductosBySubCategoryController, readProductosByProviderController, readProductosByPerishabilityController, readProductosByMaxDaysToPerishController, readProductosByIdController, readCategoriasController, readSubcategoriasController, readProductosByCategoryAndSubcategoryController, readProveedoresController, readProductosByCategoryAndProviderController, readProductosBySubcategoryAndProviderController, readProductosByCategoryAndSubcategoryAndProviderController, readCategoriasSubcategoriasController } from  "../controllers/productosRead.controllers.js";

const router = Router()

// ✅ Rutas específicas PRIMERO (antes de las genéricas con :id)
router.get('/productos/categoria/:category', readProductosByCategoryController)
router.get('/productos/subcategoria/:subcategory', readProductosBySubCategoryController)
router.get('/productos/proveedor/:provider', readProductosByProviderController)
router.get('/productos/categoriaYsubcategoria/:category/:subcategory', readProductosByCategoryAndSubcategoryController)
router.get('/productos/categoriaYproveedor/:category/:provider', readProductosByCategoryAndProviderController)
router.get('/productos/subcategoriaYproveedor/:subcategory/:provider', readProductosBySubcategoryAndProviderController)
router.get('/productos/categoriaYsubcategoriaYproveedor/:category/:subcategory/:provider', readProductosByCategoryAndSubcategoryAndProviderController)
router.get('/productos/perece/:option', readProductosByPerishabilityController)
router.get('/productos/dias-perece/:days', readProductosByMaxDaysToPerishController)

// ✅ Ruta genérica AL FINAL
router.get('/productos/:id', readProductosByIdController)

// ✅ Ruta base de productos
router.get('/productos', readProductosController)

// Otras rutas
router.get('/categorias', readCategoriasController)
router.get('/subcategorias', readSubcategoriasController)
router.get('/proveedores', readProveedoresController)
router.get('/categoriassubcategorias', readCategoriasSubcategoriasController)

export default router