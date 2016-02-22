'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const beforeEach = require('mocha').beforeEach
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const hexi = require('hexi')
const hexiDefault = require('..')
const request = require('supertest')

chai.use(require('sinon-chai'))

describe('hexi-default', function () {
  let server

  beforeEach(function () {
    server = hexi()

    return server.register(hexiDefault)
  })

  it('should register new default handler', function (done) {
    server.beforeHandler((req, res, next) => done())

    server.route({
      method: 'GET',
      path: '/',
    })

    request(server.express)
      .get('/')
      .expect(200, function () {})
  })

  it('should not call default handlers when detached', function (done) {
    const defaultMiddleware = sinon.spy((req, res, next) => next())
    server.beforeHandler(defaultMiddleware)

    server.route({
      method: 'GET',
      path: '/',
      config: {
        detached: true,
      },
    })

    request(server.express)
      .get('/')
      .expect(200, function () {
        expect(defaultMiddleware).to.not.have.been.called
        done()
      })
  })
})
