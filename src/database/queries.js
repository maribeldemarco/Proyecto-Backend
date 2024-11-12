import { database } from "../config.js"

// Queries para la base de datos.
export default {
    readProductos:
        `USE ${database};
        SELECT Nombre, Marca, Stock,
        CASE
            WHEN Perece = 1 THEN 'Si'
            ELSE 'No'
            END AS Perece,
        CASE
            WHEN Fecha_Vencimiento IS NULL THEN '-'
            ELSE CONVERT(varchar, Fecha_Vencimiento, 103)
            END AS Vencimiento
        FROM productos`,
    readProductosByCategory:
        `USE ${database}
        SELECT cs.CategoriaNombre, .p.Nombre, p.Marca, p.Stock,
        CASE
            WHEN p.Perece = 1 THEN 'Si'
            ELSE 'No'
            END AS Perece,
        CASE
            WHEN p.Fecha_Vencimiento IS NULL THEN '-'
            ELSE CONVERT(varchar, p.Fecha_Vencimiento, 103)
            END AS Vencimiento
        FROM productos p
        INNER JOIN CategoriasSubcategorias cs on p.CategoriaSubcategoriaID = cs.CategoriasSubcategoriasID
        WHERE cs.CategoriaNombre = @category;`,
    readProductosBySubCategory:
        `USE ${database}
        SELECT cs.SubcategoriaNombre, p.Nombre, p.Marca, p.Stock,
        CASE
            WHEN p.Perece = 1 THEN 'Si'
            ELSE 'No'
            END AS Perece,
        CASE
            WHEN p.Fecha_Vencimiento IS NULL THEN '-'
            ELSE CONVERT(varchar, p.Fecha_Vencimiento, 103)
            END AS Vencimiento
        FROM productos p
        INNER JOIN CategoriasSubcategorias cs on p.CategoriaSubcategoriaID = cs.CategoriasSubcategoriasID
        WHERE cs.SubcategoriaNombre = @subcategory;`,
    readProductosByProvider:
        `USE ${database}
        SELECT pv.Nombre as Proveedor, pd.Nombre, pd.Marca, pd.Stock,
        CASE
            WHEN pd.Perece = 1 THEN 'Si'
            ELSE 'No'
            END AS Perece,
        CASE
            WHEN pd.Fecha_Vencimiento IS NULL THEN '-'
            ELSE CONVERT(varchar, pd.Fecha_Vencimiento, 103)
            END AS Vencimiento
        FROM productos pd
        INNER JOIN proveedores pv on pd.ProveedorID = pv.ProveedorID
        WHERE pv.Nombre = @provider;`
}