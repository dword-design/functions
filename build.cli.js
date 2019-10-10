#!/usr/bin/env node

(async () => {
  const config = require('./config')
  const mapKeys = require('lodash/mapKeys')
  const mapValues = require('lodash/mapValues')
  const values = require('lodash/values')
  const outputFiles = require('output-files')
  const { remove } = require('fs-extra')
  const endent = require('endent')

  await remove('dist')

  outputFiles(
    'dist',
    {
      'index.js': endent`
        module.exports = {
          ${values(mapValues(config, (code, name) => `${name}: ${code}`)).join(',\n')}
        }
      `,
      ...mapKeys(
        mapValues(
          config,
          code => `module.exports = ${code}`
        ),
        (code, name) => `${name}.js`
      )
    },
  )
})()
