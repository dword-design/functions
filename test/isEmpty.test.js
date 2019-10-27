const isEmpty = require('@dword-design/functions/dist/isEmpty')
const expect = require('expect')

describe('isEmpty', () => {

  it('undefined > true', () => expect(isEmpty(undefined)).toBeTruthy())

  describe('object', () => {
    it('true', () => expect(isEmpty({})).toBeTruthy())
    it('false', () => expect(isEmpty({ foo: 'bar' })).toBeFalsy())
  })

  describe('array', () => {
    it('true', () => expect(isEmpty([])).toBeTruthy())
    it('false', () => expect(isEmpty([ 'foo', 'bar'])).toBeFalsy())
  })
})
