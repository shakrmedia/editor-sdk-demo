# editor-sdk-demo-nodejs

This is a usage example of Shakr's Editor SDK in Node.js.

> **⚠️ Note:** Shakr Editor SDK is only available to Shakr Beyond customers. Please contect your account representative to get your API credentials, including Client ID and Client Secret.

## System requirements

- Node.js 10 or up


## Usage

Shakr Editor SDK only allows embedding inside secure domain that uses HTTPS. When you're testing locally, either use a browser like **Firefox** which you can ignore certificate error and proceed, or launch Chrome with [--ignore-certificate-errors flag](https://superuser.com/a/1036062). Alternatively, you can modify the code to add your own self-signed certificate and add it to your system certificate store.

1. Install Node.js dependecies via `npm install` or `yarn install`.
1. Copy the example `.env` file (`.env.exmaple`) to `.env` and replace placeholders with your client ID, client secret.
1. Run Node.js server via `npm run start` or `yarn start`.
1. Open `https://localhost:3000` in browser.

## Example Video Design
[Contemporary Estates-Square](https://go.shakr.com/t/contemporary-estates-square/zAGdhN/NaPdiw)

## Example codes

### [lib/shakr-api.js](lib/shakr-api.js)

This Node.js source file contains functions to acquire server-side token, and create a Render Session object with template\_style\_version\_id and edit\_token option.

### [public/media-library.json](public/media-library.json)

Example media library data for custom media library feature example.
Example images from [Unsplash](unsplash.com)
- https://unsplash.com/photos/12mi25fTAmM
- https://unsplash.com/photos/zwe--GYIZtc

### Example Client

#### [Basic](public/examples/basic)
Most basic example that has codes to launch Shakr Editor with SDK.

#### [Theme Customization](public/examples/theme-customize)
Example code to launch SDK Shakr Editor with customized theme.

#### [Wait Rendering](public/examples/wait-rendering)
Example code to show render progress after finishing editing session and display download link after closing Shakr Editor.

#### [Prefill Resources](public/examples/prefill-resources)
This example has codes to prefill resource before launching Shakr Editor.

#### [media-library](public/examples/media-library)
This example has codes to inject custom media library data into Shakr Editor UI.

#### [media-library-custom](public/examples/media-library-custom)
This example has codes to show custom UI for media library.
