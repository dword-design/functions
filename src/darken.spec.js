import darken from './darken.js'

export default {
  valid: () => expect(darken('#ff0000', 0.5)).toEqual('#fc0000'),
}
