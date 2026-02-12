import {
  createProductService,
  deleteProductService,
  getProductService,
  getProductsService,
  updateProductService,
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
    console.log(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const UpdatedProduct = await updateProductService(id, req.body);

    res.status(200).json(UpdatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await deleteProductService(id);
    if (deletedProduct == 1) res.status(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
