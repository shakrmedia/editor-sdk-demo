const fetch = require('node-fetch');

const SHAKR_API_BASE_URL = 'https://api.shakr.com';

module.exports = class ShakrAPI {
    constructor({ client_id, client_secret }) {
        this.client_id = client_id;
        this.client_secret = client_secret;

        this.access_token = null;
    }

    get access_token_header() {
        return this.access_token ? 
            { 'Authorization': `Bearer ${this.access_token}` } :
            {};
    }

    async authorize() {
        if (this.access_token) {
            return;
        }

        const res = await this._request({
            url: '/oauth/token',
            method: 'POST',
            body: {
                client_id: this.client_id,
                client_secret: this.client_secret,
                grant_type: 'client_credentials'
            }
        });

        this.access_token = res.access_token;
    }

    async createEditToken(template_style_version_id, resources) {
        await this.authorize();

        const res = await this._request({
            url: '/v2/render_sessions',
            method: 'POST',
            body: {
                title: 'TESTING',
                mapping: {
                    template_style_version_id,
                    resources
                },
                edit_token: true
            }
        });

        return {
            render_session_id: res.render_session.id,
            edit_token: res.edit_token
        };
    }

    async _request({ url, method, body }) {
        const res = await fetch(
            `${SHAKR_API_BASE_URL}${url}`,
            {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...this.access_token_header
                },
                body: JSON.stringify(body)
            }
        );

        return await res.json();
    }
}