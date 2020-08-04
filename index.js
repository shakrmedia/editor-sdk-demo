require('dotenv').config();

const fs = require('fs');
const express = require('express');

const ShakrAPI = require('./lib/shakr-api');
const generateCertificate = require('./lib/certificate');

const options = generateCertificate();
const app = express();
const shakrAPI = new ShakrAPI({
    client_id: process.env.SHAKR_CLIENT_ID,
    client_secret: process.env.SHAKR_CLIENT_SECRET
});

app.use(express.static('public'));

app.post('/api/videos', async (_, res) => {
    const edit_token_obj = await shakrAPI.createEditToken(process.env.SHAKR_TEMPLATE_STYLE_VERSION_ID);

    res.json(edit_token_obj);
});

require('https').createServer(options, app).listen(3000, () => {
    console.log('HTTPS server started at https://localhost:3000');
});
