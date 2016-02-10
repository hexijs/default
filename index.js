'use strict'
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const compress = require('compression')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')

module.exports = function(server, opts) {
  server.express.use(compress({
    filter: function(req, res) {
      return (/json|text|javascript|css|font|svg/)
        .test(res.getHeader('Content-Type'))
    },
    level: 9,
  }))

  let defMiddlewares = [
    bodyParser.json(),
    bodyParser.urlencoded({
      extended: true,
    }),
    methodOverride(),
    cookieParser(),
    helmet(),
  ]

  server.route.pre(function(next, opts) {
    if (opts.config.detached === true) return next(opts)

    opts.pre = opts.pre.concat(defMiddlewares)
    return next(opts)
  })

  server.decorate('defaultMiddleware', function(middleware) {
    defMiddlewares.push(middleware)
  })
}

module.exports.attributes = {
  pkg: require('./package.json'),
}
