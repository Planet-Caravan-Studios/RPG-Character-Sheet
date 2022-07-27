const path = require('path')

module.exports = {
  //distDir: 'build',
  serverRuntimeConfig: {
    // Will only be available on the server side
    //mySecret: 'secret',
    //secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/fonts',
  },
  images: {
    loader: 'imgix',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}