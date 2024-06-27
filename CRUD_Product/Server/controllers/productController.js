const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving products:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// Add more controller functions as needed

module.exports = {
  createProduct,
  getProducts,
};
