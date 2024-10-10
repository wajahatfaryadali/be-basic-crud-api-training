const express = require('express')
const router = express.Router();
const Product = require("../models/product.model.js")
const ProductController = require("../controllers/product.controller.js")

// to get all products
router.get('/', ProductController.getAllProducts)

// to get product by id
router.get('/:id', ProductController.getProductById)

// update the product by id
router.put('/:id', ProductController.updateProductById)

// delete the product by id
router.delete('/:id', ProductController.deleteProductById)

// add new product
router.post('/', ProductController.addProduct)

module.exports = router;
