import { database } from "../config.js"

// Queries para la base de datos.
export const queriesRead = {
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
    readProductoById:
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
        FROM productos
        WHERE ProductoID = @id;`,
    readProductosByCategory:
        `USE ${database}
        SELECT cs.CategoriaNombre, p.Nombre, p.Marca, p.Stock,
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
    readProductosByCategoryAndSubCategory:
        `USE ${database}
        SELECT cs.CategoriaNombre, cs.SubcategoriaNombre, p.Nombre, p.Marca, p.Stock,
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
        WHERE cs.SubcategoriaNombre = @subcategory AND cs.CategoriaNombre = @category;`,
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
        WHERE pv.Nombre = @provider;`,
    readProductosByPerishablility:
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
        FROM productos
        WHERE Perece = @perishable;`,
    readProductosByMaxDaysToToPerish:
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
        FROM productos
        WHERE Perece = 1 AND Fecha_Vencimiento <= DATEADD(day, @days, GETDATE());`,
    readCategorias:
        `USE ${database};
        SELECT Nombre
        FROM categorias`,
    readSubcategorias:
        `USE ${database};
        SELECT Nombre
        FROM subcategorias`
}