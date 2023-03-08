const withImages = require('next-images');

module.exports = withImages({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    REDUX_DEBUG: process.env.REDUX_DEBUG,
  },
  trailingSlash: true,
});
