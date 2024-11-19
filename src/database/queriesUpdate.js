import { database } from "../config.js"

// Queries para la base de datos.

const updateProductos =`USE ${database};
    UPDATE Productos
    SET ProveedorID = @ProveedorID, 
        CategoriaSubcategoriaID = @CategoriaSubcategoriaID,  
        Nombre = @Nombre, 
        Marca = @Marca, 
        Stock = @Stock, 
        Perece = @Perece, 
        Fecha_Vencimiento = @Fecha_Vencimiento
    WHERE ProductoID = @ProductoID;` 
    
export default{updateProductos}