const express = require('express')
const router = express.Router();
const Product = require("../models/product.model.js")

// to get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({
            data: products,
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// to get product by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json({
            data: product,
        })
    } catch (error) {
        console.log('error : ', error)
        res.status(404).json({ message: "Product not found!" })
    }
})

// update the product by id
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            res.status(404).json({ message: "Product not found!" })
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json({ message: "Product updated successful", data: updatedProduct })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// delete the product by id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id)

        if (!product) {
            res.status(404).json({ message: "Product not found!" })
        }

        res.status(200).json({ message: "Product deleted successful!" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// add new product
router.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json({
            message: "Product created successful!",
            data: product,
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
