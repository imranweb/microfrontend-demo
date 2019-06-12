const withTM = require('next-transpile-modules');
module.exports = withTM({
  //transpileModules: ['@myscope/shared']
  target:"serverless",
  assetPrefix: 'https://product-app.imranweb.now.sh'
});