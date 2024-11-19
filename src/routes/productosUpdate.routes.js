import { Router } from "express";
import { updateProductoController } from "../controllers/productosUpdate.controllers.js";

const router = Router()

router.put('/productos/:id', updateProductoController)


export default router