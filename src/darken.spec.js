import darken from './darken'

export default {
  valid: () => expect(darken('#ff0000', .5)).toEqual('#fc0000'),
}
