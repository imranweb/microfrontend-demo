const withTM = require('next-transpile-modules');
module.exports = withTM({
  //transpileModules: ['@myscope/shared']
  target:"serverless",
  //assetPrefix: 'http://localhost:5003',
  //assetPrefix: '/home'
  assetPrefix: 'https://home-app.imranweb.now.sh'
});