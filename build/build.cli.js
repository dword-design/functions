#!/usr/bin/env node

(async () => {
  const config = require('./config')
  const mapKeys = require('lodash/mapKeys')
  const mapValues = require('lodash/mapValues')
  const outputFiles = require('output-files')
  const { remove, appendFile } = require('fs-extra')
  const glob = require('glob-promise')

  await Promise.all((await glob('*.js')).map(filename => remove(filename)))

  await outputFiles(
    '.',
    mapKeys(
      mapValues(
        config,
        code => `module.exports = ${code}`
      ),
      (code, name) => `${name}.js`
    ),
  )

  await appendFile('.gitignore', '/*.js')
})()
