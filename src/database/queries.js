import { database } from "../config.js"

const queries = {
    createProduct: `
        INSERT INTO Productos (ProveedorID, CategoriaSubcategoriaID, Nombre, Marca, Stock, Perece, Fecha_Vencimiento)
        OUTPUT INSERTED.*
        VALUES (@ProveedorID, @CategoriaSubcategoriaID, @Nombre, @Marca, @Stock, @Perece, @Fecha_Vencimiento)
    `
};


export default queries;
