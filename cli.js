#!/usr/bin/env node

var path = require('path')
var check = require('./')

var args = require('minimist')(process.argv.slice(2))
if (args._.length === 0) {
  console.log('Usage: dependency-check <path to package.json or module folder>')
  process.exit(1)
}
check(args._[0], function(err, results) {
  if (err) throw err
  if (results.length === 0) {
    console.log('All dependencies are in package.json!')
    process.exit(0)
  } else {
    console.error('Dependencies not listed in package.json: ' + results.join(', '))
    process.exit(1)
  }
})