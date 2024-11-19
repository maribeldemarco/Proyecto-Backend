import { updateProductoRepository } from "../repository/productosUpdate.repository.js";

const updateProductoService = (id, producto)=>{
    console.log("estoy en el service");
    return updateProductoRepository(id, producto);
};

export { updateProductoService }