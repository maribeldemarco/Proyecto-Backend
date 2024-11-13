import { updateProductoRepository } from "../repository/productosUpdate.repository.js";

const updateProductoService = (id, producto)=>{
    return updateProductoRepository(id, producto);
};

export { updateProductoService }