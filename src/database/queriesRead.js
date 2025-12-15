import { database } from "../config.js"

// Queries para la base de datos.
export const queriesRead = {
    readProductos: `
        SELECT pd.ProductoID, pd.Nombre, pd.Marca, pd.Stock,
        CASE
            WHEN pd.Perece = 1 THEN 'Si'
            ELSE 'No'
        END AS Perece,
        CASE
            WHEN pd.Fecha_Vencimiento IS NULL THEN '-'
            ELSE TO_CHAR(pd.Fecha_Vencimiento, 'DD/MM/YYYY')
        END AS Vencimiento,
        cs.*,
        pv.ProveedorID, pv.Nombre as Proveedor
        FROM productos pd
        INNER JOIN CategoriasSubcategorias cs on pd.CategoriaSubcategoriaID = cs.CategoriasSubcategoriasID
        INNER JOIN proveedores pv on pd.ProveedorID = pv.ProveedorID
        `,
    readById: `pd.ProductoID = $1`,
    readByCategory: `cs.CategoriaNombre = $1`,
    readBySubcategory: `cs.SubcategoriaNombre = $1`,
    readByProvider: `pv.Nombre = $1`,
    readByPerishablility: `pd.Perece = $1::integer`,  // ✅ CONVERSIÓN A INTEGER
    readByMaxDaysToPerish: `pd.Perece = 1 AND pd.Fecha_Vencimiento <= CURRENT_DATE + INTERVAL '$1 days'`,
    readTable: `SELECT * FROM `,
}