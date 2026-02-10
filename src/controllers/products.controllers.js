import {
  createProductService,
  getProductService,
  getProductsService,
} from "../services/productos.services.js";

export const getProductsController = async (req, res) => {
  const products = await getProductsService();
  res.status(201).json(products);
};

export const getProductController = async (req, res) => {
  const { id } = req.params;
  const product = await getProductService(id);
  res.status(201).json(product);
};

export const createProductController = async (req, res) => {
  try {
    const newProduct = await createProductService(req.body);
    res.status(201).json(newProduct);
    console.log(req.body)
  } catch (error) {
    res.status(500).json(error);
  }
};
