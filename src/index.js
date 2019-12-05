import endent from 'endent'
import getPackageName from 'get-package-name'

const lodash = getPackageName(require.resolve('lodash'))
const tinycolor2 = getPackageName(require.resolve('tinycolor2'))

export default {
  ...[
    'chunk',
    'replace',
    'endsWith',
    'some',
    'keyBy',
    'toPairs',
    'fromPairs',
    'repeat',
    'omit',
    'omitBy',
    'constant',
    'values',
    'flatten',
    'sortBy',
    'groupBy',
    'overEvery',
    'keys',
    'max',
    'stubArray',
    'stubObject',
    'join',
    'sum',
    'multiply',
    'isNaN',
    'zipObject',
    'pickBy',
    'cloneDeep',
    'isEqual',
    'isUndefined',
    'negate',
    'every',
    'stubTrue',
    'pick',
    'stubString',
    'xor',
    'last',
    'nth',
    'intersection',
    'uniq',
    'mergeAll',
    'identity',
    'noop',
    'merge',
    'reduce',
    'compact',
    'unary',
    'invoke',
    'invokeArgs',
    'isEmpty',
    'property',
    'includes',
    'pull',
    'pullAll',
    'pullAt',
  ].reduce((acc, current) => ({ ...acc, ...{ [current]: `require('${lodash}/fp/${current}')` } }), {}),

  map: `require('${lodash}/fp/map').convert({ cap: false })`,
  mapValues: `require('${lodash}/fp/mapValues').convert({ cap: false })`,
  flatMap: `require('${lodash}/fp/flatMap').convert({ cap: false })`,
  find: `require('${lodash}/fp/find').convert({ cap: false })`,
  findIndex: `require('${lodash}/fp/findIndex').convert({ cap: false })`,
  findKey: `require('${lodash}/fp/findKey').convert({ cap: false })`,
  forIn: `require('${lodash}/fp/forIn').convert({ cap: false })`,
  mapKeys: `require('${lodash}/fp/mapKeys').convert({ cap: false })`,
  divide: `require('${lodash}/fp/divide').convert({ rearg: true })`,
  filter: `require('${lodash}/fp/filter').convert({ cap: false })`,
  abs: 'Math.abs',
  slice: '(...args) => array => array.slice(...args)',
  first: 'array => array.length > 0 ? array[0] : undefined',
  drop: '(n = 1) => array => array.slice(n)',
  split: 'separator => string => string.split(separator)',
  consoleLog: 'arg => { console.log(arg); return arg }',
  then: 'func => promise => promise.then(func)',
  otherwise: 'func => promise => promise.catch(func || (x => x))',
  tryCatch: endent`(tryer, catcher) => (...args) => {
    try {
      return tryer(...args)
    } catch (error) {
      return (catcher || (x => x))(error, ...args)
    }
  }`,
  promiseAll: 'promises => Promise.all(promises)',
  parseInt: 'param => typeof param === \'string\' ? parseInt(param) : (str => parseInt(str, param))',
  ary: `require('${lodash}/ary')`,
  range: `require('${lodash}/range')`,
  times: `require('${lodash}/times')`,
  nullary: 'func => () => func()',
  filterAsync: endent`
    callback => async collection => {
      const filterResults = await Promise.all(collection.map(callback))
      return collection.filter((element, index) => filterResults[index])
    }`,
  ifElse: '(cond, thenFunc, elseFunc = x => x) => (...args) => cond(...args) ? thenFunc(...args) : elseFunc(...args)',

  getLocalStorageItem: 'name => localStorage.getItem(name)',
  setLocalStorageItem: endent`
    (name, value) => value !== undefined
      ? localStorage.setItem(name, value)
      : localStorage.removeItem(name)
    `,

  rgba: `(color, alpha) => require('${tinycolor2}')(color).setAlpha(alpha !== undefined ? alpha : 1).toString()`,
  darken: `(color, amount) => require('${tinycolor2}')(color).darken(amount).toString()`,

  endent: 'require(\'endent\')',
}
