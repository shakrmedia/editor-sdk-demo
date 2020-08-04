# editor-sdk-demo-nodejs

This is a usage example of Shakr's Editor SDK in Node.js.

> **⚠️ Note:** Shakr Editor SDK is only available to Shakr Beyond customers. Please contect your account representative to get your API credentials, including Client ID and Client Secret.

## System requirements

- Node.js 10 or up


## Usage

Shakr Editor SDK only allows embedding inside secure domain that uses HTTPS. When you're testing locally, either use a browser like **Firefox** which you can ignore certificate error and proceed, or launch Chrome with [--ignore-certificate-errors flag](https://superuser.com/a/1036062). Alternatively, you can modify the code to add your own self-signed certificate and add it to your system certificate store.

1. Install Node.js dependecies via `npm install` or `yarn install`.
1. Copy the example `.env` file (`.env.exmaple`) to `.env` and replace placeholders with your client ID, client secret and template\_style\_version\_id. You can use example template\_style\_version\_id `q6DNiM` on testing.
1. Run Node.js server via `npm run start` or `yarn start`.
1. Open `https://localhost:3000` in browser.
