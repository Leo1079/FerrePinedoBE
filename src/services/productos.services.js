import { pool } from "../db.js";

export const getProductsService = async () => {
  const [products] = await pool.query("SELECT * FROM PRODUCTOS");
  return products;
};

export const getProductService = async (idProducto) => {
  const [product] = await pool.query(
    "SELECT * FROM PRODUCTOS WHERE id_producto = ?",
    idProducto
  );
  return product;
};

export const createProductService = async (newProduct) => {
  const { nombre, precio, unidad_medida, stock, activo } = newProduct;

  const [res] = await pool.query(
    "INSERT INTO productos (nombre,precio,unidad_medida,stock,activo) VALUES (?,?,?,?,?)",
    [nombre, precio, unidad_medida, stock, activo]
  );

  return {
    id_producto: res.insertId,
    ...newProduct
  };
};
