#!/usr/bin/env node

(async () => {
  const config = require('./config')
  const { remove, outputFile } = require('fs-extra')
  const P = require('path')

  await remove('dist')

  await Promise.all(Object.keys(config).map(name => outputFile(P.join('dist', `${name}.js`), `module.exports = ${config[name]}`)))
  await outputFile(P.join('dist', 'index.js'), Object.keys(config).map(name => `exports.${name} = require('./${name}')`).join('\n'))
})()
