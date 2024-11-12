INSERT INTO Categorias (Nombre) VALUES
	('Perros'),
	('Gatos'),
	('Conejos'),
	('Peces'),
	('Aves'),
	('Roedores')
;

INSERT INTO Subcategorias (Nombre) VALUES
	('Alimentos'),
	('Accesorios'),
	('Estética e Higiene'),
	('Salud')
;

INSERT INTO CategoriasSubcategorias (CategoriaNombre, SubcategoriaNombre) VALUES
	('Perros', 'Alimentos'), ('Perros', 'Accesorios'), ('Perros', 'Estética e Higiene'), ('Perros', 'Salud'),
	('Gatos', 'Alimentos'), ('Gatos', 'Accesorios'), ('Gatos', 'Estética e Higiene'), ('Gatos', 'Salud'),
	('Conejos', 'Alimentos'), ('Conejos', 'Accesorios'), ('Conejos', 'Estética e Higiene'), ('Conejos', 'Salud'),
	('Peces', 'Alimentos'), ('Peces', 'Accesorios'), ('Peces', 'Estética e Higiene'), ('Peces', 'Salud'),
	('Aves', 'Alimentos'), ('Aves', 'Accesorios'), ('Aves', 'Estética e Higiene'), ('Aves', 'Salud'),
	('Roedores', 'Alimentos'), ('Roedores', 'Accesorios'), ('Roedores', 'Estética e Higiene'), ('Roedores', 'Salud')
;

INSERT INTO Proveedores (Nombre, Contacto, Telefono, Email) VALUES
	('PetWorld', 'Laura Fernández', '1144321122', 'laura@petworld.com'),
    ('Mascotas Felices', 'Pedro García', '1156782345', 'pedro@mascotasfelices.com'),
    ('Animalia', 'Sofía López', '1167823456', 'sofia@animalia.com'),
    ('ZooPlus', 'Juan Romero', '1178432921', 'juan@zooplus.com'),
    ('Happy Pets', 'Ana Torres', '1189043567', 'ana@happypets.com'),
    ('Pet Kingdom', 'Carlos Mendoza', '1195632341', 'carlos@petkingdom')
;

INSERT INTO Productos (ProveedorID, CategoriaSubcategoriaID, Nombre, Marca, Stock, Perece) VALUES
	(1, 1, 'Alimento Premium para Perros', 'DogLife', 50, 0),
    (5, 5, 'Jaula para Aves', 'BirdHome', 10, 0),
    (6, 6, 'Alimento para Roedores', 'Rodentia', 25, 0),
    (7, 7, 'Pelota para Perros', 'PetFun', 100, 0)
;

INSERT INTO Productos (ProveedorID, CategoriaSubcategoriaID, Nombre, Marca, Stock, Perece, Fecha_Vencimiento) VALUES
	(2, 2, 'Collar Antipulgas para Gatos', 'CatSafe', 30, 1, '2024-02-20'),
	(3, 3, 'Shampoo para Conejos', 'BunnyClean', 20, 1, '2024-03-15'),
	(4, 4, 'Antiparasitario para Peces', 'FishGuard', 15, 1, '2024-04-10')
;