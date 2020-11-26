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


## Example codes for Editor SDK implementation

### [lib/shakr-api.js](lib/shakr-api.js)

This Node.js source file contains functions to acquire server-side token, and create a Render Session object with template\_style\_version\_id and edit\_token option.

### [lib/default-mapping-resources.json](lib/default-mapping-resources.json)

Default mapping resource file used for creating Render Session with prefilled editables.

### [public/index.html](public/index.html)

This HTML source file includes \<script\> tag of Editor SDK, code to create a new Shakr.Editor object and launching it.

### [public/media-library.json](public/media-library.json)

Example media library data for custom media library feature example.
Example images from [Unsplash](unsplash.com)
- https://unsplash.com/photos/12mi25fTAmM
- https://unsplash.com/photos/zwe--GYIZtc