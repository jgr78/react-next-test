// next.config.js
//const withCSS = require('@zeit/next-css')
//module.exports = withCSS()
const withSass = require('@zeit/next-sass')
//module.exports = withSass();
module.exports = withSass({
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    }
  });