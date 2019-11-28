import { darken } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(darken('#ff0000', .5)).toEqual('#fc0000')
