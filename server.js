require('dotenv').config();
const express = require('express');
const packageJson = require('./package.json');

const app = new express();

const IP = process.env.IP || '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/giftcards', (req, res) => {
    res.json({
        message: 'Hello and welcome!',
        version: packageJson.version,
    });
})

app.listen(PORT, IP, () => {
    console.log(`Gift Card REST API (v${packageJson.version}) listening at http://${IP}:${PORT}`);
});