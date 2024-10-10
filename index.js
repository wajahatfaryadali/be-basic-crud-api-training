const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello word')
})

app.listen(PORT, () => {
    console.log(`app is listning on PORT ${PORT}`)
})
