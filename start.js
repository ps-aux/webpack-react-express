#!/usr/bin/env node


const args = require('minimist')(process.argv.slice(2))
args.env=true

require('./server/bin/www')
require('./client/server')
