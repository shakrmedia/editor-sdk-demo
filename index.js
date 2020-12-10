require('dotenv').config();

const express = require('express');

const ShakrAPI = require('./lib/shakr-api');
const generateCertificate = require('./lib/certificate');

const SHAKR_TEMPLATE_STYLE_VERSION_ID = '8KX3s4';

const options = generateCertificate();
const app = express();
const shakrAPI = new ShakrAPI({
    client_id: process.env.SHAKR_CLIENT_ID,
    client_secret: process.env.SHAKR_CLIENT_SECRET
});

app.use(express.static('public'));
app.use(express.json());

app.post('/api/videos', async (req, res) => {
    const edit_token_obj = await shakrAPI.createEditToken(SHAKR_TEMPLATE_STYLE_VERSION_ID, req.body);

    res.json(edit_token_obj);
});

require('https').createServer(options, app).listen(3000, () => {
    console.log('HTTPS server started at https://localhost:3000');
});
