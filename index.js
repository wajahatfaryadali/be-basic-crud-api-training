const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;
const ProductRoute = require("./routes/product.route.js");

// middlewares
app.use(express.json());

// routes
app.use('/api/product', ProductRoute)

app.get('/', (req, res) => {
    res.send('hello word updated')
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
