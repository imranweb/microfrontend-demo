const withTM = require('next-transpile-modules');
module.exports = withTM({
  //transpileModules: ['@myscope/shared']
  target:"serverless",
  assetPrefix: 'https://cart-app.imranweb.now.sh/'
});