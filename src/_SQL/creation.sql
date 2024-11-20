-- Create dataBase 
CREATE DATABASE PlusPet

-- Use dataBase
USE PlusPet

-- Create Categorias table
CREATE TABLE Categorias (
    Nombre VARCHAR(255) NOT NULL PRIMARY KEY
);

-- Create Subcategorias table
CREATE TABLE Subcategorias (
    Nombre VARCHAR(255) NOT NULL PRIMARY KEY
);

-- Create CategoriasSubcategorias relationship table
CREATE TABLE CategoriasSubcategorias (
	CategoriasSubcategoriasID INT PRIMARY KEY IDENTITY(1,1),
    CategoriaNombre VARCHAR(255),
    SubcategoriaNombre VARCHAR(255),
    UNIQUE (CategoriaNombre, SubcategoriaNombre),
    FOREIGN KEY (CategoriaNombre) REFERENCES Categorias(Nombre),
    FOREIGN KEY (SubcategoriaNombre) REFERENCES Subcategorias(Nombre)
);

-- Create Proveedores table
CREATE TABLE Proveedores (
    ProveedorID INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(255) NOT NULL,
    Contacto VARCHAR(255),
    Telefono VARCHAR(50),
    Email VARCHAR(255)
);

-- Create Productos table
CREATE TABLE Productos (
    ProductoID INT PRIMARY KEY IDENTITY(1,1),
    ProveedorID INT,
    CategoriaSubcategoriaID INT,
    Nombre VARCHAR(255) NOT NULL,
    Marca VARCHAR(255),
    Stock INT CHECK(Stock >= 0),
	Perece BIT,
	Fecha_Vencimiento DATE DEFAULT(NULL),
    FOREIGN KEY (ProveedorID) REFERENCES Proveedores(ProveedorID),
    FOREIGN KEY (CategoriaSubcategoriaID) REFERENCES CategoriasSubcategorias(CategoriasSubcategoriasID)
);