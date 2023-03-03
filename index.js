require('dotenv').config();

const express = require('express');

const ShakrAPI = require('./lib/shakr-api');
const generateCertificate = require('./lib/certificate');

const SHAKR_TEMPLATE_STYLE_VERSION_ID = 'o08dHB';
const SHAKR_ASPECT_RATIO_VARIATON_VERSION_ID = 'n9rysW';

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

app.post('/api/videos/aspect_ratio_variation', async (req, res) => {
    const render_session = await shakrAPI.generateAspectRatioVariation(req.body.render_session_id, SHAKR_ASPECT_RATIO_VARIATON_VERSION_ID);

    res.json(render_session);
});

app.get('/api/videos/:id', async (req, res) => {
    const render_session = await shakrAPI.getRenderSession(req.params.id);

    res.json(render_session);
});

require('https').createServer(options, app).listen(3000, () => {
    console.log('HTTPS server started at https://localhost:3000');
});
