# hexi-default

Adds some default middlewares to hexi's express app

[![Dependency Status](https://david-dm.org/hexijs/default/status.svg?style=flat)](https://david-dm.org/hexijs/default)
[![Build Status](https://travis-ci.org/hexijs/default.svg?branch=master)](https://travis-ci.org/hexijs/default)
[![npm version](https://badge.fury.io/js/hexi-default.svg)](http://badge.fury.io/js/hexi-default)
[![Coverage Status](https://coveralls.io/repos/hexijs/default/badge.svg?branch=master&service=github)](https://coveralls.io/github/hexijs/default?branch=master)


## Installation

This module is installed via npm:

``` bash
$ npm install hexi-default
```


## Example Usage

``` js
const hexi = require('hexi')
const hexiDefault = require('hexi-default')

let server = hexi()

hexi.register(hexiDefault)
```


## License

MIT
