const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const Product = require("./models/product.model.js");

app.get('/', (req, res) => {
    res.send('hello word updated')
})

// api to get all created prodcuts

app.get('/api/product', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({
            data: products,
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// api to add new product
app.post('/api/product', async (req, res) => {
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


mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Database Connected!')

        app.listen(PORT, () => {
            console.log(`app is listning on PORT ${PORT}`)
        })
    }).catch((err) => {
        console.log("error while connecting to DB ***: ", err)
    });