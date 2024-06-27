const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to create a new product
router.post("/", productController.createProduct);

// Route to get all products
router.get("/", productController.getProducts);

// Additional routes can be added here

module.exports = router;
