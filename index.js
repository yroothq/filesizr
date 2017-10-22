#! /usr/bin/env node

var reporter = require('./src/reporter')
var files = require('./src/files')

reporter(files);