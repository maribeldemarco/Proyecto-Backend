import { database } from "../config.js"

// Queries para la base de datos.
export const queriesRead = {
    readProductos: `
        USE ${database};
        SELECT pd.ProductoID, pd.Nombre, pd.Marca, pd.Stock,
        CASE
            WHEN pd.Perece = 1 THEN 'Si'
            ELSE 'No'
            END AS Perece,
        CASE
            WHEN pd.Fecha_Vencimiento IS NULL THEN '-'
            ELSE CONVERT(varchar, pd.Fecha_Vencimiento, 103)
            END AS Vencimiento,
        cs.CategoriaNombre, cs.SubcategoriaNombre,
        pv.Nombre as Proveedor
        FROM productos pd
        INNER JOIN CategoriasSubcategorias cs on pd.CategoriaSubcategoriaID = cs.CategoriasSubcategoriasID
        INNER JOIN proveedores pv on pd.ProveedorID = pv.ProveedorID
        `,
    readById: `pd.ProductoID = @id`,
    readByCategory: `cs.CategoriaNombre = @category`,
    readBySubcategory: `cs.SubcategoriaNombre = @subcategory`,
    readByProvider: `pv.Nombre = @provider`,
    readByPerishablility: `pd.Perece = @perishable;`,
    readByMaxDaysToPerish:`pd.Perece = 1 AND pd.Fecha_Vencimiento <= DATEADD(day, @days, GETDATE());`,
    readTable:
        `USE ${database};
        SELECT *
        FROM `,
}