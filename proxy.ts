const { createProxyMiddleware } = require('http-proxy-middleware');

// Define the proxy middleware for your Nest.js API
const apiProxy = createProxyMiddleware('/api', {
  target: 'http://localhost:3001', // Replace with the URL of your Nest.js API
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove the '/api' prefix when making requests to the Nest.js API
  },
});

module.exports = function (app:any) {
  // Register the proxy middleware with your Nuxt.js app
  app.use(apiProxy);
};