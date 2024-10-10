const express = require('express');
const app = express();

require('dotenv').config()

const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;

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