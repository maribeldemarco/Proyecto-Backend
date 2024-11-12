import { database } from "../config.js"

// Queries para la base de datos.
export default {
    readProductos: `USE ${database}; SELECT * FROM productos`,
    readProductosByCategory:
        `USE ${database}
        SELECT * FROM productos p
        INNER JOIN CategoriasSubcategorias cs on p.CategoriaSubcategoriaID = cs.CategoriasSubcategoriasID
        WHERE cs.CategoriaNombre = @category;`
}