'use strict'
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const compress = require('compression')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')

module.exports = function(server, opts) {
  server.task('json-parser', bodyParser.json())
  server.task('url-encoded-parser', bodyParser.urlencoded({
    extended: true,
  }))

  server.task('method-override', methodOverride())
  server.task('compress', compress())
  server.task('cookie-parser', cookieParser())

  // Use helmet to secure Express headers
  server.task('helmet-xframe', helmet.xframe())
  server.task('helmet-xss-filter', helmet.xssFilter())
  server.task('helmet-no-sniff', helmet.nosniff())
  server.task('helmet-ie-no-open', helmet.ienoopen())
  server.task('helmet', [
    'helmet-xframe',
    'helmet-xss-filter',
    'helmet-no-sniff',
    'helmet-ie-no-open',
  ])

  server.task('default', [
    'cookie-parser',
    'method-override',
    'compress',
    'json-parser',
    'url-encoded-parser',
    'helmet',
  ])
}

module.exports.attributes = {
  pkg: require('./package.json'),
}
