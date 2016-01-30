'use strict'
const expect = require('chai').expect
const hexi = require('hexi')
const hexiDefault = require('..')

describe('hexi-default', function() {
  it('should register the plugin', function() {
    let server = hexi()

    return server.register(hexiDefault)
  })
})
