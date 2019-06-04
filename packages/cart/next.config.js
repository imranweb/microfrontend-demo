const withTM = require('next-transpile-modules');
module.exports = withTM({
  //transpileModules: ['@myscope/shared']
  target:"serverless",
  //assetPrefix: '/cart'
  //assetPrefix: 'http://localhost:5002'
  assetPrefix: 'https://cart-app.imranweb.now.sh'
});